"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { AvatarProps } from "./avatar.types";

import "./css/avatar.base.css";

// Hàm hash đơn giản để tạo màu nền ngẫu nhiên nhưng cố định cho từng cụm Initials
const getInitialsBgColor = (name: string): string => {
  if (!name) return "bg-[#EBD197]/30 text-[#1F2933]";
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % 6;
  const colors = [
    "from-[#BB9B49]/40 to-[#BB9B49]/70 text-[#1F2933]",
    "from-blue-500/30 to-indigo-600/30 text-indigo-950",
    "from-purple-500/30 to-pink-600/30 text-purple-950",
    "from-amber-500/30 to-orange-600/30 text-amber-950",
    "from-rose-500/30 to-red-600/30 text-rose-950",
    "from-cyan-500/30 to-blue-600/30 text-cyan-950",
  ];
  return colors[index];
};

// Hàm lấy chữ cái đầu tiên từ tên để hiển thị initials
const getInitials = (text: string): string => {
  if (!text) return "";
  const parts = text.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  const first = parts[0].charAt(0);
  const last = parts[parts.length - 1].charAt(0);
  return `${first}${last}`.toUpperCase();
};

export function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  shape = "circle",
  status,
  statusPosition = "bottom-right",
  unstyled = false,
  className,
  ...props
}: AvatarProps) {
  // States
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset state khi đổi source ảnh (render-time state synchronization)
  const [prevSrc, setPrevSrc] = useState(src);
  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasError(false);
    setIsLoading(true);
  }

  // Constants & Memos
  const sizeStyles = {
    xs: "h-6 w-6 text-[10px]",
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-lg",
    xl: "h-20 w-20 text-2xl",
  };

  const shapeStyles = {
    circle: "rounded-full",
    rounded: "rounded-xl",
    square: "rounded-none",
  };

  const statusSizeStyles = {
    xs: "h-2 w-2 border-1",
    sm: "h-2.5 w-2.5 border-1.5",
    md: "h-3.5 w-3.5 border-2",
    lg: "h-4 w-4 border-2.5",
    xl: "h-5 w-5 border-3",
  };

  const statusPositionStyles = {
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  };

  const statusColorStyles = {
    online: "bg-emerald-500",
    offline: "bg-zinc-500",
    away: "bg-amber-500",
    busy: "bg-rose-500",
  };

  // Lấy nội dung hiển thị fallback
  const renderFallback = () => {
    if (fallback) {
      if (typeof fallback === "string") {
        return getInitials(fallback);
      }
      return fallback;
    }
    return getInitials(alt || "User");
  };

  const nameForBg = typeof fallback === "string" ? fallback : alt || "User";
  const initialsBgClass = getInitialsBgColor(nameForBg);

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center select-none",
        !unstyled && sizeStyles[size],
        className,
        "common-avatar",
      )}
      {...props}
    >
      {/* Container của Image / Fallback */}
      <div
        className={cn(
          "flex h-full w-full items-center justify-center overflow-hidden font-bold",
          !unstyled && shapeStyles[shape],
          !unstyled && (src && !hasError ? "bg-[#EBD197]/25" : `bg-gradient-to-br ${initialsBgClass}`),
          "common-avatar-inner",
        )}
      >
        {src && !hasError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            className={cn(
              "h-full w-full object-cover transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100",
              "common-avatar-img",
            )}
          />
        ) : (
          <span className="common-avatar-fallback">{renderFallback()}</span>
        )}
      </div>

      {/* Render status indicator if specified */}
      {status && (
        <span
          className={cn(
            "absolute block rounded-full border-[#F7F4ED]",
            !unstyled && statusSizeStyles[size],
            !unstyled && statusPositionStyles[statusPosition],
            !unstyled && statusColorStyles[status],
            "common-avatar-status",
            `common-avatar-status-${status}`,
          )}
        />
      )}
    </div>
  );
}
