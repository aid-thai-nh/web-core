"use client";

import React, { forwardRef } from "react";

import { X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

import {
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerOverlayProps,
  DrawerProps,
  DrawerTitleProps,
} from "./drawer.types";

import "./css/drawer.base.css";

// 1. Core Primitives re-exported with Drawer prefix
export const DrawerRoot = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerPortal = DialogPrimitive.Portal;
export const DrawerClose = DialogPrimitive.Close;

export const DrawerOverlay = forwardRef<HTMLDivElement, DrawerOverlayProps>(({ className, ...props }, ref) => {
  return <DialogPrimitive.Overlay ref={ref} className={cn("common-drawer-overlay", className)} {...props} />;
});
DrawerOverlay.displayName = "DrawerOverlay";

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className, children, side = "right", overlayClassName, showCloseButton = true, ...props }, ref) => {
    return (
      <DrawerPortal>
        <DrawerOverlay className={overlayClassName} />
        <DialogPrimitive.Content
          ref={ref}
          className={cn("common-drawer-content p-6 text-[#1F2933]", `common-drawer-${side}`, className)}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close className="absolute top-4 right-4 cursor-pointer rounded-lg p-1.5 text-[#1F2933]/50 transition-colors outline-none hover:bg-[#EBD197]/30 hover:text-[#1F2933] focus-visible:ring-1 focus-visible:ring-[#BB9B49]">
              <X size={16} />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DrawerPortal>
    );
  },
);
DrawerContent.displayName = "DrawerContent";

export const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4 flex flex-col gap-1.5 border-b border-[#BB9B49]/15 pb-4 text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 border-t border-[#BB9B49]/15 pt-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-lg font-bold tracking-tight text-[#1F2933]", className)}
      {...props}
    />
  );
});
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <DialogPrimitive.Description
        ref={ref}
        className={cn("text-xs leading-relaxed text-[#1F2933]/60", className)}
        {...props}
      />
    );
  },
);
DrawerDescription.displayName = "DrawerDescription";

// 2. High-level plug-and-play component
export const Drawer = ({
  trigger,
  title,
  description,
  children,
  footer,
  side = "right",
  showCloseButton = true,
  className,
  overlayClassName,
  ...props
}: DrawerProps) => {
  return (
    <DrawerRoot {...props}>
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent
        side={side}
        showCloseButton={showCloseButton}
        className={className}
        overlayClassName={overlayClassName}
      >
        {(title || description) && (
          <DrawerHeader>
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>
        )}
        <div className="common-drawer-body flex-1 overflow-y-auto pr-1 text-sm leading-relaxed">{children}</div>
        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </DrawerRoot>
  );
};
Drawer.displayName = "Drawer";
