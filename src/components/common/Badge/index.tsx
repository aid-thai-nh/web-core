"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { BadgeProps } from "./badge.types";

import "./css/badge.base.css";

export function Badge({
  variant = "primary",
  size = "md",
  unstyled = false,
  className,
  children,
  ...props
}: BadgeProps) {
  // Hooks

  // States

  // Constants & Memos
  const variantStyles = {
    primary: "bg-[#BB9B49]/10 text-[#BB9B49] border-[#BB9B49]/25",
    secondary: "bg-[#EBD197]/25 text-[#1F2933]/80 border-[#BB9B49]/25",
    success: "bg-[#EAF4EC] text-[#2D5A34] border-[#C1E1C5]",
    warning: "bg-[#FAF4E5] text-[#6C521F] border-[#EBD197]",
    danger: "bg-[#F8ECEB] text-[#7B241C] border-[#ECC7C3]",
    info: "bg-[#E5EEF5] text-[#1F496B] border-[#BCD3E6]",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] rounded-md gap-1",
    md: "px-2.5 py-0.5 text-xs rounded-lg gap-1.5",
  };

  // Handlers

  return (
    <span
      className={cn(
        "inline-flex items-center border font-semibold transition-all duration-250 select-none",
        !unstyled && variantStyles[variant],
        !unstyled && sizeStyles[size],
        className,
        "common-badge",
        !unstyled && `common-badge-${variant}`,
        `common-badge-${size}`,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
