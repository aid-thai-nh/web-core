import { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Nhãn hiển thị phía trên textarea */
  label?: string;
  /** Thông điệp lỗi validation */
  error?: string;
  /** Hiển thị bộ đếm ký tự (cần kết hợp với maxLength) */
  showCount?: boolean;
  /** Kiểu co giãn kích thước textarea */
  resize?: "none" | "vertical" | "both";
  /**
   * Loại bỏ toàn bộ styles mặc định.
   * Dùng khi nhà phát triển muốn tự custom hoàn toàn.
   */
  unstyled?: boolean;
}
