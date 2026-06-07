"use client";

import React, { createContext, useContext, forwardRef } from "react";

import {
  Tabs as UiTabs,
  TabsContent as UiTabsContent,
  TabsList as UiTabsList,
  TabsTrigger as UiTabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import { TabsContentProps, TabsListProps, TabsProps, TabsSize, TabsTriggerProps, TabsVariant } from "./tabs.types";

import "./css/tabs.base.css";

// Context để đồng bộ variant & size từ Tabs cha xuống TabsList & TabsTrigger
const TabsContext = createContext<{
  variant: TabsVariant;
  size: TabsSize;
  unstyled: boolean;
}>({
  variant: "line",
  size: "md",
  unstyled: false,
});

// 1. Tabs Root Component
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ items, variant = "line", size = "md", unstyled = false, className, children, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ variant, size, unstyled }}>
        <UiTabs ref={ref} className={cn("flex w-full flex-col gap-4 select-none", className, "common-tabs")} {...props}>
          {items ? (
            <>
              <TabsList>
                {items.map(item => (
                  <TabsTrigger key={item.value} value={item.value} disabled={item.disabled}>
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {items.map(item => (
                <TabsContent key={item.value} value={item.value}>
                  {item.content}
                </TabsContent>
              ))}
            </>
          ) : (
            children
          )}
        </UiTabs>
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = "Tabs";

// 2. TabsList Component
export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant: propVariant, ...props }, ref) => {
    const contextVal = useContext(TabsContext);
    const variant = propVariant || contextVal.variant;
    const unstyled = contextVal.unstyled;

    const listVariantStyles = {
      line: "border-b border-[#BB9B49]/30 bg-transparent w-full justify-start rounded-none h-auto p-0 gap-6",
      pill: "bg-[#EBD197]/15 border border-[#BB9B49]/20 rounded-xl p-1 gap-1.5 w-fit",
      flat: "bg-[#EBD197]/10 border border-[#BB9B49]/10 rounded-xl p-1 gap-1 w-fit",
    };

    return (
      <UiTabsList
        ref={ref}
        className={cn(
          "common-tabs-list flex shrink-0 items-center",
          !unstyled && listVariantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
TabsList.displayName = "TabsList";

// 3. TabsTrigger Component
export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(({ className, children, ...props }, ref) => {
  const { variant, size, unstyled } = useContext(TabsContext);

  const triggerSizeStyles = {
    sm: "px-3 py-1.5 text-xs rounded-lg",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-5 py-2.5 text-base rounded-xl",
  };

  // Styles cụ thể cho từng trạng thái active
  const triggerVariantStyles = {
    line: cn(
      "text-[#1F2933]/60 hover:text-[#1F2933] rounded-none border-b-2 border-transparent bg-transparent shadow-none px-1 pb-3 pt-2 relative",
      "data-[state=active]:bg-transparent data-[state=active]:text-[#BB9B49] data-[state=active]:border-[#BB9B49] data-[state=active]:shadow-none",
    ),
    pill: cn(
      "text-[#1F2933]/60 hover:text-[#1F2933] transition-all duration-200",
      "data-[state=active]:bg-[#BB9B49] data-[state=active]:text-[#F7F4ED] data-[state=active]:shadow-md",
    ),
    flat: cn(
      "text-[#1F2933]/60 hover:text-[#1F2933] transition-all duration-200",
      "data-[state=active]:bg-[#EBD197]/50 data-[state=active]:text-[#1F2933] data-[state=active]:shadow-sm",
    ),
  };

  return (
    <UiTabsTrigger
      ref={ref}
      className={cn(
        "common-tabs-trigger inline-flex cursor-pointer items-center justify-center font-semibold transition-colors duration-200 select-none",
        "focus-visible:ring-1 focus-visible:ring-[#BB9B49] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40",
        !unstyled && triggerSizeStyles[size],
        !unstyled && triggerVariantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </UiTabsTrigger>
  );
});
TabsTrigger.displayName = "TabsTrigger";

// 4. TabsContent Component
export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({ className, ...props }, ref) => {
  return (
    <UiTabsContent
      ref={ref}
      className={cn(
        "common-tabs-content mt-2 rounded-lg outline-none focus-visible:ring-1 focus-visible:ring-[#BB9B49]",
        className,
      )}
      {...props}
    />
  );
});
TabsContent.displayName = "TabsContent";
