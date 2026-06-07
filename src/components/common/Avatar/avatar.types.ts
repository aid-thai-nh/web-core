import { HTMLAttributes, ReactNode } from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "rounded" | "square";
export type AvatarStatus = "online" | "offline" | "away" | "busy";
export type AvatarStatusPosition = "top-right" | "bottom-right" | "top-left" | "bottom-left";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** URL của ảnh đại diện */
  src?: string;
  /** Văn bản thay thế khi ảnh lỗi */
  alt?: string;
  /** Nội dung hiển thị thay thế khi không tải được ảnh (Initials hoặc Icon) */
  fallback?: ReactNode | string;
  /** Kích thước của Avatar */
  size?: AvatarSize;
  /** Hình dạng của Avatar */
  shape?: AvatarShape;
  /** Trạng thái trực tuyến của người dùng */
  status?: AvatarStatus;
  /** Vị trí của dot trạng thái */
  statusPosition?: AvatarStatusPosition;
  /** Tắt style mặc định để tự do custom style bằng className */
  unstyled?: boolean;
}
