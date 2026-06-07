"use client";

import React, { forwardRef } from "react";

import {
  Accordion as UiAccordion,
  AccordionContent as UiAccordionContent,
  AccordionItem as UiAccordionItem,
  AccordionTrigger as UiAccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import { AccordionContentProps, AccordionItemProps, AccordionProps, AccordionTriggerProps } from "./accordion.types";

import "./css/accordion.base.css";

// 1. Accordion Component (Root)
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, variant = "default", size = "md", unstyled = false, className, children, ...props }, ref) => {
    // -- Lớp css của root dựa trên variant
    const variantClasses = {
      default: "common-accordion-default",
      bordered: "common-accordion-bordered border border-[#BB9B49]/25 rounded-xl overflow-hidden bg-[#EBD197]/5",
      separated: "common-accordion-separated gap-3 flex flex-col",
    };

    return (
      <UiAccordion
        ref={ref}
        className={cn(
          "w-full select-none",
          !unstyled && variantClasses[variant],
          !unstyled && `common-accordion-${size}`,
          className,
          "common-accordion",
        )}
        {...props}
      >
        {items
          ? items.map(item => (
              <AccordionItem key={item.id} value={item.id} disabled={item.disabled}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))
          : children}
      </UiAccordion>
    );
  },
);
Accordion.displayName = "Accordion";

// 2. AccordionItem Wrapper
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({ className, ...props }, ref) => {
  return (
    <UiAccordionItem
      ref={ref}
      className={cn("common-accordion-item border-[#BB9B49]/25 transition-all duration-200", className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

// 3. AccordionTrigger Wrapper
export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <UiAccordionTrigger
        ref={ref}
        className={cn(
          "common-accordion-trigger px-4 py-4 font-semibold text-[#1F2933] transition-all outline-none hover:text-[#BB9B49]",
          "focus-visible:border-[#BB9B49] focus-visible:ring-1 focus-visible:ring-[#BB9B49]",
          "no-underline hover:no-underline disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </UiAccordionTrigger>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

// 4. AccordionContent Wrapper
export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <UiAccordionContent
        ref={ref}
        className={cn("common-accordion-content px-4 pb-4 text-[#1F2933]/70 transition-all", className)}
        {...props}
      >
        {children}
      </UiAccordionContent>
    );
  },
);
AccordionContent.displayName = "AccordionContent";
