import React from "react";

import { Accordion as AccordionPrimitive } from "radix-ui";

export type AccordionVariant = "default" | "bordered" | "separated";
export type AccordionSize = "sm" | "md" | "lg";

export interface AccordionItemData {
  id: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

// Định nghĩa props cho Accordion Root hỗ trợ cả Single và Multiple mode của Radix
export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
  /** Danh sách các Accordion Item dựng sẵn để truyền nhanh */
  items?: AccordionItemData[];
  /** Kiểu giao diện */
  variant?: AccordionVariant;
  /** Kích thước padding */
  size?: AccordionSize;
  /** Tắt style mặc định */
  unstyled?: boolean;
  children?: React.ReactNode;
};

export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> & {
  children?: React.ReactNode;
};
export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  children?: React.ReactNode;
};
export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content> & {
  children?: React.ReactNode;
};
