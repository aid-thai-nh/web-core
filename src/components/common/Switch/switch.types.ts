import { ReactNode } from "react";

export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps {
  /** ID cho input — dùng để liên kết label */
  id?: string;
  /** Nhãn hiển thị bên cạnh toggle */
  label?: ReactNode;
  /** Mô tả phụ bên dưới nhãn */
  description?: string;
  /** Trạng thái bật/tắt */
  checked?: boolean;
  /** Callback khi bật/tắt */
  onChange?: (checked: boolean) => void;
  /** Vô hiệu hóa switch */
  disabled?: boolean;
  /** Kích thước của toggle pill */
  size?: SwitchSize;
  /** className ghi đè cho container ngoài */
  className?: string;
}
