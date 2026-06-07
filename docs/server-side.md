# 🖥️ Hướng Dẫn Kiến Trúc & Phát Triển Phía Server-Side (Server-Side Guide)

Tài liệu này phác thảo kiến trúc, quy chuẩn tổ chức thư mục và luồng xử lý dữ liệu phía Server-Side (giao tiếp Database, Server Actions, Route Handlers) khi hệ thống **WebCore** cần mở rộng tính năng backend nội bộ bằng Next.js.

---

## 🗺️ Luồng Dữ Liệu Phía Server-Side (Data Flow)

Để đảm bảo tính độc lập và khả năng tái sử dụng, mọi luồng dữ liệu Server-Side bắt buộc phải đi qua các tầng phân cấp rõ ràng:

### Hướng 1: Sử dụng Server Actions (Tương tác UI trực tiếp từ Web Client)

```text
[Client Component (UI)] ──(Call Action)──> [Server Action ("use server")] ──> [Server Service] ──> [Database]
```

### Hướng 2: Sử dụng Route Handlers (REST API cung cấp cho Mobile, bên thứ ba hoặc Webhook)

```text
[Client / Tác nhân ngoài] ──(HTTP request)──> [Route Handler (route.ts)] ──> [Server Service] ──> [Database]
```

---

## 📂 Quy Chuẩn Phân Bổ Thư Mục & Tập Tin

Khi tích hợp phần Server-Side, lập trình viên cần bố trí các tệp tin theo đúng sơ đồ cấu trúc dưới đây để tránh trùng lặp mã nguồn:

```text
src/
├── app/
│   └── api/                        # REST API Route Handlers toàn cục
│       └── [feature-name]/
│           └── route.ts            # GET, POST, PUT, DELETE controller
├── features/
│   └── [feature-name]/             # Thư mục module tính năng
│       ├── actions.ts              # Các Server Actions ("use server") dành riêng cho feature
│       ├── services/
│       │   ├── [feature].ts        # Gọi API Client (dùng cho Client Side)
│       │   └── [feature]-server.ts # [Server Side Only] Truy vấn DB, Logic xử lý Server
│       └── types.ts                # Khai báo kiểu dữ liệu DTO, Payload
└── lib/
    └── db.ts                       # Khởi tạo kết nối Database (Prisma/Drizzle Singleton Client)
```

---

## ⚡ Các Tầng Chi Tiết & Hướng Dẫn Triển Khai

### 1. Khởi tạo Singleton Database Connection (`src/lib/db.ts`)

Để ngăn việc tạo ra quá nhiều luồng kết nối dư thừa (Connection Pools) tới Database khi Next.js tự động khởi động lại trong môi trường phát triển (Hot Reloading), ta sử dụng cấu hình Singleton sau:

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

---

### 2. Tầng Logic Nghiệp Vụ Server (`src/features/[feature]/services/`)

Tệp này chứa toàn bộ các logic tính toán nặng, truy vấn database, mã hóa dữ liệu. Các thư viện hoặc tệp tin ở đây **chỉ được phép chạy trên Server** nên có thể import các dependencies nặng hoặc API keys bảo mật mà không sợ rò rỉ mã nguồn ra Client.

- **Tên tệp tin**: `[feature-name]-server.ts` (ví dụ: `product-server.ts`).
- **Nội dung mẫu**:

```typescript
// src/features/products/services/product-server.ts
import { db } from "@/lib/db";
import type { CreateProductInput } from "../types";

// Hàm chỉ chạy trên Server để đọc dữ liệu
export async function getProductsFromServer() {
  return await db.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// Hàm chỉ chạy trên Server để ghi dữ liệu
export async function createProductOnServer(data: CreateProductInput, userId: string) {
  // 1. Thực hiện validate dữ liệu đầu vào (Zod Schema Validation)
  // 2. Xử lý logic nghiệp vụ đặc thù
  return await db.product.create({
    data: {
      ...data,
      createdById: userId,
    },
  });
}
```

---

### 3. Tầng Giao Tiếp Trực Tiếp (Server Actions & Route Handlers)

#### Hướng A: Viết Server Actions (`actions.ts`)

Server Actions được sử dụng khi Client Component muốn kích hoạt một hành động thay đổi dữ liệu (Mutation) trên Server trực tiếp từ React Event (như onClick hoặc formAction) mà không muốn cấu hình API endpoint công khai.

- **Tên tệp tin**: `actions.ts` đặt trong thư mục feature tương ứng.
- **Nội dung mẫu**:

```typescript
"use server"; // Cờ đánh dấu để Next.js tách luồng xử lý sang Server

import { revalidatePath } from "next/cache";
import { createProductOnServer } from "./services/product-server";
import { verifySession } from "@/features/auth/services/auth-server";
import type { CreateProductInput } from "./types";

export async function createProductAction(payload: CreateProductInput) {
  try {
    // 1. Kiểm tra session/cookie người dùng trên Server
    const session = await verifySession();
    if (!session) {
      return { success: false, error: "Yêu cầu đăng nhập hệ thống" };
    }

    // 2. Gọi hàm nghiệp vụ Server để ghi DB
    const newProduct = await createProductOnServer(payload, session.userId);

    // 3. Xóa cache trang cũ để Next.js lấy dữ liệu mới ở lần render tiếp theo
    revalidatePath("/products");

    return { success: true, data: newProduct };
  } catch (error: any) {
    return { success: false, error: error.message || "Đã xảy ra lỗi hệ thống" };
  }
}
```

#### Hướng B: Viết Route Handlers (`src/app/api/`)

Sử dụng khi cần thiết lập REST API công khai cho bên thứ ba, Mobile App, hoặc tích hợp Webhooks (ví dụ: Stripe webhook, SMS webhook).

- **Tên tệp tin**: `route.ts` nằm trong thư mục API của App Router.
- **Nội dung mẫu**:

```typescript
// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { getProductsFromServer } from "@/features/products/services/product-server";

export async function GET() {
  try {
    const products = await getProductsFromServer();
    return NextResponse.json({ success: true, data: products });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
```

---

## 🔒 Quy Tắc Bảo Mật & Quản Lý Lỗi (Security & Error Handling)

1.  **Tuyệt đối không rò rỉ API Keys**: Không lưu trữ các token bí mật hoặc Private Key vào client-side bundle. Luôn đọc từ `process.env` tại các tệp Server-Side.
2.  **Sử dụng package `server-only`**: Để đảm bảo các tệp tin nghiệp vụ Server không vô tình bị import nhầm vào Client Component, hãy cài đặt và sử dụng directive import ở đầu file:
    ```typescript
    import "server-only";
    ```
3.  **Xác thực và phân quyền (Authentication & Authorization)**: Mọi Server Action và Route Handler liên quan đến thay đổi trạng thái hoặc dữ liệu nhạy cảm bắt buộc phải gọi hàm kiểm tra session ở dòng đầu tiên trước khi thực thi logic nghiệp vụ.
4.  **Bắt lỗi (Try/Catch)**: Phía Server Action phải bọc toàn bộ logic trong khối `try/catch` để tránh làm ứng dụng Next.js bị crash và trả ra thông báo lỗi chung có cấu trúc `{ success: false, error: "..." }` cho Client xử lý hiển thị.
