import { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "info";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Biến thể màu sắc */
  variant?: BadgeVariant;
  /** Kích thước */
  size?: BadgeSize;
  /** Loại bỏ styles mặc định để tự do custom */
  unstyled?: boolean;
  children?: ReactNode;
}
