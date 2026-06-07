"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { InputProps } from "./input.types";

import "./css/input.base.css";
import "./css/input.responsive.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, rightIcon, size = "md", unstyled = false, disabled, className, id, ...props }, ref) => {
    // Hooks

    // States

    // Constants & Memos
    const sizeStyles = {
      sm: "h-9 px-3 text-xs rounded-lg",
      md: "h-11 px-4 text-sm rounded-xl",
      lg: "h-13 px-5 text-base rounded-2xl",
    };

    const leftPaddingStyles = {
      sm: "pl-9",
      md: "pl-11",
      lg: "pl-13",
    };

    const rightPaddingStyles = {
      sm: "pr-9",
      md: "pr-11",
      lg: "pr-13",
    };

    // Handlers

    return (
      <div className={cn("common-input-wrapper flex w-full flex-col gap-1.5", disabled && "opacity-60")}>
        {/* Render Label */}
        {label && (
          <label htmlFor={id} className="common-input-label text-xs font-bold text-[#1F2933] select-none">
            {label}
          </label>
        )}

        {/* Input Container holding input and icons */}
        <div className="common-input-container relative flex w-full items-center">
          {/* Left Icon */}
          {leftIcon && (
            <span className="common-input-icon-left absolute left-3.5 flex items-center justify-center text-[#1F2933]/50 select-none">
              {leftIcon}
            </span>
          )}

          {/* Actual HTML Input */}
          <input
            id={id}
            ref={ref}
            disabled={disabled}
            className={cn(
              // Base structural layout styles (Always applied to prevent icon text overlap)
              "w-full font-medium transition-all duration-200 focus:outline-none disabled:cursor-not-allowed",
              sizeStyles[size],
              leftIcon && leftPaddingStyles[size],
              rightIcon && rightPaddingStyles[size],
              // Base color & border styles (Only applied if NOT unstyled)
              !unstyled &&
                "border border-[#BB9B49]/30 bg-[#F7F4ED] text-[#1F2933] placeholder-[#1F2933]/40 focus:border-[#BB9B49] focus:ring-1 focus:ring-[#BB9B49]",
              // Error state styles (Only applied if NOT unstyled)
              !unstyled && error && "border-rose-500 text-rose-700 focus:border-rose-500 focus:ring-rose-500",
              // Class override & Semantic identifier
              className,
              "common-input-field",
            )}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <span className="common-input-icon-right absolute right-3.5 flex items-center justify-center text-[#1F2933]/50 select-none">
              {rightIcon}
            </span>
          )}
        </div>

        {/* Render Error Message */}
        {error && <p className="common-input-error-msg text-[11px] font-medium text-rose-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
