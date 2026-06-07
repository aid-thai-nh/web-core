# 🧩 Đặc Tả Kỹ Thuật & Hướng Dẫn Phát Triển Common Components

Tài liệu này hướng dẫn chi tiết quy trình xây dựng, cấu trúc thư mục, mã nguồn cốt lõi và các quy chuẩn ghi đè giao diện (style overrides) cho hai Common Components cốt lõi trong dự án WebCore: **Button** và **Input**.

---

## 1. Component 1: Button (Nút Bấm)

### 1.1. Cấu Trúc Thư Mục (Directory Architecture)

```text
src/components/common/Button/
├── index.tsx                 # Mã nguồn chính của Button
├── button.types.ts           # Khai báo TypeScript Props
└── css/                      # Thư mục CSS cô lập
    ├── button.base.css       # Hiệu ứng Hover, Active, Animation Loading
    └── button.responsive.css # Tinh chỉnh kích thước nút trên các Breakpoints
```

### 1.2. Khai Báo Kiểu Dữ Liệu (`button.types.ts`)

```typescript
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Kiểu dáng cốt lõi của Button */
  variant?: ButtonVariant;
  /**
   * Loại bỏ toàn bộ màu sắc, màu viền mặc định của variant.
   * Cho phép tùy biến hoàn toàn qua className mà không lo xung đột.
   */
  unstyled?: boolean;
  /** Kích thước hiển thị */
  size?: ButtonSize;
  /** Trạng thái đang tải dữ liệu (hiển thị Spinner và khóa click) */
  isLoading?: boolean;
  /** Kế thừa Radix Slot để bọc các phần tử con như thẻ Link Next.js */
  asChild?: boolean;
  /** Icon hiển thị bên trái văn bản */
  leftIcon?: ReactNode;
  /** Icon hiển thị bên phải văn bản */
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
```

### 1.3. Mã Nguồn Cốt Lõi (`index.tsx`)

```typescript
"use client";

import React, { forwardRef, isValidElement, cloneElement, ReactElement, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ButtonProps } from "./button.types";
import "./css/button.base.css";
import "./css/button.responsive.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      unstyled = false,
      asChild = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    const variantStyles = {
      primary: "bg-emerald-600 hover:bg-emerald-700 text-white border-transparent",
      secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 border-transparent dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white",
      outline: "bg-transparent hover:bg-slate-50 border-slate-200 text-slate-700 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-200",
      ghost: "bg-transparent hover:bg-slate-100 text-slate-700 dark:hover:bg-slate-800 dark:text-slate-200",
      danger: "bg-rose-600 hover:bg-rose-700 text-white border-transparent",
      link: "bg-transparent underline-offset-4 hover:underline text-emerald-600 p-0",
    };

    const sizeStyles = {
      sm: "h-9 px-3 text-xs rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm rounded-xl gap-2",
      lg: "h-13 px-7 text-base rounded-2xl gap-2.5",
      icon: "h-11 w-11 justify-center rounded-xl",
    };

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : type}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center border font-semibold transition-all duration-200 select-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500",
          "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
          !unstyled && variantStyles[variant],
          size === "icon" ? "" : sizeStyles[size],
          size === "icon" && "p-0",
          className,
          "common-btn",
          !unstyled && `common-btn-${variant}`,
          `common-btn-${size}`,
        )}
        {...props}
      >
        {asChild ? (
          isValidElement(children) ? (
            cloneElement(children as ReactElement<{ children?: ReactNode }>, {
              children: (
                <>
                  {isLoading && (
                    <svg className="common-btn-spinner h-4 w-4 animate-spin text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  {!isLoading && leftIcon && <span className="common-btn-icon-left flex items-center justify-center">{leftIcon}</span>}
                  <span className="common-btn-content">{(children as ReactElement<{ children?: ReactNode }>).props.children}</span>
                  {!isLoading && rightIcon && <span className="common-btn-icon-right flex items-center justify-center">{rightIcon}</span>}
                </>
              ),
            })
          ) : (
            children
          )
        ) : (
          <>
            {isLoading && (
              <svg className="common-btn-spinner h-4 w-4 animate-spin text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {!isLoading && leftIcon && <span className="common-btn-icon-left flex items-center justify-center">{leftIcon}</span>}
            <span className="common-btn-content">{children}</span>
            {!isLoading && rightIcon && <span className="common-btn-icon-right flex items-center justify-center">{rightIcon}</span>}
          </>
        )}
      </Component>
    );
  },
);

Button.displayName = "Button";
```

### 1.4. Tệp tin CSS Base (`css/button.base.css`)

```css
.common-btn-primary {
  box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.2);
}

.common-btn-primary:hover:not(:disabled) {
  box-shadow: 0 6px 20px 0 rgba(16, 185, 129, 0.3);
}

.common-btn-spinner {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 2. Component 2: Input (Ô Nhập Liệu)

### 2.1. Cấu Trúc Thư Mục (Directory Architecture)

```text
src/components/common/Input/
├── index.tsx                # Mã nguồn chính của Input
├── input.types.ts           # Khai báo TypeScript Props
└── css/                     # Thư mục CSS cô lập
    ├── input.base.css       # Hiệu ứng Focus, Animation xuất hiện lỗi
    └── input.responsive.css # Xử lý cỡ chữ và hành vi trên các Breakpoints
```

### 2.2. Khai Báo Kiểu Dữ Liệu (`input.types.ts`)

```typescript
import { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Nhãn văn bản hiển thị phía trên ô nhập liệu */
  label?: string;
  /** Thông điệp lỗi hiển thị bên dưới ô nhập liệu (nếu có) */
  error?: string;
  /** Icon hiển thị ở góc bên trái */
  leftIcon?: ReactNode;
  /** Icon hiển thị ở góc bên phải (ví dụ: Icon con mắt ẩn/hiện mật khẩu) */
  rightIcon?: ReactNode;
  /** Kích thước chiều cao của Input */
  size?: InputSize;
  /** Bỏ style màu nền và border mặc định của hệ thống */
  unstyled?: boolean;
}
```

### 2.3. Mã Nguồn Cốt Lõi (`index.tsx`)

```typescript
"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { InputProps } from "./input.types";
import "./css/input.base.css";
import "./css/input.responsive.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      leftIcon,
      rightIcon,
      size = "md",
      unstyled = false,
      disabled,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const sizeStyles = {
      sm: "h-9 px-3 text-xs rounded-lg",
      md: "h-11 px-4 text-sm rounded-xl",
      lg: "h-13 px-5 text-base rounded-2xl",
    };

    const leftPaddingStyles = {
      sm: "pl-9",
      md: "pl-11",
      lg: "pl-13",
    };

    const rightPaddingStyles = {
      sm: "pr-9",
      md: "pr-11",
      lg: "pr-13",
    };

    return (
      <div className={cn("flex flex-col gap-1.5 w-full common-input-wrapper", disabled && "opacity-60")}>
        {label && (
          <label htmlFor={id} className="text-xs font-bold text-zinc-300 select-none common-input-label">
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full common-input-container">
          {leftIcon && (
            <span className="absolute left-3.5 flex items-center justify-center text-zinc-400 select-none common-input-icon-left">
              {leftIcon}
            </span>
          )}

          <input
            id={id}
            ref={ref}
            disabled={disabled}
            className={cn(
              "w-full font-medium transition-all duration-200 focus:outline-none disabled:cursor-not-allowed",
              sizeStyles[size],
              leftIcon && leftPaddingStyles[size],
              rightIcon && rightPaddingStyles[size],
              !unstyled &&
                "bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
              !unstyled && error && "border-rose-500 focus:border-rose-500 focus:ring-rose-500 text-rose-200",
              className,
              "common-input-field",
            )}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3.5 flex items-center justify-center text-zinc-400 select-none common-input-icon-right">
              {rightIcon}
            </span>
          )}
        </div>

        {error && <p className="text-[11px] font-medium text-rose-500 common-input-error-msg">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
```

### 2.4. Tệp tin CSS Base (`css/input.base.css`)

```css
/* Hiệu ứng bóng đổ mượt nâng cao cho Input khi được focus */
.common-input-field:focus {
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.15);
}

/* Hiệu ứng bóng đổ khi báo lỗi */
.common-input-field.border-rose-500:focus {
  box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.15);
}

/* Animation nhấp nháy cho text báo lỗi xuất hiện */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.common-input-error-msg {
  animation: slideDown 0.2s ease-out;
}
```

---

## 3. Quy Tắc Ghi Đè Style Cho Cả 2 Components (Style Overrides Rule)

Để tùy chỉnh giao diện các component này tại các trang đích chuyên biệt mà không làm biến đổi mã nguồn gốc, nhà phát triển áp dụng các phương thức sau:

1. **Thông qua `className` của Tailwind (Khuyên dùng cho thay đổi nhanh)**:
   Ví dụ, thêm gradient cho Button, hoặc bo tròn tròn trịa cho Input:
   ```tsx
   <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">CTA</Button>
   <Input className="rounded-full bg-zinc-900 border-indigo-500/50" />
   ```
2. **Thông qua CSS file của Page (Dành cho Responsive phức tạp)**:
   Đặt tên một lớp định danh (Semantic className) ở đuôi component và viết đè `@media` query trong tệp CSS responsive riêng biệt của trang đó:
   ```css
   /* src/app/[locale]/home/css/hero.responsive.css */
   @media (max-width: 575px) {
     .home-hero-btn.common-btn {
       width: 100%; /* Tràn viền màn hình trên mobile */
     }
     .home-search-input.common-input-field {
       height: 48px; /* Tự tăng chiều cao để dễ chạm ngón tay trên mobile */
     }
   }
   ```
3. **Bật chế độ `unstyled`**:
   Hữu ích khi giao diện hoàn toàn không có điểm chung với thiết kế mặc định hệ thống. Các thuộc tính màu sắc, đường viền sẽ được loại bỏ hoàn toàn, chỉ giữ lại các base structure cần thiết (ví dụ: padding tránh đè lên icon).
