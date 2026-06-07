"use client";

import React, { forwardRef, useRef, useImperativeHandle, useEffect } from "react";

import { cn } from "@/lib/utils";

import { CheckboxProps } from "./checkbox.types";

import "./css/checkbox.base.css";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, error, indeterminate = false, unstyled = false, className, id, disabled, indicatorClassName, ...props },
    ref,
  ) => {
    // Hooks
    const internalRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => internalRef.current!);

    // Effects
    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    // States

    // Constants & Memos

    // Handlers

    return (
      <div className={cn("common-checkbox-wrapper flex flex-col gap-1.5", disabled && "opacity-60", className)}>
        <label
          className={cn(
            "inline-flex items-center gap-2.5 select-none",
            disabled ? "cursor-not-allowed" : "cursor-pointer",
          )}
        >
          <input
            type="checkbox"
            ref={internalRef}
            id={id}
            disabled={disabled}
            className="peer common-checkbox-input sr-only"
            {...props}
          />

          {/* Custom Checkbox indicator */}
          {!unstyled && (
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#BB9B49]/40 bg-[#F7F4ED] text-[#1F2933] transition-all duration-200",
                "peer-checked:border-[#BB9B49] peer-checked:bg-[#BB9B49] peer-checked:text-[#1F2933]",
                "peer-indeterminate:border-[#BB9B49] peer-indeterminate:bg-[#BB9B49] peer-indeterminate:text-[#1F2933]",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-[#BB9B49] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#F7F4ED]",
                "peer-disabled:cursor-not-allowed",
                error && "border-rose-500",
                "common-checkbox-indicator",
                indicatorClassName,
              )}
            >
              {indeterminate ? (
                // Line icon for indeterminate state
                <svg
                  className="h-3 w-3 fill-none stroke-current stroke-[3] opacity-100"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                // Standard checkmark icon
                <svg
                  className="h-3 w-3 fill-none stroke-current stroke-[3] opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
          )}

          {label && (
            <span className="common-checkbox-label text-sm font-medium text-[#1F2933] peer-disabled:text-[#1F2933]/50">
              {label}
            </span>
          )}
        </label>

        {error && <p className="common-checkbox-error pl-7.5 text-[11px] font-medium text-rose-500">{error}</p>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
