import React from "react";

import { Tooltip as TooltipPrimitive } from "radix-ui";

export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  delayDuration?: number;
  showArrow?: boolean;
  className?: string;
  arrowClassName?: string;
}

export type TooltipTriggerProps = React.ComponentProps<typeof TooltipPrimitive.Trigger>;
export type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content>;
export type TooltipArrowProps = React.ComponentProps<typeof TooltipPrimitive.Arrow>;
export type TooltipPortalProps = React.ComponentProps<typeof TooltipPrimitive.Portal>;
export type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>;
