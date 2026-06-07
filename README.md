# 🛡️ WebCore - Enterprise Master Template

[![Next.js](https://img.shields.io/badge/Next.js-15%20%2F%2016-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TanStack Query](https://img.shields.io/badge/React_Query-v5-FF4154?style=for-the-badge&logo=reactquery)](https://tanstack.com/query/latest)
[![Zustand](https://img.shields.io/badge/Zustand-v5-orange?style=for-the-badge)](https://github.com/pmndrs/zustand)

**WebCore** là dự án Master Template chuẩn hóa cấp doanh nghiệp, được thiết kế chuyên biệt để làm nền tảng (boilerplate/core) vững chắc cho việc khởi tạo và phát triển các ứng dụng web hướng người dùng cuối (Web User) như **E-commerce (Thương mại điện tử), Blog, Portal, Landing Page...**

Dự án thiết lập một hệ thống quy chuẩn nghiêm ngặt về cấu trúc thư mục, quy tắc viết mã nguồn, luồng xử lý dữ liệu và thiết kế responsive, giúp tăng tốc độ phát triển dự án, giảm thiểu nợ kỹ thuật (technical debt), và đảm bảo khả năng mở rộng bền vững khi có nhiều lập trình viên cùng tham gia.

---

## 🎯 Dự án này dùng để làm gì?

Mục tiêu chính của WebCore là giải quyết các bài toán nền tảng của một dự án Web Frontend hiện đại:

1. **Khởi tạo dự án nhanh chóng (Fast Kickstart)**: Cung cấp sẵn một bộ khung công nghệ (Tech Stack) mạnh mẽ, cấu hình sẵn môi trường, trình biên dịch, linter, formatter và pipeline CI/CD cơ bản.
2. **Chuẩn hóa Kiến trúc Module-Driven**: Chia nhỏ dự án thành các tính năng cô lập (Feature Modules). Mỗi lập trình viên có thể làm việc tập trung trong một feature mà không ảnh hưởng hoặc gây xung đột với các thành phần khác.
3. **Thống nhất phong cách lập trình (Coding Conventions)**:
   - Quy định chặt chẽ cách viết Custom Hook gọi API.
   - Phân cấp rõ ràng giữa Trạng thái toàn cục (Global State) và Trạng thái tính năng (Feature State) bằng Zustand.
   - Áp dụng cấu trúc Comment Layout (CML) thống nhất để mọi tệp tin nguồn đều dễ đọc và nhất quán.
4. **Tối ưu hóa Responsive & Styling**: Thiết lập hệ thống breakpoint chuẩn hóa cùng quy định cấu trúc CSS chặt chẽ để giải quyết triệt để các bài toán responsive phức tạp trên mọi kích thước màn hình mà không làm rối mã nguồn HTML/JSX.
5. **Đồng bộ hóa luồng dữ liệu (Data Flow)**: Thiết lập mô hình giao tiếp API 4 lớp liền mạch: `UI Component` ➔ `Custom API Hook (TanStack Query)` ➔ `API Service (Axios)` ➔ `Backend API`.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

Để đảm bảo tính ổn định tuyệt đối, toàn bộ công nghệ được chốt cố định ở các phiên bản ổn định (stable):

- **Core Framework:** Next.js v15/v16 (App Router) & React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & Shadcn UI (Radix Primitives)
- **State Management:** Zustand v5 (Client State) & @tanstack/react-query v5 (Server State)
- **Networking:** Axios v1.x (Centrally managed Interceptors)
- **Forms & Validation:** React Hook Form & Zod
- **Toasts & Alerts:** Sonner
- **Quality Assurance:** ESLint v9, Prettier (tự động sắp xếp imports), Husky (Pre-commit hooks)

---

## 📂 Sơ Đồ Cấu Trúc Hệ Thống (Directory Structure)

Thư mục nguồn `src/` được tổ chức chặt chẽ theo phân lớp chức năng:

```text
src/
├── app/                  # Next.js App Router (Routing, Layouts, Page & Route Handlers)
├── assets/               # Tài nguyên tĩnh (Images, raw SVG icons, Fonts)
├── components/           # UI Components TOÀN CỤC (Pure, Generic, không chứa logic nghiệp vụ)
│   ├── ui/               # Nguyên bản Shadcn UI (Hạn chế sửa trực tiếp)
│   ├── layout/           # Bố cục chính (Header, Footer, Sidebar)
│   └── common/           # Các component tiện ích dùng chung (ErrorBoundary, Providers, DataTable...)
├── config/               # Cấu hình tĩnh hệ thống (SEO metadata mặc định, Navigation...)
├── data/                 # Dữ liệu tĩnh, JSON mocks phục vụ UI nhanh
├── features/             # TRÁI TIM DỰ ÁN - Chứa các Feature Modules cô lập (Auth, Products, Cart...)
│   └── [feature-name]/   # Cấu trúc khép kín: components, hooks, services, stores, types
├── hooks/                # Custom Hooks tiện ích giao diện TOÀN CỤC (useDebounce, useClickOutside...)
├── lib/                  # Nơi khởi tạo & cấu hình thư viện bên thứ ba (utils.ts cho class merger)
├── services/             # Global HTTP Client (Axios Client với JWT, Refresh Token Interceptors)
├── stores/               # Zustand Store TOÀN CỤC (Theme, Global User Session, Sidebar toggles...)
├── styles/               # CSS Styles & CSS Variables (variables.css cho Tailwind v4)
└── types/                # Typescript Definitions TOÀN CỤC (API response chung, Core Entities)
```

---

## 🚀 Hướng Dẫn Bắt Đầu (Getting Started)

### 1. Cài đặt các gói phụ thuộc (Dependencies)

Dự án khuyến khích sử dụng `pnpm` để tối ưu hóa hiệu năng tải và dung lượng ổ đĩa:

```bash
pnpm install
# Hoặc nếu dùng npm/yarn:
npm install
# hoặc
yarn install
```

### 2. Chạy môi trường phát triển (Development)

```bash
pnpm dev
# Hoặc:
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để kiểm tra trang Landing Page giới thiệu và Demo hệ thống Core (chứa demo Giỏ hàng, Đăng nhập/Đăng ký mô phỏng).

### 3. Kiểm tra mã nguồn & Định dạng tự động

```bash
# Chạy Linter và tự động sửa lỗi cơ bản
pnpm lint

# Định dạng lại toàn bộ code & tự động sắp xếp imports
pnpm format
```

### 4. Biên dịch sản xuất (Production Build)

```bash
pnpm build
pnpm start
```

---

## 📜 Các Quy Chuẩn Lập Trình Quan Trọng (Core Conventions)

Để duy trì chất lượng mã nguồn cao, tất cả lập trình viên bắt buộc phải tuân thủ các quy tắc được định nghĩa chi tiết trong tài liệu nội bộ:

1.  **Quy tắc Custom API Hook:**
    - Tên file bắt buộc: `use` + `MethodName` + `Action` (ví dụ: [useGetUserAgency.ts](file:///d:/GlobalSafe/web-core/src/features/auth/hooks/useGetUserAgency.ts)).
    - Sử dụng lazy query/mutation triggers bọc trong `useCallback` để trả ra hàm trigger thủ công.
    - **Không** import hiển thị thông báo lỗi trực tiếp (như `toast.error`) bên trong hook; hãy để lỗi tự ném lên giao diện xử lý.
2.  **Quy chuẩn Comment Layout (CML):**
    - React Component phải phân chia các khu vực logic rõ ràng bằng comment phân khu từ trên xuống dưới: `// Hooks`, `// Watchers`, `// States`, `// Constants & Memos`, `// Effects`, `// Handlers` (xem chi tiết tại mục 6 trong [WebCoreConvention.md](file:///d:/GlobalSafe/web-core/docs/WebCoreConvention.md)).
3.  **Quy chuẩn Styling & Responsive:**
    - Mỗi thành phần khi cần responsive hoặc can thiệp CSS đặc thù bắt buộc phải có thư mục con `css/` chứa các tệp `.base.css` và `.responsive.css`.
    - Bắt buộc bổ sung **Semantic ClassName** ở cuối chuỗi class để dễ dàng định vị (Automation Test) và responsive nâng cao.
4.  **Bảo toàn Pipeline CI/CD:**
    - ⚠️ **Tuyệt đối không** tự ý sửa đổi, ghi đè hoặc commit thay đổi lên `Jenkinsfile` ở các nhánh `develop` và `main` trừ khi có chỉ thị trực tiếp.

> [!NOTE]
> Vui lòng đọc kỹ tài liệu chi tiết tại **[Kiến Trúc Dự Án (ARCHITECTURE.md)](file:///d:/GlobalSafe/web-core/ARCHITECTURE.md)** và **[Quy Chuẩn Phát Triển (docs/WebCoreConvention.md)](file:///d:/GlobalSafe/web-core/docs/WebCoreConvention.md)** trước khi bắt đầu viết bất kỳ dòng code nào.
