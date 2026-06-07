import { HTMLAttributes, ReactNode } from "react";

export interface NavbarLink {
  name: string;
  path?: string;
  icon?: ReactNode;
  /** Danh sách trang con nếu có dropdown */
  items?: {
    name: string;
    path: string;
    description?: string;
    icon?: ReactNode;
  }[];
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Danh sách các liên kết điều hướng */
  items: NavbarLink[];
  /** Đường dẫn đang hoạt động để highlight */
  activePath?: string;
  /** Tắt style mặc định */
  unstyled?: boolean;
}
