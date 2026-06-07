"use client";

import React, { forwardRef } from "react";

import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

import { TooltipArrowProps, TooltipContentProps, TooltipProps } from "./tooltip.types";

import "./css/tooltip.base.css";

// 1. Core Primitives re-exported
export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;

export const TooltipArrow = forwardRef<SVGSVGElement, TooltipArrowProps>(({ className, ...props }, ref) => {
  return <TooltipPrimitive.Arrow ref={ref} className={cn("common-tooltip-arrow", className)} {...props} />;
});
TooltipArrow.displayName = "TooltipArrow";

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, children, sideOffset = 4, ...props }, ref) => {
    return (
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn("common-tooltip-content", className)}
        {...props}
      >
        {children}
      </TooltipPrimitive.Content>
    );
  },
);
TooltipContent.displayName = "TooltipContent";

// 2. High-level plug-and-play component
export const Tooltip = ({
  content,
  children,
  side = "top",
  align = "center",
  sideOffset = 4,
  delayDuration = 200,
  showArrow = true,
  className,
  arrowClassName,
  ...props
}: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side={side} align={align} sideOffset={sideOffset} className={className}>
            {content}
            {showArrow && <TooltipArrow className={arrowClassName} />}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};
Tooltip.displayName = "Tooltip";
