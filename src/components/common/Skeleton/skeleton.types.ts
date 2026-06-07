import { HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Hiệu ứng chuyển động (mặc định là 'pulse') */
  animation?: "pulse" | "wave" | "none";
}
