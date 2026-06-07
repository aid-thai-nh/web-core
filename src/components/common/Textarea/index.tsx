"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { TextareaProps } from "./textarea.types";

import "./css/textarea.base.css";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      showCount = false,
      resize = "vertical",
      unstyled = false,
      disabled,
      maxLength,
      value,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    // Constants & Memos
    const currentLength = typeof value === "string" ? value.length : 0;
    const isNearLimit = maxLength !== undefined && currentLength >= maxLength * 0.9;
    const isAtLimit = maxLength !== undefined && currentLength >= maxLength;

    const resizeClassMap = {
      none: "common-textarea-resize-none",
      vertical: "common-textarea-resize-vertical",
      both: "common-textarea-resize-both",
    };

    return (
      <div className={cn("common-textarea-wrapper flex w-full flex-col gap-1.5", disabled && "opacity-60")}>
        {/* Render Label */}
        {label && (
          <label htmlFor={id} className="common-textarea-label text-xs font-bold text-[#1F2933] select-none">
            {label}
          </label>
        )}

        {/* Textarea Element */}
        <textarea
          id={id}
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          className={cn(
            "w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none disabled:cursor-not-allowed",
            resizeClassMap[resize],
            !unstyled &&
              "border border-[#BB9B49]/30 bg-[#F7F4ED] text-[#1F2933] placeholder-[#1F2933]/40 focus:border-[#BB9B49] focus:ring-1 focus:ring-[#BB9B49]",
            !unstyled && error && "border-rose-500 text-rose-700 focus:border-rose-500 focus:ring-rose-500",
            className,
            "common-textarea-field",
          )}
          {...props}
        />

        {/* Footer: Error + Character Counter */}
        <div className={cn("flex items-center", error ? "justify-between" : "justify-end")}>
          {/* Error message */}
          {error && <p className="common-textarea-error-msg text-[11px] font-medium text-rose-500">{error}</p>}

          {/* Character Counter */}
          {showCount && maxLength !== undefined && (
            <span
              className={cn(
                "text-[10px] font-medium tabular-nums",
                isAtLimit ? "font-bold text-rose-500" : isNearLimit ? "text-amber-600" : "text-[#1F2933]/50",
              )}
            >
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
