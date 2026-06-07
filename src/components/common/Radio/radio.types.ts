import { InputHTMLAttributes, ReactNode } from "react";

export interface RadioOption {
  /** Giá trị thực của radio */
  value: string;
  /** Nhãn hiển thị bên cạnh radio */
  label: ReactNode;
  /** Mô tả phụ bên dưới nhãn */
  description?: string;
  /** Vô hiệu hóa tùy chọn này */
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** Tên nhóm radio (name attribute — bắt buộc để group hoạt động đúng) */
  name: string;
  /** Danh sách các lựa chọn */
  options: RadioOption[];
  /** Giá trị hiện tại đang được chọn */
  value?: string;
  /** Callback khi người dùng thay đổi lựa chọn */
  onChange?: (value: string) => void;
  /** Nhãn cho cả nhóm */
  label?: string;
  /** Thông điệp lỗi validation */
  error?: string;
  /** Hướng layout: dọc (vertical) hay ngang (horizontal) */
  orientation?: "vertical" | "horizontal";
  /** Vô hiệu hóa toàn bộ nhóm */
  disabled?: boolean;
  /** className ghi đè cho container ngoài */
  className?: string;
}

export interface RadioItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** Nhãn bên cạnh radio */
  label: ReactNode;
  /** Mô tả phụ */
  description?: string;
  /** Callback khi được chọn */
  onChange?: (value: string) => void;
}
