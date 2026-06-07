"use client";

import React, { useId } from "react";

import { cn } from "@/lib/utils";

import { SwitchProps } from "./switch.types";

import "./css/switch.base.css";

export function Switch({
  id,
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  className,
}: SwitchProps) {
  // Hooks
  const generatedId = useId();
  const switchId = id || generatedId;

  // Constants & Memos
  const sizeConfig = {
    sm: {
      track: "w-8 h-4",
      thumb: "w-3 h-3",
      thumbTranslate: checked ? "translate-x-3" : "translate-x-0",
    },
    md: {
      track: "w-11 h-6",
      thumb: "w-4 h-4",
      thumbTranslate: checked ? "translate-x-5" : "translate-x-0",
    },
    lg: {
      track: "w-14 h-7",
      thumb: "w-5 h-5",
      thumbTranslate: checked ? "translate-x-7" : "translate-x-0",
    },
  };

  const config = sizeConfig[size];

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label
      htmlFor={switchId}
      className={cn(
        "common-switch flex cursor-pointer items-start gap-3 select-none",
        disabled && "cursor-not-allowed",
        className,
      )}
    >
      {/* Toggle Track */}
      <span
        className={cn(
          "common-switch-track flex flex-shrink-0 items-center p-0.5",
          config.track,
          checked && "common-switch-track--checked",
          disabled && "common-switch-track--disabled",
        )}
      >
        {/* Hidden native checkbox for accessibility */}
        <input
          type="checkbox"
          id={switchId}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="common-switch-input"
        />
        {/* Sliding Thumb */}
        <span className={cn("common-switch-thumb", config.thumb, config.thumbTranslate)} />
      </span>

      {/* Label & Description */}
      {(label || description) && (
        <span className="flex flex-col gap-0.5">
          {label && (
            <span className={cn("leading-tight font-semibold text-[#1F2933]", size === "sm" ? "text-xs" : "text-sm")}>
              {label}
            </span>
          )}
          {description && <span className="text-xs leading-relaxed font-normal text-[#1F2933]/55">{description}</span>}
        </span>
      )}
    </label>
  );
}

Switch.displayName = "Switch";
