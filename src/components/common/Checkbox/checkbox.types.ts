import { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Nhãn văn bản hiển thị cạnh checkbox */
  label?: ReactNode;
  /** Thông điệp lỗi hiển thị bên dưới */
  error?: string;
  /** Trạng thái lửng lơ (lựa chọn một phần danh sách con) */
  indeterminate?: boolean;
  /** Loại bỏ styles mặc định để tự do custom */
  unstyled?: boolean;
  /** Class name tùy biến riêng cho ô indicator (hộp chọn hiển thị) */
  indicatorClassName?: string;
}
