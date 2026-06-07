"use client";

import React, { useId } from "react";

import { cn } from "@/lib/utils";

import { RadioGroupProps, RadioItemProps } from "./radio.types";

import "./css/radio.base.css";

// ----- RadioItem (single option) -----
export function RadioItem({ label, description, disabled, onChange, className, id, ...props }: RadioItemProps) {
  const generatedId = useId();
  const radioId = id || generatedId;

  return (
    <label
      htmlFor={radioId}
      className={cn(
        "common-radio-item flex cursor-pointer items-start gap-3 select-none",
        disabled && "common-radio-item--disabled cursor-not-allowed",
        className,
      )}
    >
      {/* Hidden native input + custom indicator */}
      <span className="relative mt-0.5 flex items-center">
        <input
          type="radio"
          id={radioId}
          disabled={disabled}
          className="common-radio-input"
          onChange={e => {
            if (onChange && e.target.value) {
              onChange(e.target.value);
            }
          }}
          {...props}
        />
        <span className="common-radio-indicator" />
      </span>

      {/* Label & Description */}
      <span className="flex flex-col gap-0.5">
        <span className="text-sm leading-tight font-semibold text-[#1F2933]">{label}</span>
        {description && <span className="text-xs leading-relaxed font-normal text-[#1F2933]/55">{description}</span>}
      </span>
    </label>
  );
}

// ----- RadioGroup (container) -----
export function RadioGroup({
  name,
  options,
  value,
  onChange,
  label,
  error,
  orientation = "vertical",
  disabled,
  className,
}: RadioGroupProps) {
  return (
    <div className={cn("common-radio-group flex w-full flex-col gap-2", className)}>
      {/* Group Label */}
      {label && <span className="text-xs font-bold text-[#1F2933] select-none">{label}</span>}

      {/* Options list */}
      <div
        className={cn("flex gap-3", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap")}
        role="radiogroup"
      >
        {options.map(opt => (
          <RadioItem
            key={opt.value}
            id={`${name}-${opt.value}`}
            name={name}
            value={opt.value}
            label={opt.label}
            description={opt.description}
            disabled={disabled || opt.disabled}
            checked={value === opt.value}
            onChange={onChange}
          />
        ))}
      </div>

      {/* Error message */}
      {error && <p className="text-[11px] font-medium text-rose-500">{error}</p>}
    </div>
  );
}
