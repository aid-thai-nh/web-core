import React from "react";

import { Dialog as DialogPrimitive } from "radix-ui";

export type DrawerSide = "top" | "right" | "bottom" | "left";

export interface DrawerProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  side?: DrawerSide;
  className?: string;
  overlayClassName?: string;
  showCloseButton?: boolean;
}

export interface DrawerContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  side?: DrawerSide;
  overlayClassName?: string;
  showCloseButton?: boolean;
}

export type DrawerTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
export type DrawerTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;
export type DrawerDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;
export type DrawerCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
export type DrawerPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;
export type DrawerOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;
