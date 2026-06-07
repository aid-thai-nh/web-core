import { ReactNode, SelectHTMLAttributes } from "react";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectOption {
  /** Giá trị thực sự (value) của option */
  value: string;
  /** Nhãn hiển thị trên giao diện */
  label: string;
  /** Vô hiệu hóa option này */
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /** Nhãn hiển thị phía trên dropdown */
  label?: string;
  /** Thông điệp lỗi validation bên dưới */
  error?: string;
  /** Placeholder khi chưa chọn giá trị nào */
  placeholder?: string;
  /** Danh sách các lựa chọn */
  options?: SelectOption[];
  /** Kích thước của Select */
  size?: SelectSize;
  /** Icon hiển thị bên trái trong dropdown */
  leftIcon?: ReactNode;
  /**
   * Loại bỏ toàn bộ styles mặc định.
   * Dùng khi nhà phát triển muốn tự custom hoàn toàn.
   */
  unstyled?: boolean;
}
