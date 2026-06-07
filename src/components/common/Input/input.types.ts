import { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Nhãn văn bản hiển thị phía trên ô nhập liệu */
  label?: string;
  /** Thông điệp lỗi hiển thị bên dưới ô nhập liệu (nếu có) */
  error?: string;
  /** Icon hiển thị ở góc bên trái */
  leftIcon?: ReactNode;
  /** Icon hiển thị ở góc bên phải */
  rightIcon?: ReactNode;
  /** Kích thước chiều cao của Input */
  size?: InputSize;
  /**
   * Nếu đặt là true, sẽ loại bỏ toàn bộ khung viền, màu sắc mặc định.
   * Giúp nhà phát triển tự do custom style bằng className bên ngoài.
   */
  unstyled?: boolean;
}
