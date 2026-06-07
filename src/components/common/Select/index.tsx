"use client";

import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SelectProps } from "./select.types";
import "./css/select.base.css";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      placeholder,
      options = [],
      size = "md",
      unstyled = false,
      disabled,
      className,
      id,
      leftIcon,
      value,
      defaultValue,
      onChange,
      onBlur,
      ...props
    },
    ref,
  ) => {
    // Refs
    const containerRef = useRef<HTMLDivElement>(null);
    const nativeSelectRef = useRef<HTMLSelectElement>(null);
    useImperativeHandle(ref, () => nativeSelectRef.current!);

    // States
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(() => {
      if (value !== undefined) return String(value);
      if (defaultValue !== undefined) return String(defaultValue);
      return "";
    });
    const [activeIndex, setActiveIndex] = useState(-1);

    // Sync state when controlled value changes
    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(String(value));
      }
    }, [value]);

    // Click outside handler to close dropdown
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // Get current option label for display
    const selectedOption = options.find(opt => opt.value === selectedValue);
    const displayLabel = selectedOption ? selectedOption.label : placeholder || "";

    // Handlers
    const handleToggle = () => {
      if (disabled) return;
      setIsOpen(prev => !prev);
      if (!isOpen) {
        // Find index of selected option
        const idx = options.findIndex(opt => opt.value === selectedValue);
        setActiveIndex(idx >= 0 ? idx : 0);
      }
    };

    const handleSelectValue = (val: string) => {
      setSelectedValue(val);
      setIsOpen(false);

      if (nativeSelectRef.current) {
        // Set native element value
        nativeSelectRef.current.value = val;

        // Dispatch synthetic change event to trigger native listeners/React Hook Form
        const event = new Event("change", { bubbles: true });
        nativeSelectRef.current.dispatchEvent(event);

        // Also call onChange if passed via props
        if (onChange) {
          const syntheticEvent = {
            target: nativeSelectRef.current,
            currentTarget: nativeSelectRef.current,
            type: "change",
            bubbles: true,
            cancelable: false,
            defaultPrevented: false,
            eventPhase: 3,
            isTrusted: true,
            nativeEvent: event,
            preventDefault: () => {},
            stopPropagation: () => {},
            isDefaultPrevented: () => false,
            isPropagationStopped: () => false,
            persist: () => {},
          } as unknown as React.ChangeEvent<HTMLSelectElement>;

          onChange(syntheticEvent);
        }
      }
    };

    // Keyboard navigation handlers
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (!isOpen) {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
          e.preventDefault();
          handleToggle();
        }
        return;
      }

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          break;
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex(prev => (prev < options.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex(prev => (prev > 0 ? prev - 1 : options.length - 1));
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (activeIndex >= 0 && activeIndex < options.length) {
            const activeOpt = options[activeIndex];
            if (!activeOpt.disabled) {
              handleSelectValue(activeOpt.value);
            }
          }
          break;
        case "Tab":
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    // Constants & Memos
    const sizeStyles = {
      sm: "h-9 pl-3 pr-9 text-xs rounded-lg",
      md: "h-11 pl-4 pr-11 text-sm rounded-xl",
      lg: "h-13 pl-5 pr-13 text-base rounded-2xl",
    };

    const leftPaddingStyles = {
      sm: "pl-9",
      md: "pl-11",
      lg: "pl-13",
    };

    const iconSizeStyles = {
      sm: "right-2.5 text-[13px]",
      md: "right-3.5 text-[14px]",
      lg: "right-4 text-[15px]",
    };

    const dropdownRoundedStyles = {
      sm: "rounded-lg mt-1",
      md: "rounded-xl mt-1.5",
      lg: "rounded-2xl mt-2",
    };

    return (
      <div
        ref={containerRef}
        className={cn("common-select-wrapper flex w-full flex-col gap-1.5", disabled && "opacity-60")}
      >
        {/* Render Label */}
        {label && (
          <label htmlFor={id} className="common-select-label text-xs font-bold text-[#1F2933] select-none">
            {label}
          </label>
        )}

        {/* Custom Dropdown Container */}
        <div className="common-select-container relative flex w-full flex-col">
          {/* Visible custom trigger button */}
          <button
            type="button"
            id={id}
            disabled={disabled}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            onBlur={onBlur as unknown as React.FocusEventHandler<HTMLButtonElement>}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            className={cn(
              "common-select-trigger relative flex w-full items-center justify-between border text-left font-medium transition-all duration-200 select-none focus:outline-none disabled:cursor-not-allowed",
              sizeStyles[size],
              leftIcon && leftPaddingStyles[size],
              !unstyled && "border border-[#BB9B49]/30 bg-[#F7F4ED] text-[#1F2933]",
              !unstyled && error && "border-rose-500 text-rose-700 focus:border-rose-500 focus:ring-rose-500",
              isOpen && !error && "border-[#BB9B49] bg-white ring-1 ring-[#BB9B49]",
              className,
            )}
          >
            {/* Left Icon */}
            {leftIcon && (
              <span
                className={cn(
                  "common-select-left-icon pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center justify-center text-[#1F2933]/50 select-none",
                  size === "sm" ? "left-2.5" : size === "lg" ? "left-4" : "left-3.5",
                )}
              >
                {leftIcon}
              </span>
            )}

            {/* Display value / placeholder */}
            <span className={cn("truncate", !selectedOption && "text-[#1F2933]/40")}>{displayLabel}</span>

            {/* Custom Chevron Icon */}
            <span
              className={cn(
                "common-select-icon pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center justify-center text-[#1F2933]/50 transition-transform duration-200",
                iconSizeStyles[size],
                isOpen && "rotate-180",
              )}
            >
              <ChevronDown size={size === "sm" ? 13 : size === "lg" ? 16 : 14} strokeWidth={2.5} />
            </span>
          </button>

          {/* Hidden Native Select for standard HTML form functionality */}
          <select
            ref={nativeSelectRef}
            value={selectedValue}
            onChange={e => {
              setSelectedValue(e.target.value);
              if (onChange) onChange(e);
            }}
            disabled={disabled}
            className="pointer-events-none sr-only absolute h-0 w-0 opacity-0"
            tabIndex={-1}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map(opt => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Custom Floating Options Dropdown */}
          {isOpen && (
            <ul
              role="listbox"
              aria-label={label || placeholder || "Options"}
              className={cn(
                "common-select-options-list absolute right-0 left-0 z-50 flex max-h-60 flex-col gap-px overflow-y-auto p-1.5",
                dropdownRoundedStyles[size],
              )}
              style={{ top: "100%" }}
            >
              {placeholder && (
                <li role="option" aria-selected={selectedValue === ""} className="common-select-option-placeholder">
                  {placeholder}
                </li>
              )}
              {options.map((opt, index) => {
                const isSelected = opt.value === selectedValue;
                const isActive = index === activeIndex;
                const optPx = size === "sm" ? "0.625rem" : size === "lg" ? "0.875rem" : "0.75rem";

                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={opt.disabled}
                    onClick={() => {
                      if (!opt.disabled) handleSelectValue(opt.value);
                    }}
                    onMouseEnter={() => {
                      if (!opt.disabled) setActiveIndex(index);
                    }}
                    style={{ "--opt-px": optPx } as React.CSSProperties}
                    className={cn(
                      "common-select-option flex items-center justify-between font-medium",
                      size === "sm"
                        ? "px-2.5 py-1.5 text-xs"
                        : size === "lg"
                          ? "px-3.5 py-2.5 text-[0.9rem]"
                          : "px-3 py-2 text-sm",
                      isSelected && "common-select-option--selected",
                      !isSelected && isActive && "common-select-option--active",
                      opt.disabled && "common-select-option--disabled",
                    )}
                  >
                    <span className="truncate">{opt.label}</span>
                    {isSelected && (
                      <Check
                        size={size === "sm" ? 11 : size === "lg" ? 15 : 13}
                        strokeWidth={2.5}
                        className="ml-2 shrink-0 text-[#EBD197]"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Render Error Message */}
        {error && <p className="common-select-error-msg text-[11px] font-medium text-rose-500">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";
