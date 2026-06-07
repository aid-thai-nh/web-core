import React from "react";

import { Tabs as TabsPrimitive } from "radix-ui";

export type TabsVariant = "line" | "pill" | "flat";
export type TabsSize = "sm" | "md" | "lg";

export interface TabItemData {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  /** Danh sách các Tabs Item để truyền nhanh */
  items?: TabItemData[];
  /** Kiểu giao diện */
  variant?: TabsVariant;
  /** Kích thước của thanh Tabs */
  size?: TabsSize;
  /** Tắt style mặc định */
  unstyled?: boolean;
  children?: React.ReactNode;
}

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & {
  variant?: TabsVariant;
  children?: React.ReactNode;
};
export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  children?: React.ReactNode;
};
export type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content> & {
  children?: React.ReactNode;
};
