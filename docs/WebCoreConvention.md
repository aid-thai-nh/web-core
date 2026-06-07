# Quy Chuẩn Phát Triển & Kiến Trúc Dự Án (WebCore Convention)

Tài liệu này quy định chi tiết các quy chuẩn cấu trúc thư mục, quy tắc đặt tên, cách tổ chức mã nguồn, luồng xử lý dữ liệu, quy định coding style và quy trình sáng tạo UI/UX áp dụng thống nhất cho dự án WebCore Master Template. Tất cả các lập trình viên và các AI Assistant khi tham gia phát triển dự án bắt buộc phải tuân thủ nghiêm ngặt nhằm đảm bảo mã nguồn sạch, dễ bảo trì, dễ mở rộng và dễ dàng tái sử dụng (clone) cho các dự án con.

---

## 1. Tổng Quan Hệ Thống & Công Nghệ Sử Dụng (Tech Stack)

Để đảm bảo tính ổn định tuyệt đối của hệ thống Core, toàn bộ các thư viện và framework được chốt cố định ở các phiên bản stable dưới đây. Nghiêm cấm tự ý nâng cấp (update) các dependency lên phiên bản mới hơn trong quá trình phát triển để tránh xung đột cấu hình, phá vỡ kiến trúc nền tảng hoặc gây lỗi không mong muốn trên hệ thống.

- **Framework**: Next.js v15.x (App Router)
- **Language**: TypeScript v5.x
- **Styling & UI**: Tailwind CSS v4.0 & Shadcn UI (Radix Primitives)
- **Server State & Caching**: @tanstack/react-query v5.x
- **Client Global State**: Zustand v5.x
- **HTTP Client**: Axios v1.x
- **Notification**: Sonner (Rich Colors, Top-Right Position)
- **Theme Management**: next-themes (Light/Dark Mode)

---

## 2. Nguyên Tắc Cốt Lõi (Core Principles)

- **Separation of Concerns (Phân tách mối quan tâm)**: Mỗi thành phần (Component, Hook, Store, Service) chỉ thực hiện một nhiệm vụ duy nhất và rõ ràng.
- **Global vs. Local Rule**:
  - Thư mục gốc ([src/components/](file:///d:/GlobalSafe/web-core/src/components/), [src/hooks/](file:///d:/GlobalSafe/web-core/src/hooks/), [src/stores/](file:///d:/GlobalSafe/web-core/src/stores/), [src/types/](file:///d:/GlobalSafe/web-core/src/types/)) chỉ chứa các thành phần Global (dùng chung cho toàn bộ hệ thống, ít nhất từ 2-3 tính năng lớn trở lên sử dụng).
  - Các thành phần liên quan đến nghiệp vụ, logic của một tính năng cụ thể bắt buộc phải nằm bên trong thư mục của tính năng đó tại [src/features/[feature-name]/](file:///d:/GlobalSafe/web-core/src/features/).
- **Co-location**: Gom các file liên quan chặt chẽ với nhau (styles, types, components phụ, hooks phụ) ở gần nơi nó được sử dụng nhất để giảm thiểu việc di chuyển giữa các thư mục cách xa nhau.

---

## 3. Bản Đồ Chi Tiết Nhiệm Vụ Thư Mục (Directory Responsibilities)

Thư mục nguồn [src/](file:///d:/GlobalSafe/web-core/src/) được phân cấp chặt chẽ. Lập trình viên cần hiểu rõ chức năng cụ thể của từng folder để đặt file đúng nơi quy định:

```text
src/
├── app/         # Next.js App Router (Chỉ chứa Page, Layout và Route-Handler)
├── assets/      # Tài nguyên tĩnh (Chỉ chứa ảnh, icon dạng SVG không đổi màu hoặc Font)
├── components/  # Các Component UI tái sử dụng TOÀN CỤC (Không chứa logic nghiệp vụ)
├── config/      # Tập tin cấu hình hệ thống (SEO default, navigation list, constant cố định)
├── data/        # Chứa dữ liệu tĩnh, cấu trúc dữ liệu JSON để mock hoặc phục vụ UI nhanh
├── features/    # TRÁI TIM DỰ ÁN - Chứa các Module/Tính năng lớn (Auth, Wallet, Products...)
├── hooks/       # Custom Hooks tiện ích TOÀN CỤC (Không liên quan đến API nghiệp vụ)
├── lib/         # Nơi khởi tạo cấu hình các thư viện bên thứ ba (Prisma, Cloudinary, v.v.)
├── services/    # Lớp trung gian giao tiếp mạng nền tảng (Axios Client, config Interceptors)
├── stores/      # Quản lý trạng thái Client-side TOÀN CỤC bằng Zustand (Theme, Auth State...)
├── styles/      # Các file định nghĩa CSS thô và CSS Variables cho Tailwind v4
└── types/       # Định nghĩa Typescript TOÀN CỤC (API response chung, DB Models)
```

### Nhiệm vụ chi tiết từng thư mục con:

#### `src/app/`

- Chỉ đóng vai trò cấu trúc định tuyến (routing) và phối hợp hiển thị.
- Không viết các component UI lớn hoặc logic xử lý dữ liệu phức tạp tại đây.
- Tất cả file `page.tsx` mặc định là Server Component, làm nhiệm vụ gọi API trực tiếp (fetch) lấy dữ liệu SEO hoặc initial data, sau đó truyền prop vào các component dưới tầng UI.

#### `src/assets/`

- `assets/images/`: Chứa ảnh tĩnh (png, jpg, webp) thuộc giao diện mặc định.
- `assets/icons/`: Chứa các icon định dạng `.svg` thô không thể render trực tiếp bằng JSX. _(Nếu là icon React, hãy đặt trong `src/components/icons/`)_.

#### `src/components/`

- `components/ui/`: Chứa các component nguyên bản từ Shadcn UI. Hạn chế sửa trực tiếp ở đây trừ khi muốn thay đổi thiết kế cốt lõi của toàn bộ hệ thống.
- `components/layout/`: Chứa các phần bố cục cấu trúc khung như Header, Footer, Sidebar, Breadcrumbs dùng chung trên nhiều trang.
- `components/common/`: Chứa các component giao diện mang tính chất "tiện ích chung" như DataTable, ModalConfirm, ImageFallback, StatusBadge. Các component này phải đảm bảo tính Pure & Generic (Không liên quan đến bất kỳ API nào, hoạt động hoàn toàn bằng props).

#### `src/config/`

- Chứa các cấu hình toàn cục tĩnh như: URL endpoints (`site.ts`), danh sách Menu của hệ thống, cài đặt phân quyền (roles config).

#### `src/features/`

- Đây là nơi tập trung 90% logic nghiệp vụ của ứng dụng. Mỗi module là một thư mục riêng biệt độc lập (ví dụ: `src/features/auth/`, `src/features/products/`).
- Tất cả hooks, components, types, services chỉ phục vụ riêng cho tính năng đó phải được gom hết vào trong thư mục con này (Nguyên tắc Co-location).

#### `src/hooks/`

- Chứa custom hooks thuần tiện ích UI/UX toàn cục như: `useDebounce`, `useLocalStorage`, `useClickOutside`, `useWindowSize`.
- Không chứa các hook gọi API lấy data nghiệp vụ tại đây (các hook API phải nằm ở `features/[feature]/hooks/` hoặc `hooks/api/` nếu là API dùng chung toàn hệ thống).

#### `src/lib/`

- Chứa file `utils.ts` (hàm `cn` ghép class Tailwind).
- Chứa các file init instance như `query-client.ts` (cấu hình React Query), `firebase-client.ts` hoặc các thư viện config khác.

#### `src/services/`

- Chỉ chứa file `http-client.ts` khởi tạo instance của Axios (nơi gắn Interceptor để tự động đính kèm Token Authorization, log lỗi tập trung, handle refresh token).

#### `src/stores/`

- Chứa các Zustand store mang tính chất trạng thái hệ thống: `useThemeStore` (quản lý light/dark), `useUserGlobalStore` (lưu thông tin user đã đăng nhập dùng ở nhiều page), `useSidebarStore` (đóng mở sidebar).

---

## 4. Quy Chuẩn Đặt Tên (Naming Conventions)

- **Thư mục (Directories)**: Sử dụng kebab-case (ví dụ: `shopping-cart`, `product-detail`, `api-client`).
- **Thành phần giao diện (React Components)**: Sử dụng PascalCase (ví dụ: `Button.tsx`, `ProductCard.tsx`, `HeaderNavigation.tsx`).
- **Hooks**: Sử dụng camelCase với tiền tố `use` (ví dụ: `useAuth.ts`, `useGetProductDetail.ts`).
- **Hàm tiện ích & Các file cấu hình (Utils, Stores, Configs)**: Sử dụng kebab-case hoặc camelCase tùy thuộc bản chất của tệp tin, nhưng khuyến khích kebab-case cho tên file (ví dụ: `cart.store.ts`, `site.ts`, `api-client.ts`).

---

## 5. Chi Tiết Quy Trình Tạo Thành Phần (Component & Feature Creation)

### 5.1. Quy chuẩn tạo Global/Common Component

Các component dùng chung cho toàn hệ thống được đặt trong [src/components/common/](file:///d:/GlobalSafe/web-core/src/components/common/) hoặc [src/components/layout/](file:///d:/GlobalSafe/web-core/src/components/layout/). Khi tạo mới, cần tuân thủ quy trình sau:

#### Cấu trúc thư mục của một Common Component:

- Nếu component đơn giản (chỉ gồm 1 file code duy nhất), có thể đặt trực tiếp tại `src/components/common/ButtonCustom.tsx`.
- Nếu component phức tạp (bao gồm logic tính toán riêng, sub-components, styles phụ hoặc các loại types đặc thù đi kèm), bắt buộc phải tạo một thư mục riêng:

```text
src/components/common/DataTable/
├── index.tsx                 # Entry point, export component chính
├── DataTableHeader.tsx       # Sub-component nội bộ (không export ra ngoài)
├── DataTablePagination.tsx   # Sub-component nội bộ
├── data-table.types.ts       # Types dành riêng cho DataTable
└── css/                      # Luôn tạo folder css riêng biệt
    ├── data-table.base.css       # Cấu hình override, animation nội bộ
    └── data-table.responsive.css # CSS media query xử lý responsive
```

### 5.2. Quy chuẩn cài đặt và sử dụng Shadcn UI Component

Shadcn UI không hoạt động giống như một thư viện UI truyền thống (như Ant Design, Material UI) nơi mà bạn có thể import trực tiếp bất kỳ component nào từ một thư viện cài sẵn trong `node_modules`. Đây là một hệ thống code distribution (phân phối mã nguồn trực tiếp vào dự án).

> [!IMPORTANT]
> **Quy định bắt buộc:**
>
> 1. **Không import "chạy" hoặc tự viết code giả lập**: Để sử dụng một component mới từ Shadcn UI, lập trình viên bắt buộc phải sử dụng công cụ CLI để tải và cài đặt trực tiếp component đó vào hệ thống thư mục của dự án thông qua lệnh:
>    ```bash
>    npx shadcn@latest add <component-name>
>    ```
>    _(Ví dụ: `npx shadcn@latest add dialog` hoặc `npx shadcn@latest add dropdown-menu`)_
> 2. **Quản lý tại thư mục UI chung**: Tất cả các component sau khi cài đặt sẽ tự động nằm trong thư mục [src/components/ui/](file:///d:/GlobalSafe/web-core/src/components/ui/) (ví dụ: `src/components/ui/button.tsx`, `src/components/ui/dialog.tsx`).
> 3. **Quyền tùy biến mã nguồn**: Vì mã nguồn component nằm trực tiếp trong thư mục [src/components/ui/](file:///d:/GlobalSafe/web-core/src/components/ui/), lập trình viên hoàn toàn có quyền và được khuyến khích tùy chỉnh trực tiếp file code này để phù hợp với định dạng thiết kế riêng của dự án mà không lo bị ghi đè khi cập nhật thư viện ngoài.

### 5.3. Quy chuẩn tạo một Feature Module

Mỗi Module/Tính năng lớn (ví dụ: auth, products, checkout, profile) sẽ là một "tiểu ứng dụng" độc lập nằm trong [src/features/](file:///d:/GlobalSafe/web-core/src/features/). Lập trình viên khi nhận một task nghiệp vụ mới (ví dụ: wallet) sẽ tạo một thư mục tính năng có cấu trúc chuẩn hóa như sau:

#### Sơ đồ cấu trúc một Feature chuẩn:

```text
src/features/products/
├── components/          # Các component chỉ phục vụ riêng cho tính năng này
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
│   └── FilterSidebar.tsx
├── hooks/               # Custom hooks xử lý logic hoặc API nội bộ feature
│   ├── useProductFilter.ts  # Hook quản lý state filter/search của UI
│   ├── useGetProducts.ts    # React Query Hook call API lấy danh sách
│   └── useToggleLike.ts     # React Query Hook xử lý thích sản phẩm
├── services/            # Nơi viết các hàm gọi API bằng Axios Client
│   └── product-api.ts   # Các hàm: getProductsApi, getProductByIdApi...
├── stores/              # (Nếu có) Zustand store cục bộ cho feature
│   └── product-filter.store.ts
├── types.ts             # Định nghĩa kiểu dữ liệu riêng cho module này
└── index.ts             # Khai báo các thành phần công khai (Public API) cho bên ngoài dùng
```

> [!WARNING]
> **Quy tắc cô lập Feature (Encapsulation):**
>
> - File `src/features/[feature-name]/index.ts` đóng vai trò là cổng bảo vệ. Chỉ những gì được export tại file này mới cho phép các thư mục khác (hoặc các page khác) import và sử dụng.
> - **Nghiêm cấm**: Không được phép từ một feature này đi import trực tiếp sâu vào thư mục con của một feature khác _(Ví dụ không viết: `import { ProductCard } from "@/features/products/components/ProductCard"` tại feature checkout)_. Nếu muốn dùng, file `products/index.ts` phải export nó ra, và gọi thông qua đường dẫn rút gọn: `import { ProductCard } from "@/features/products"`.

### 5.4. Quy chuẩn cấu trúc một Trang (Next.js Page)

Trong mô hình Next.js App Router, thư mục [src/app/](file:///d:/GlobalSafe/web-core/src/app/) chịu trách nhiệm định tuyến (Routing). Để giữ cho định tuyến luôn sạch và tối ưu SEO tốt nhất, cấu trúc của một thư mục trang được quy định như sau:

#### Cấu trúc một thư mục Page (Ví dụ trang chi tiết sản phẩm `/products/[id]`):

```text
src/app/[locale]/products/[id]/
├── page.tsx          # Server Component chính - Nhận params, xử lý SEO, Fetching dữ liệu đầu tiên
├── layout.tsx        # (Tùy chọn) Bố cục riêng cho phân nhánh route này
├── error.tsx         # Error Boundary để bắt lỗi tự động cho riêng page này
├── loading.tsx       # Giao diện skeleton hiển thị lúc trang đang tải dữ liệu
├── css/              # Luôn tạo folder css cho page
│   ├── index.responsive.css             # File tổng hợp import tất cả các responsive css khác
│   ├── product-gallery.responsive.css   # Responsive riêng cho phần ảnh
│   └── product-info.responsive.css      # Responsive riêng cho phần thông tin
└── _components/      # Thư mục riêng chứa các thành phần giao diện ghép nối của trang
    ├── ProductGallery.tsx
    ├── ProductInfo.tsx
    └── ProductReviews.tsx
```

#### Quy tắc viết mã nguồn cho các File trong Page:

- **`page.tsx` (Phải là Server Component mặc định)**:
  - Đóng vai trò là "Người điều phối". File này có nhiệm vụ gọi các hàm fetch dữ liệu trực tiếp (tầng server), cấu hình SEO thông qua hàm `generateMetadata`.
  - Tuyệt đối không viết các logic hiển thị HTML chi tiết, không lạm dụng `'use client'` trực tiếp tại file `page.tsx`. Thay vào đó, hãy import các client component hoặc các component ghép từ `_components/` vào đây.
- **Thư mục `_components/` (Private Components)**:
  - Tiền tố dấu gạch dưới `_` báo hiệu cho Next.js biết đây là thư mục nội bộ, hệ thống routing sẽ bỏ qua, không tự tạo đường dẫn cho thư mục này.
  - Chứa các khối giao diện lớn được bóc tách ra từ màn hình thiết kế để file `page.tsx` ghép nối.

### 5.5. Quy chuẩn Thiết Kế & Xây Dựng Common Component (Custom vs Shadcn Wrapper)

Khi phát triển một component dùng chung (Common Component) trong thư mục `src/components/common/`, nhà phát triển cần lựa chọn phương án thiết kế tối ưu dựa trên độ phức tạp của component:

#### 1. Chọn Lựa Giải Pháp: Tự Viết Từ Đầu (Custom) vs. Bọc Lại Shadcn UI (Wrapper)

- **Tự viết từ đầu (Custom A-Z)**:
  - _Áp dụng cho_: Các component đơn giản về mặt tương tác, có giao diện đặc thù và ít trạng thái phức tạp (ví dụ: Nút bấm đơn giản, Skeleton, Avatar, Badge, Spinner/Loading).
  - _Lợi ích_: Giảm thiểu các dependency dư thừa, tối ưu dung lượng bundle size và hoàn toàn chủ động kiểm soát cấu trúc HTML/CSS.
- **Bọc lại Shadcn UI (Wrapper)**:
  - _Áp dụng cho_: Các component có tương tác UI/UX phức tạp như Dialog, Dropdown Menu, Tooltip, Sheet, Select, Accordion, Calendar, Carousel. Những component này đòi hỏi xử lý WAI-ARIA, quản lý tiêu điểm bàn phím (keyboard focus), hay tính toán vị trí hiển thị (floating placement).
  - _Lợi ích_: Kế thừa trọn vẹn sức mạnh Accessibility của các thư viện Radix Primitives bên dưới của Shadcn, giảm thời gian code logic tương tác.
  - _Cách làm_:
    1. Cài đặt component nguyên bản vào `src/components/ui/` thông qua Shadcn CLI: `pnpm dlx shadcn@latest add <component>`.
    2. Tạo folder tương ứng trong `src/components/common/` (ví dụ `src/components/common/Dialog/`).
    3. Tạo file `index.tsx` bọc component từ `components/ui/`, cấu hình các props, giá trị mặc định, theme màu sắc, và bổ sung các tính năng tùy biến của doanh nghiệp/dự án trước khi xuất bản ra ngoài.

#### 2. Quy Trình 4 Bước Triển Khai Thực Tế

Bất kể chọn phương án nào, quá trình triển khai Common Component phức tạp bắt buộc phải tuân thủ nghiêm ngặt quy trình 4 bước sau:

- **Bước 1: Khởi tạo thư mục Co-location**:
  - Tạo thư mục riêng cho component tại `src/components/common/[ComponentName]/`.
  - Tạo file chính `index.tsx`, file định nghĩa type `[component-name].types.ts` và thư mục `css/` chứa `[component-name].base.css` và `[component-name].responsive.css`.
- **Bước 2: Khai báo Types chuẩn hóa**:
  - Định nghĩa toàn bộ props trong file `[component-name].types.ts`.
  - Hỗ trợ kế thừa trực tiếp các HTML Attributes chuẩn bằng cách kế thừa React Types (ví dụ: `React.ButtonHTMLAttributes<HTMLButtonElement>` hoặc `React.InputHTMLAttributes<HTMLInputElement>`).
  - Khai báo prop `asChild` (kế thừa `Slot` từ `@radix-ui/react-slot`) nếu component là dạng Wrapper linh hoạt có thể render dưới dạng thẻ khác (ví dụ: chuyển từ `<button>` thành thẻ `<a>` hoặc `<Link>`).
- **Bước 3: Viết logic `index.tsx` tuân thủ chuẩn CML**:
  - Áp dụng cấu trúc Comment Layout (CML) để phân chia mạch lạc: `// Hooks`, `// States`, `// Handlers`...
  - Sử dụng hàm `cn()` để ghép các class Tailwind mặc định với `className` tùy biến truyền từ bên ngoài vào.
  - Đảm bảo đính kèm các **Semantic ClassName** làm điểm neo (ví dụ: `common-btn`, `common-dialog`).
  - Nếu sử dụng `asChild`, hãy clone element con cẩn thận (sử dụng `React.cloneElement` hoặc Radix Slot) để chuyển giao event handlers, ref và props một cách chính xác mà không gây lỗi phân rã DOM.
- **Bước 4: Thiết kế CSS base/responsive cô lập**:
  - Viết các animation, hiệu ứng gradient, shadow phức tạp hoặc style ghi đè vào `css/[component-name].base.css`.
  - Viết các media query đáp ứng chuẩn Breakpoints vào `css/[component-name].responsive.css`.
  - Import các file CSS này trực tiếp vào `index.tsx` của component để đóng gói tính độc lập cho component.

---

## 6. Quy Chuẩn Comment Layout (CML) Cho React Component (Strict Structuring)

Mỗi React Component được tạo mới hoặc tái cấu trúc trong dự án bắt buộc phải tuân thủ nghiêm ngặt quy định viết comment phân chia các khu vực logic theo cấu trúc tuyến tính từ trên xuống dưới. Điều này giúp loại bỏ hoàn toàn việc viết comment vô tội vạ, giữ code gọn gàng và tăng tốc độ đọc hiểu mã nguồn của dự án lên gấp nhiều lần.

### 6.1. Cấu trúc Phân khu Tổng quan

Bên trong phần thân của React Component (Component Body), code phải được phân tầng và ngăn cách bằng các tiêu đề comment cấp 1 (`// Hooks`, `// States`, v.v.) và comment cấp 2 (`// -- Tên Tiểu Khu`) theo đúng thứ tự bắt buộc dưới đây:

```tsx
// Hooks (Khai báo tất cả hooks hệ thống, bên thứ ba và custom hooks)
// -- Global State (Ví dụ: Zustand Store hooks, useSession)
// -- Library Hooks (Ví dụ: useForm, useParams, useRouter)
// -- API Hooks (Ví dụ: Các hooks gọi API từ React Query)
// -- Ref Hooks (Ví dụ: useRef cho DOM elements)

// Watchers (Theo dõi sự thay đổi của Form fields hoặc reactive states)

// States (Khai báo các local state bằng useState)

// Constants & Memos (Khai báo hằng số nội bộ hoặc các giá trị xử lý qua useMemo)

// Effects (Xử lý side-effect bằng useEffect)

// Handlers (Xử lý sự kiện, callback, trigger actions, bọc trong useCallback)

return (...) // Khu vực render JSX của Component
```

### 6.2. Quy Tắc Viết Comment Chi Tiết (Nghiệp vụ Phân Tách)

Đối với ba khu vực động gồm **Constants & Memos**, **Effects**, và **Handlers**, mỗi khối logic/hàm/tính năng độc lập bên trong bắt buộc phải có thêm một comment mô tả nghiệp vụ có cấu trúc dạng `// -- Mô tả chức năng`.

#### 6.2.1. Constants & Memos

Mỗi hằng số hoặc một khối tính toán phức tạp phải có comment giải thích rõ ý đồ nghiệp vụ của nó để các nhà phát triển khác dễ dàng nắm bắt logic.

_Ví dụ:_

```tsx
// Constants & Memos
// -- Chuyển đổi định dạng giá sản phẩm sang dạng tiền tệ VNĐ
const formattedPrice = useMemo(() => {
  if (!product?.price) return "0đ";
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price);
}, [product?.price]);

// -- Kiểm tra trạng thái còn hàng của sản phẩm
const isOutOfStock = useMemo(() => {
  return !product?.stock || product.stock <= 0;
}, [product?.stock]);
```

#### 6.2.2. Effects

Mỗi hook `useEffect` xử lý một side-effect chuyên biệt bắt buộc phải được đặt tên mô tả nghiệp vụ bằng comment rõ ràng. Không gộp nhiều side-effect không liên quan vào chung một hook `useEffect` lớn.

_Ví dụ:_

```tsx
// Effects
// -- Gửi log phân tích hành vi khi người dùng xem chi tiết sản phẩm này
useEffect(() => {
  if (product?.id) {
    analyticsService.trackProductView(product.id, product.name);
  }
}, [product?.id, product?.name]);

// -- Reset số lượng mua về 1 khi người dùng chuyển đổi xem sản phẩm khác
useEffect(() => {
  setQuantity(1);
}, [product?.id]);
```

#### 6.2.3. Handlers

Tất cả các hàm xử lý hành động, sự kiện người dùng phải có comment chỉ định rõ mục tiêu tương tác.

_Ví dụ:_

```tsx
// Handlers
// -- Xử lý tăng/giảm số lượng sản phẩm muốn đặt mua
const handleQuantityChange = useCallback((type: "increase" | "decrease") => {
  setQuantity(prev => {
    if (type === "increase") return prev + 1;
    return prev > 1 ? prev - 1 : 1;
  });
}, []);

// -- Xử lý thêm sản phẩm hiện tại vào giỏ hàng cục bộ (Zustand)
const handleAddToCart = useCallback(() => {
  if (!product) return;

  addItemToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
  });

  toast.success("Đã thêm sản phẩm vào giỏ hàng thành công!");
}, [product, quantity, addItemToCart]);
```

### 6.3. Bản Mẫu Component Áp Dụng CML Thực Tế (E-commerce Template)

Dưới đây là mã nguồn một Component E-commerce hoàn chỉnh áp dụng chuẩn CML và các quy định đặt tên, cấu trúc thư mục của WebCore:

```tsx
"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cart.store";
import { useGetProductDetail } from "@/features/products/hooks/useGetProductDetail";

export function ProductDetailContainer() {
  // Hooks
  // -- Global State
  const addItemToCart = useCartStore(state => state.addItem);

  // -- Library Hooks
  const params = useParams();
  const productId = params?.id as string;

  // -- API Hooks
  const { data: product, isLoading, error } = useGetProductDetail(productId);

  // -- Ref Hooks
  const galleryRef = useRef<HTMLDivElement>(null);

  // Watchers

  // States
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("");

  // Constants & Memos
  // -- Định dạng hiển thị tiền tệ
  const formattedPrice = useMemo(() => {
    if (!product?.price) return "0đ";
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price);
  }, [product?.price]);

  // -- Kiểm tra trạng thái tồn kho
  const isOutOfStock = useMemo(() => {
    return !product?.stock || product.stock <= 0;
  }, [product?.stock]);

  // Effects
  // -- Đặt màu sắc mặc định khi dữ liệu sản phẩm tải xong
  useEffect(() => {
    if (product?.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product?.colors]);

  // -- Reset số lượng về 1 khi chuyển sản phẩm
  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  // Handlers
  // -- Xử lý tăng giảm số lượng mua hàng
  const handleQuantityChange = useCallback((type: "increase" | "decrease") => {
    setQuantity(prev => {
      if (type === "increase") return prev + 1;
      return prev > 1 ? prev - 1 : 1;
    });
  }, []);

  // -- Xử lý thêm vào giỏ hàng
  const handleAddToCart = useCallback(() => {
    if (!product) return;

    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      color: selectedColor,
    });

    toast.success("Thêm vào giỏ hàng thành công!");
  }, [product, quantity, selectedColor, addItemToCart]);

  if (isLoading) return <div className="prod-detail-loading">Đang tải thông tin sản phẩm...</div>;
  if (error || !product) return <div className="prod-detail-error">Không tìm thấy sản phẩm!</div>;

  return (
    <div className="prod-detail-wrapper mx-auto flex max-w-6xl flex-col gap-8 p-6 lg:flex-row">
      {/* Khu vực ảnh sản phẩm */}
      <div ref={galleryRef} className="prod-detail-gallery flex-1">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="prod-detail-main-img h-auto w-full rounded-2xl border border-slate-100 object-cover"
        />
      </div>

      {/* Khu vực thông tin chi tiết */}
      <div className="prod-detail-info flex-1 space-y-6">
        <h1 className="prod-detail-title text-3xl font-bold text-slate-900">{product.name}</h1>
        <p className="prod-detail-price text-2xl font-semibold text-emerald-600">{formattedPrice}</p>
        <p className="prod-detail-desc text-slate-600">{product.description}</p>

        {/* Chọn màu sắc */}
        {product.colors && product.colors.length > 0 && (
          <div className="prod-detail-colors space-y-2">
            <span className="text-sm font-medium text-slate-700">Màu sắc:</span>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-lg border px-4 py-2 text-sm transition-all ${
                    selectedColor === color
                      ? "border-emerald-600 bg-emerald-50 font-medium text-emerald-700"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Số lượng & Nút mua hàng */}
        <div className="prod-detail-actions flex items-center gap-6 border-t border-slate-100 pt-4">
          <div className="prod-detail-qty-selector flex items-center overflow-hidden rounded-lg border border-slate-200">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="bg-slate-50 px-3 py-2 hover:bg-slate-100 active:bg-slate-200"
            >
              -
            </button>
            <span className="min-w-[40px] px-4 py-2 text-center font-semibold text-slate-800">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="bg-slate-50 px-3 py-2 hover:bg-slate-100 active:bg-slate-200"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`flex-1 rounded-xl px-6 py-3 text-center font-semibold text-white transition-all ${
              isOutOfStock
                ? "cursor-not-allowed bg-slate-300"
                : "bg-emerald-600 shadow-sm shadow-emerald-200 hover:bg-emerald-700 active:scale-[0.98]"
            }`}
          >
            {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ hàng"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContainer;
```

---

## 7. Quy Chuẩn Sử Dụng CSS & Semantic ClassName (Crucial Rule)

Mặc dù dự án sử dụng Tailwind CSS v4 để viết thuộc tính kiểu dáng thông qua `className`, lập trình viên bắt buộc phải bổ sung thêm các **semantic-className** vào các thẻ HTML quan trọng.

#### Mục đích:

- **Định nghĩa rõ ràng ngữ nghĩa**: Nhìn vào code nhận biết ngay phần tử đó đóng vai trò gì trong cấu trúc component.
- **Dễ dàng Custom Responsive**: Tạo điểm neo để viết CSS ghi đè (override) bằng CSS variables tại `variables.css` khi xử lý các layout responsive cực kỳ phức tạp mà tiện ích của Tailwind viết quá dài.
- **Dễ dàng Target/Selector**: Hỗ trợ đắc lực cho việc viết Automation Test (Cypress, Playwright), chỉ định phần tử phân tích dữ liệu (Google Analytics Tracking), hoặc viết extension.

#### Quy tắc đặt tên Semantic ClassName:

- Đặt ở cuối cùng của chuỗi `className` hoặc trong hàm `cn()`.
- Đặt tên theo chuẩn `kebab-case` mô tả đúng đối tượng và có tiền tố (prefix) chỉ phạm vi (ví dụ: `auth-`, `prod-`, `common-`, `layout-`).

_Ví dụ minh họa:_

```tsx
// ❌ Sai quy chuẩn (Chỉ dùng các class utility của Tailwind, khó target và responsive phức tạp):
<div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-gray-200 shadow-sm">
  <img src={product.thumbnail} className="w-24 h-24 object-cover rounded-lg" />
  <div className="flex-1">
    <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
    <p className="text-xl font-bold text-emerald-600">{product.price}đ</p>
  </div>
</div>

//  Đúng quy chuẩn (Có tích hợp semantic-className ở cuối chuỗi class):
<div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl border border-gray-200 shadow-sm prod-card-item">
  <img src={product.thumbnail} className="w-24 h-24 object-cover rounded-lg prod-card-thumb" />
  <div className="flex-1 prod-card-body">
    <h3 className="text-lg font-semibold text-slate-900 prod-card-title">{product.name}</h3>
    <p className="text-xl font-bold text-emerald-600 prod-card-price">{product.price}đ</p>
  </div>
</div>
```

---

## 8. Hệ Thống Breakpoints Chuẩn & Quy Tắc CSS Responsive (Strict Architecture)

Để đảm bảo hiệu năng tối đa và tính dễ bảo trì khi xử lý các giao diện cực kỳ phức tạp (Responsive phức tạp trên nhiều thiết bị), dự án quy định nghiêm cấm lạm dụng các breakpoint tiện ích của Tailwind (như `md:`, `lg:`, `xl:`,...) trực tiếp trong chuỗi className của JSX/TSX. Thay vào đó, toàn bộ logic Responsive nâng cao và CSS override bắt buộc phải được bóc tách riêng biệt theo quy chuẩn cấu trúc CSS dưới đây.

### 8.1. Bảng Breakpoints Chuẩn

Tất cả các tệp tin CSS responsive khi sử dụng `@media` phải tuân thủ chính xác các ngưỡng kích thước và mục tiêu thiết bị sau:

| Thiết bị                      | Breakpoint (Media Query)                             | Container Width | Padding / Margin | Mô tả                                                   |
| :---------------------------- | :--------------------------------------------------- | :-------------- | :--------------- | :------------------------------------------------------ |
| **Mobile (S)**                | `@media (max-width: 575px)`                          | 100%            | `0 12px`         | Ưu tiên trải nghiệm vuốt chạm, giao diện full màn hình. |
| **Mobile (M)**                | `@media (min-width: 540px) and (max-width: 575px)`   | 100%            | `16px`           | Tinh chỉnh layout cho màn hình mobile ≥ 540px.          |
| **Tablet / Large Phones**     | `@media (min-width: 576px) and (max-width: 767px)`   | 100%            | `24px`           | Bắt đầu chuyển sang dạng Card (Centered container).     |
| **iPad / Tablet Portrait**    | `@media (min-width: 768px) and (max-width: 1023px)`  | 100%            | `24px`           | Tăng padding, điều chỉnh kích thước chữ.                |
| **Laptop / Tablet Landscape** | `@media (min-width: 1024px) and (max-width: 1279px)` | 900px           | `24px 0`         | Tối ưu hóa cho laptop screen hoặc tablet quay ngang.    |
| **Desktop Large**             | `@media (min-width: 1280px) and (max-width: 1439px)` | 1140px          | `16px 0`         | Màn hình Desktop lớn (Medium).                          |
| **Desktop Large (Mac Fix)**   | `@media (min-width: 1440px) and (max-width: 1500px)` | 1140px          | `40px 0`         | Tối ưu cho Mac13/Mac14 (với sidebar/taskbar).           |
| **Ultra Wide**                | Style mặc định (ngoài media query)                   | 1440px          | `20px 0`         | Màn hình chuẩn Desktop lớn (>= 1440px).                 |

### 8.2. Quy Tắc Tổ Chức File CSS (CSS Folder Architecture)

Bất kỳ thành phần giao diện nào (Component, Feature, hay Page) khi cần can thiệp style bổ sung hoặc responsive đều phải luôn luôn tạo một thư mục mang tên `css/` nằm ngay bên trong thư mục của thành phần đó.

> [!WARNING]
> Tuyệt đối không để tệp tin CSS nằm lộn xộn ngoài thư mục gốc của component.

#### Quy tắc đặt tên tệp tin CSS trong thư mục `css/`:

- **`[tên-component].base.css`**: Chứa các thuộc tính CSS cơ bản cấu hình cho component. Chỉ dùng để: Định nghĩa animation (`@keyframes`), các hiệu ứng Hover phức tạp, CSS Gradients, Custom Clip-path, hoặc ghi đè (override) style mặc định của thư viện thứ 3 (như Swiper, Radix).
- **`[tên-component].responsive.css`**: Chỉ chứa duy nhất các khối lệnh `@media` query tuân thủ đúng bảng Breakpoints Chuẩn ở trên. Tuyệt đối không viết các CSS thuộc tính mặc định không có media query vào tệp tin này.

#### 📁 Ví dụ cấu trúc thư mục Component hoàn chỉnh:

```text
src/components/common/Header/
├── index.tsx
├── HeaderLogo.tsx
└── css/                      # 👈 Thư mục CSS bắt buộc
    ├── header.base.css       # Chứa CSS animation, custom shadow...
    └── header.responsive.css # Chứa media query responsive cho Header
```

### 8.3. Quy Tắc Xử Lý CSS Responsive Cho Cấp Trang (Page Level CSS)

Tùy thuộc vào mức độ phức tạp và độ dài giao diện của trang (Next.js Page), lập trình viên phải lựa chọn 1 trong 2 giải pháp cấu trúc sau:

#### Trường hợp 1: Page ít Sections (Trang đơn giản)

Đối với các trang ngắn, ít thành phần (ví dụ: Trang Liên Hệ - Contact Page, Trang FAQ):

- Tạo một thư mục `css/` duy nhất trong thư mục trang.
- Tạo tệp tin `contact.responsive.css` trực tiếp để quản lý toàn bộ media query của trang đó.

```text
src/app/[locale]/contact/
├── page.tsx
└── css/
    ├── contact.base.css
    └── contact.responsive.css # 👈 Xử lý responsive tập trung cho cả trang
```

#### Trường hợp 2: Page nhiều Sections và Phức Tạp (Trang lớn)

Đối với các trang dài, chứa nhiều block/section giao diện khác nhau (ví dụ: Trang Chủ - Homepage, Trang Chi Tiết Sản Phẩm):

- Chia nhỏ responsive ra các tệp tin tương ứng với từng component con (`hero.responsive.css`, `features.responsive.css`, `testimonials.responsive.css`).
- Tạo một tệp tin gom chính có tên `index.responsive.css` nằm trong thư mục `css/` của trang đó.
- Sử dụng cú pháp `@import` để gom tất cả các tệp tin responsive nhỏ vào tệp tin chính.
- Cuối cùng, tệp tin `page.tsx` chỉ cần import duy nhất tệp tin `index.responsive.css`.

```text
src/app/[locale]/home/
├── page.tsx                   # 👈 Chỉ import "./css/index.responsive.css"
├── _components/
│   ├── HeroSection.tsx
│   ├── FeatureSection.tsx
│   └── BrandSection.tsx
└── css/                       # 👈 Thư mục CSS quản lý đa tệp tin responsive
    ├── index.responsive.css   # 👈 File trung tâm import các file bên dưới
    ├── hero.responsive.css    # Responsive riêng cho Hero Section
    ├── features.responsive.css # Responsive riêng cho Features Section
    └── brands.responsive.css  # Responsive riêng cho Brands Section
```

_Nội dung của [src/app/[locale]/home/css/index.responsive.css](file:///d:/GlobalSafe/web-core/src/app/[locale]/home/css/index.responsive.css):_

```css
@import "./hero.responsive.css";
@import "./features.responsive.css";
@import "./brands.responsive.css";
```

---

## 9. Quy Chuẩn Cấu Trúc Luồng Dữ Liệu & API (Data Flow Guidelines)

Để duy trì một kiến trúc nhất quán, luồng dữ liệu khi tương tác với API bắt buộc phải đi qua 4 tầng sau theo đúng thứ tự tuyến tính:

```text
[UI Component] ──> [Custom API Hook (React Query)] ──> [API Service (Axios)] ──> [Backend API]
```

> [!IMPORTANT]
> **Quy tắc phát triển Custom API Hook nghiêm ngặt:**
>
> - **Tên file**: Phải bắt đầu bằng tiền tố `use` + `MethodName` + `Action` (ví dụ: `useGetProducts.ts`, `usePostUserProfile.ts`).
> - **Xử lý Toast thông báo lỗi**: Không trực tiếp đặt các hàm thông báo hiển thị lỗi trực quan (như `toast.error()`) bên trong hàm xử lý của Hook. Toàn bộ lỗi phải được ném (bubble/throw) lên trên để tầng UI Component chủ động bắt lỗi hoặc để hệ thống Global Cache tự động xử lý. Điều này giúp giữ Hook thuần khiết, có thể tái sử dụng ở các giao diện ngầm (background fetch).

---

## 10. Cấu Hình Tự Động Định Dạng Code & Sắp Xếp Imports

Để đảm bảo code đồng bộ 100% giữa các lập trình viên khác nhau và loại bỏ các thay đổi vô nghĩa (noise changes) khi review Git Pull Request, dự án đã được tích hợp sẵn hệ thống Tự động hóa Định dạng Code và Sắp xếp Imports khi Save file.

### 10.1. Công cụ sử dụng

- **Prettier**: Quản lý quy chuẩn format (khoảng trắng, dấu chấm phẩy, dấu nháy đơn/kép...).
- **Prettier Plugin Sort Imports** (`@trivago/prettier-plugin-sort-imports`): Tự động phát hiện và sắp xếp lại toàn bộ thứ tự các câu lệnh import trong file dựa trên một tập quy tắc cố định.
- **VSCode Integration**: Dự án đã cấu hình sẵn thư mục `.vscode/settings.json` để tự động kích hoạt tính năng này khi lập trình viên thực hiện thao tác Save (`Ctrl + S`).

### 10.2. Quy tắc tự động sắp xếp Imports (Import Sorting Rules)

Mỗi khi lưu file, hệ thống sẽ tự động cấu trúc lại các câu lệnh import theo thứ tự ưu tiên từ ngoài (thư viện ngoài) vào trong (code nội bộ) như sau:

1. **React & Next.js Core**: Các thư viện nền tảng lõi.
   ```tsx
   import { useState, useEffect } from "react";
   import Image from "next/image";
   ```
2. **Third-party Libraries**: Các gói cài đặt từ `node_modules` (như Tailwind, Lucide, Axios, Zustand, TanStack Query, Radix...).
   ```tsx
   import { useQuery } from "@tanstack/react-query";
   import axios from "axios";
   ```
3. **Global Alias Path Imports (`@/...`)**: Các file tiện ích, components hoặc hook dùng chung toàn hệ thống, bắt đầu từ `@/`.
   ```tsx
   import { DataTable } from "@/components/common/DataTable";
   import { httpClient } from "@/services/http-client";
   ```
4. **Local Feature Paths (`./` hoặc `../`)**: Các components, types hoặc services nội bộ nằm cùng thư mục hoặc thư mục cha tương đối gần.
   ```tsx
   import { ProductCard } from "../components/ProductCard";
   import { Product } from "../types";
   ```
5. **Styles & Assets Imports**: Các file CSS hoặc tài nguyên tĩnh nằm cuối cùng.
   ```tsx
   import "./styles.css";
   ```

---

## 11. Thiết Kế Sáng Tạo Không Figma - Agent Skill tasteSkill

Trong trường hợp phát triển dự án hoặc tính năng mới mà không có file thiết kế Figma, Photoshop hay đặc tả UI cụ thể, hệ thống sẽ kích hoạt quy trình thiết kế thông qua Agent Skill `tasteSkill`. Đây là kỹ năng tối ưu hóa thẩm mỹ nghệ thuật dựa trên các nguyên tắc thiết kế hiện đại nhất.

#### Quy chuẩn thiết kế bằng `tasteSkill`:

- **Thiết lập Visual Hierarchy (Thứ bậc thị giác)**:
  - Sử dụng kích thước chữ và độ đậm (font weight) để dẫn dắt mắt người dùng. Tiêu đề phải to, đậm rõ rệt (`font-bold text-slate-900`), nội dung mô tả phụ phải dùng màu trung tính dịu mắt (`text-slate-500 text-sm`).
  - Sử dụng khoảng trắng (White Space/Padding) rộng rãi và phóng khoáng. Khoảng cách mặc định giữa các phần lớn nên tối thiểu là `py-12` đến `py-20` (hoặc `space-y-8` đến `space-y-12`) để tạo cảm giác sang trọng, thoáng đãng như các trang web của Apple, Stripe.
- **Quy chuẩn bo góc và bóng đổ (Rounding & Shadow)**:
  - Ưu tiên bo góc mềm mại cao cấp: sử dụng `rounded-2xl` (16px) hoặc `rounded-3xl` (24px) cho card và container chính; `rounded-xl` (12px) hoặc `rounded-lg` (8px) cho button và input. Tránh dùng góc vuông thô ráp.
  - Sử dụng bóng đổ cực mịn (Soft Shadows) bằng cách kết hợp viền mờ: `shadow-sm border border-slate-100/80` thay vì các khối bóng đen đậm thô thiển.
- **Màu sắc & Sự tương phản (Color Palette)**:
  - Sử dụng dải màu trung tính (Neutral tones: Slate hoặc Zinc) làm nền tảng chiếm 80% giao diện.
  - Chỉ sử dụng tối đa 1 màu chủ đạo (Accent Color - ví dụ: Indigo, Emerald, Violet) để highlight các thành phần CTA quan trọng như Buttons, Badges, Links, Active States.
- **Hiệu ứng chuyển động (Micro-interactions & Transitions)**:
  - Tất cả các phần tử có tương tác (Buttons, Cards, Links, Input fields) bắt buộc phải cấu hình hiệu ứng hover/focus mượt mà bằng Tailwind: `transition-all duration-300 ease-in-out` kết hợp với các hiệu ứng biến đổi nhẹ nhàng như `hover:scale-[1.02]` hoặc `hover:shadow-md`.
- **Thiết kế Mobile-First & Responsive mượt mà**:
  - Mọi màn hình sáng tạo bắt buộc phải có bố cục thích ứng tốt từ màn hình di động nhỏ nhất đến desktop lớn. Sử dụng linh hoạt hệ thống Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) kết hợp flexbox linh hoạt để giao diện tự co giãn tự nhiên nhất mà không bị vỡ hoặc xuất hiện thanh cuộn ngang (horizontal scroll).

---

## 12. Quy Tắc Quản Lý Mã Nguồn và Hệ Thống CI/CD

Để đảm bảo an toàn hệ thống và tránh làm đứt gãy quy trình tự động hóa triển khai sản phẩm:

> [!CAUTION]
> **Tuyệt đối không thay đổi `Jenkinsfile`:**
>
> Lập trình viên không được tự ý chỉnh sửa, thêm bớt cấu hình hoặc commit bất kỳ thay đổi nào liên quan đến các file `Jenkinsfile` cấu hình CI/CD trong các nhánh phát triển chính như `develop` và `main` trừ khi nhận được yêu cầu và chỉ thị trực tiếp bằng văn bản từ User/Tech Lead.
