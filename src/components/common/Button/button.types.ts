import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Kiểu dáng cốt lõi của Button */
  variant?: ButtonVariant;
  /**
   * Nếu đặt là true, component sẽ loại bỏ toàn bộ màu sắc, màu viền của các variant mặc định.
   * Cho phép lập trình viên tự do tùy biến hoàn toàn nút bấm bằng Tailwind (className) hoặc CSS Selector mà không lo xung đột.
   */
  unstyled?: boolean;
  /** Kích thước hiển thị */
  size?: ButtonSize;
  /** Trạng thái đang tải dữ liệu (Hiển thị Spinner và disable tương tác) */
  isLoading?: boolean;
  /** Biến nút thành một Slot để bọc thẻ Link của Next.js */
  asChild?: boolean;
  /** Icon hiển thị phía bên trái Text */
  leftIcon?: ReactNode;
  /** Icon hiển thị phía bên phải Text */
  rightIcon?: ReactNode;
  /** Cho phép truyền thêm class từ bên ngoài để override style nhanh */
  className?: string;
  children?: ReactNode;
}
