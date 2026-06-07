import React from "react";

export type AlertVariant = "success" | "warning" | "error" | "info";

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  title?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
  showIcon?: boolean;
}
