"use client";

import React, { forwardRef } from "react";

import { X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

import {
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogProps,
  DialogTitleProps,
} from "./dialog.types";

import "./css/dialog.base.css";

// 1. Core Primitives re-exported with consistent styling
export const DialogRoot = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>(({ className, ...props }, ref) => {
  return <DialogPrimitive.Overlay ref={ref} className={cn("common-dialog-overlay", className)} {...props} />;
});
DialogOverlay.displayName = "DialogOverlay";

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    { className, children, size = "md", variant = "default", overlayClassName, showCloseButton = true, ...props },
    ref,
  ) => {
    return (
      <DialogPortal>
        <DialogOverlay className={overlayClassName} />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "common-dialog-content p-6 text-[#1F2933]",
            `common-dialog-${size}`,
            `common-dialog-${variant}`,
            className,
          )}
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
      </DialogPortal>
    );
  },
);
DialogContent.displayName = "DialogContent";

export const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mb-4 flex flex-col gap-1.5 border-b border-[#BB9B49]/15 pb-4 text-center sm:text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

export const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-6 flex flex-col-reverse gap-2 border-t border-[#BB9B49]/15 pt-4 sm:flex-row sm:justify-end",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-lg font-bold tracking-tight text-[#1F2933]", className)}
      {...props}
    />
  );
});
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
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
DialogDescription.displayName = "DialogDescription";

// 2. High-level plug-and-play component
export const Dialog = ({
  trigger,
  title,
  description,
  children,
  footer,
  size = "md",
  variant = "default",
  showCloseButton = true,
  className,
  overlayClassName,
  ...props
}: DialogProps) => {
  return (
    <DialogRoot {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        size={size}
        variant={variant}
        showCloseButton={showCloseButton}
        className={className}
        overlayClassName={overlayClassName}
      >
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        <div className="common-dialog-body text-sm leading-relaxed">{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </DialogRoot>
  );
};
Dialog.displayName = "Dialog";
