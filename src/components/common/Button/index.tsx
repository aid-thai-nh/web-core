"use client";

import React, { forwardRef, isValidElement, cloneElement, ReactElement, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import { ButtonProps } from "./button.types";

import "./css/button.base.css";
import "./css/button.responsive.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      unstyled = false,
      asChild = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    // Hooks

    // States

    // Constants & Memos
    // -- Xác định thẻ cha sẽ render (Nút bấm thường hoặc Slot)
    const Component = asChild ? Slot : "button";

    // -- Định nghĩa style mặc định (Tailwind) cho từng Variant
    const variantStyles = {
      primary:
        "bg-gradient-to-br from-[#EBD197] to-[#BB9B49] hover:from-[#F7F4ED] hover:to-[#EBD197] text-[#1F2933] border-[#BB9B49] transition-all",
      secondary: "bg-[#EBD197]/20 hover:bg-[#EBD197]/40 text-[#1F2933] border-transparent",
      outline: "bg-transparent hover:bg-[#EBD197]/15 border-[#BB9B49]/40 text-[#1F2933]",
      ghost: "bg-transparent hover:bg-[#EBD197]/15 text-[#1F2933]",
      danger: "bg-rose-600 hover:bg-rose-700 text-white border-transparent",
      link: "bg-transparent underline-offset-4 hover:underline text-[#BB9B49] p-0 font-bold",
    };

    // -- Định nghĩa style mặc định cho từng Size
    const sizeStyles = {
      sm: "h-9 px-3 text-xs rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm rounded-xl gap-2",
      lg: "h-13 px-7 text-base rounded-2xl gap-2.5",
      icon: "h-11 w-11 justify-center rounded-xl",
    };

    // Handlers

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : type}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles hệ thống (Typography, Flexbox, Transitions)
          "inline-flex cursor-pointer items-center justify-center border font-semibold transition-all duration-200 select-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BB9B49]",
          "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
          // Chỉ áp dụng biến thể mặc định khi KHÔNG bật unstyled
          !unstyled && variantStyles[variant],
          size === "icon" ? "" : sizeStyles[size],
          size === "icon" && "p-0",
          // Tích hợp ClassName từ bên ngoài truyền vào & SEMANTIC CLASSNAME cuối cùng
          className,
          "common-btn",
          !unstyled && `common-btn-${variant}`,
          `common-btn-${size}`,
        )}
        {...props}
      >
        {asChild ? (
          isValidElement(children) ? (
            cloneElement(children as ReactElement<{ children?: ReactNode }>, {
              children: (
                <>
                  {isLoading && (
                    <svg
                      className="common-btn-spinner h-4 w-4 animate-spin text-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                  {!isLoading && leftIcon && (
                    <span className="common-btn-icon-left flex items-center justify-center">{leftIcon}</span>
                  )}
                  <span className="common-btn-content">
                    {(children as ReactElement<{ children?: ReactNode }>).props.children}
                  </span>
                  {!isLoading && rightIcon && (
                    <span className="common-btn-icon-right flex items-center justify-center">{rightIcon}</span>
                  )}
                </>
              ),
            })
          ) : (
            children
          )
        ) : (
          <>
            {isLoading && (
              <svg
                className="common-btn-spinner h-4 w-4 animate-spin text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            {!isLoading && leftIcon && (
              <span className="common-btn-icon-left flex items-center justify-center">{leftIcon}</span>
            )}
            <span className="common-btn-content">{children}</span>
            {!isLoading && rightIcon && (
              <span className="common-btn-icon-right flex items-center justify-center">{rightIcon}</span>
            )}
          </>
        )}
      </Component>
    );
  },
);

Button.displayName = "Button";
