# 📂 Sơ Đồ & Hướng Dẫn Tệp Tin Hệ Thống (Project Structure Guide)

Tài liệu này cung cấp cái nhìn toàn diện về toàn bộ cấu trúc thư mục và tập tin trong dự án **WebCore**, giúp lập trình viên nhanh chóng hiểu rõ vai trò của từng tệp tin và biết chính xác nơi cần truy cập để giải quyết các tác vụ tương ứng.

---

## 🗺️ Cấu Trúc Tổng Quan (Root Directory)

Dưới đây là sơ đồ chi tiết các thư mục và tệp tin tại thư mục gốc của dự án:

| Tên Thư mục / Tập tin    | Loại    | Vai Trò & Chức Năng                                                                                    | Khi nào cần chỉnh sửa / Truy cập?                                                             |
| :----------------------- | :------ | :----------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| **`.agents/`**           | Thư mục | Chứa các gói cấu hình Agent Skills hỗ trợ AI pair-programming phát triển frontend, thiết kế, UI.       | **Không tự ý sửa.** Chỉ truy cập để tham khảo hướng dẫn thiết kế.                             |
| **`.husky/`**            | Thư mục | Cấu hình Git Hooks. Tự động kích hoạt Prettier & ESLint kiểm tra code trước khi `git commit`.          | Khi cần cấu hình thêm các ràng buộc git commit mới.                                           |
| **`.vscode/`**           | Thư mục | Chứa cài đặt riêng cho IDE VSCode (như tự động định dạng và sắp xếp import khi nhấn Lưu - `Ctrl + S`). | Khi cần chia sẻ cấu hình IDE chung cho cả team.                                               |
| **`docs/`**              | Thư mục | Chứa tài liệu đặc tả kỹ thuật, quy chuẩn và hướng dẫn phát triển của dự án.                            | **Nên đọc trước khi code.** Truy cập khi cần tra cứu coding style hoặc bổ sung quy chuẩn mới. |
| **`public/`**            | Thư mục | Thư mục chứa tài nguyên tĩnh được Next.js phục vụ trực tiếp tại root URL (`/`) không qua biên dịch.    | Khi cần đặt favicon, robots.txt, sitemap hoặc ảnh SEO chia sẻ mạng xã hội.                    |
| **`src/`**               | Thư mục | **Trái tim ứng dụng** - Chứa toàn bộ mã nguồn React & Next.js của dự án.                               | Truy cập liên tục trong quá trình lập trình tính năng.                                        |
| **`AGENTS.md`**          | Tập tin | Chứa hướng dẫn và luật riêng cho AI Agent hoạt động trong repository này.                              | Khi cần cấu hình thêm luật cho AI Assistant.                                                  |
| **`ARCHITECTURE.md`**    | Tập tin | Sơ lược về kiến trúc Module-Driven và cách tổ chức các tầng thư mục của dự án.                         | Xem để nắm bắt tư duy kiến trúc phân tầng.                                                    |
| **`CLAUDE.md`**          | Tập tin | Hướng dẫn nhanh các lệnh CLI (build, dev, format, test) cho AI Agent.                                  | Thường do AI Agent tự đọc.                                                                    |
| **`README.md`**          | Tập tin | Tài liệu giới thiệu tổng quan dự án, công nghệ, hướng dẫn cài đặt và khởi chạy.                        | Cập nhật khi có sự thay đổi lớn về cách chạy dự án hoặc công nghệ chính.                      |
| **`components.json`**    | Tập tin | Tệp cấu hình cài đặt của thư viện UI Shadcn.                                                           | Khi cần tinh chỉnh alias hoặc đường dẫn cài đặt Shadcn UI.                                    |
| **`eslint.config.mjs`**  | Tập tin | Cấu hình của ESLint v9. Quy định các luật cảnh báo lỗi cú pháp và code quality.                        | Khi cần bật/tắt hoặc thêm bớt các quy tắc linting.                                            |
| **`next.config.ts`**     | Tập tin | Tệp cấu hình hệ thống chính của Next.js (Rewrite, Redirect, Optimizations...).                         | Khi cần cấu hình domain cho ảnh ngoại, proxy API hoặc cài đặt plugin build.                   |
| **`package.json`**       | Tập tin | Khai báo metadata dự án, các câu lệnh script viết tắt, và danh sách các gói thư viện phụ thuộc.        | Khi cần thêm thư viện mới hoặc sửa các câu lệnh chạy (`dev`, `build`...).                     |
| **`pnpm-lock.yaml`**     | Tập tin | Khóa cố định phiên bản của các thư viện bên thứ ba giúp đồng bộ phiên bản code giữa mọi máy dev.       | **Tự động cập nhật** bởi `pnpm install`, không sửa bằng tay.                                  |
| **`postcss.config.mjs`** | Tập tin | Cấu hình bộ xử lý CSS PostCSS, tích hợp Tailwind CSS v4.                                               | Chỉ sửa khi cần tích hợp thêm plugin CSS đặc biệt.                                            |
| **`tsconfig.json`**      | Tập tin | Cấu hình biên dịch ngôn ngữ TypeScript (chỉ định alias `@/*`, target ES...).                           | Khi cần bổ sung alias hoặc cấu hình khắt khe hơn cho TypeScript.                              |

---

## ⚡ Cấu Trúc Chi Tiết Thư Mục `src/` (Mã Nguồn Chính)

Mã nguồn trong thư mục `src/` được tổ chức chặt chẽ để cô lập logic nghiệp vụ và tối ưu hóa việc tái sử dụng:

### 1. `src/app/` (Routing & Layouts)

- **Mục đích:** Quản lý cấu trúc định tuyến (Routing) dựa trên thư mục (Folder-based Routing) của Next.js App Router.
- **Ví dụ định tuyến cụ thể:**
  - `src/app/page.tsx` ➔ Giao diện trang chủ ứng với URL `/`
  - `src/app/buttons/page.tsx` ➔ Giao diện trang Nút bấm ứng với URL `/buttons`
  - `src/app/inputs/page.tsx` ➔ Giao diện trang Ô nhập liệu ứng với URL `/inputs`
  - `src/app/badges/page.tsx` ➔ Giao diện trang Nhãn trạng thái ứng với URL `/badges`
  - `src/app/checkboxes/page.tsx` ➔ Giao diện trang Hộp chọn ứng với URL `/checkboxes`
  - `src/app/skeletons/page.tsx` ➔ Giao diện trang Khung xương tải dữ liệu ứng với URL `/skeletons`
  - Mỗi thư mục con đại diện cho một phân đoạn của đường dẫn (route segment).
- **Các tệp tin chính:**
  - [layout.tsx](file:///d:/GlobalSafe/web-core/src/app/layout.tsx): Layout tổng thể của ứng dụng. Hoạt động giống như lớp vỏ ngoài (Shell), bọc xung quanh tất cả các trang. Nó tương tự cấu trúc `<Outlet />` của React Router hoặc `<Layout.Content />` của Ant Design, nhận `children` đại diện cho trang con hiển thị bên trong.
  - [page.tsx](file:///d:/GlobalSafe/web-core/src/app/page.tsx): Giao diện trang chủ (Home Page) tại URL gốc `/`.
  - `css/`: Chứa file responsive riêng cho trang chủ (ví dụ: [home-showcase.responsive.css](file:///d:/GlobalSafe/web-core/src/app/css/home-showcase.responsive.css)).
- **Khi nào chỉnh sửa?** Khi tạo trang mới (thêm folder con chứa `page.tsx`), thay đổi bố cục chung toàn hệ thống (`layout.tsx`), hoặc thêm cấu hình SEO metadata cho từng trang.

### 2. `src/components/` (Global UI Components)

- **Mục đích:** Chứa các Component giao diện thuần túy, dùng chung toàn ứng dụng, không mang logic nghiệp vụ.
- **Các thư mục con:**
  - `ui/`: Các component nguyên bản được tải trực tiếp từ Shadcn UI thông qua công cụ CLI (ví dụ: `button.tsx`, `dialog.tsx`). Các file này đóng vai trò là thư viện nguyên bản cấp thấp (low-level primitives) cho dự án, do Shadcn quản lý. **Hạn chế import trực tiếp các component này tại các trang tính năng** trừ khi component đó không cần tùy biến bổ sung hay bọc quy chuẩn.
  - `layout/`: Khung giao diện dùng chung như `Header`, `Footer`, `Sidebar`.
  - `common/`: Các component tái sử dụng nhiều nơi mang tính chất tiện ích cốt lõi (như `ErrorBoundary`, `Providers`). Đây cũng là nơi chứa **các component được bọc lại từ Shadcn UI (Wrapper Components)** hoặc **tự thiết kế 100% (Custom Components)** để áp dụng thiết kế riêng của dự án, xử lý loading tự động, hover micro-animations, hoặc cấu hình mặc định (như `Button` dùng chung kế thừa từ Radix Slot và bổ sung logic spinner). Lập trình viên nên ưu tiên sử dụng các component tại `common/` thay vì dùng trực tiếp từ `ui/`.
- **Khi nào chỉnh sửa?** Khi bạn cần thay đổi thiết kế cốt lõi của các component UI nền tảng hoặc thêm component dùng chung mới (như ModalConfirm, DataTable, Badge).

### 3. `src/features/` (Feature Modules - Trái tim nghiệp vụ)

- **Mục đích:** Chứa các Module tính năng cô lập hoàn toàn. Mỗi module hoạt động như một ứng dụng nhỏ độc lập.
- **Các thư mục con (ví dụ `src/features/auth/`):**
  - `components/`: Component giao diện chỉ dùng riêng cho Auth (như `LoginCard.tsx`).
  - `hooks/`: Hook gọi API hoặc logic riêng của Auth (như `useLoginMutation.ts`).
  - `services/`: Gọi API liên quan đến Auth (như `auth-api.ts`).
  - `stores/`: Zustand store lưu trạng thái riêng của Auth (nếu có).
  - `index.ts`: Cổng xuất khẩu (Public API) cho phép bên ngoài sử dụng các thành phần bên trong.
- **Khi nào chỉnh sửa?** Khi bạn nhận yêu cầu phát triển hoặc sửa đổi logic nghiệp vụ của một tính năng cụ thể.

### 4. Các thư mục hỗ trợ khác

- **`src/config/`**: Chứa hằng số hệ thống, cấu hình SEO mặc định ([site.ts](file:///d:/GlobalSafe/web-core/src/config/site.ts)). Sửa khi cần cập nhật tên dự án, keywords mặc định.
- **`src/services/`**: Khởi tạo Axios client ([http-client.ts](file:///d:/GlobalSafe/web-core/src/services/http-client.ts)) đính kèm token, handle Refresh Token. Sửa khi cần thay đổi baseURL, xử lý mã lỗi HTTP toàn cục.
- **`src/stores/`**: Chứa Zustand store tác động toàn cục như chuyển đổi giao diện sáng/tối ([theme.store.ts](file:///d:/GlobalSafe/web-core/src/stores/theme.store.ts)).
- **`src/styles/`**: Chứa định nghĩa style thô và biến màu sắc CSS v4 ([variables.css](file:///d:/GlobalSafe/web-core/src/styles/variables.css)). Sửa khi cần đổi tone màu chủ đạo của dự án.
- **`src/types/`**: Khai báo kiểu TypeScript toàn cục (Base Response, thực thể core như User). Sửa khi cấu trúc dữ liệu trả về từ backend thay đổi.

---

## 📜 Các Tài Liệu Tham Khảo Nhanh Cho Lập Trình Viên

- **Quy chuẩn Code & Comment:** Xem chi tiết tại **[Quy Chuẩn Lập Trình (docs/WebCoreConvention.md)](file:///d:/GlobalSafe/web-core/docs/WebCoreConvention.md)**.
- **Cách viết code Button mẫu:** Xem chi tiết tại **[Đặc tả Button (docs/workflow.md)](file:///d:/GlobalSafe/web-core/docs/workflow.md)**.
