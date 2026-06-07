"use client";

import React, { forwardRef } from "react";

import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { AlertProps } from "./alert.types";

import "./css/alert.base.css";

const iconMap = {
  success: CheckCircle2,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, children, icon, onClose, showIcon = true, ...props }, ref) => {
    const IconComponent = iconMap[variant];

    return (
      <div ref={ref} role="alert" className={cn("common-alert", `common-alert-${variant}`, className)} {...props}>
        {showIcon && <div className="common-alert-icon">{icon || <IconComponent size={18} />}</div>}
        <div className="common-alert-body">
          {title && <h5 className="common-alert-title">{title}</h5>}
          {children && <div className="common-alert-content">{children}</div>}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="common-alert-close outline-none focus-visible:ring-1 focus-visible:ring-current"
            aria-label="Close alert"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = "Alert";
