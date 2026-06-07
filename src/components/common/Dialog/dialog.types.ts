import React from "react";

import { Dialog as DialogPrimitive } from "radix-ui";

export type DialogSize = "sm" | "md" | "lg" | "xl" | "full";
export type DialogVariant = "default" | "alert" | "clean";

export interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: DialogSize;
  variant?: DialogVariant;
  className?: string;
  overlayClassName?: string;
  showCloseButton?: boolean;
}

export interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  size?: DialogSize;
  variant?: DialogVariant;
  overlayClassName?: string;
  showCloseButton?: boolean;
}

export type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
export type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;
export type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;
export type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
export type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;
export type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;
