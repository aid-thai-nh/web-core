"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

import "./css/table.base.css";
import {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from "./table.types";

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      hoverable = true,
      striped = false,
      bordered = false,
      borderless = false,
      dense = false,
      unstyled = false,
      wrapperClassName,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("common-table-wrapper relative w-full overflow-x-auto", wrapperClassName)}>
        <table
          ref={ref}
          className={cn(
            "w-full caption-bottom text-sm select-none",
            !unstyled && "border-collapse border-spacing-0",
            !unstyled && hoverable && "common-table-hoverable",
            !unstyled && striped && "common-table-striped",
            !unstyled && bordered && "common-table-bordered",
            !unstyled && borderless && "common-table-borderless",
            !unstyled && dense && "common-table-dense",
            className,
            "common-table",
          )}
          {...props}
        >
          {children}
        </table>
      </div>
    );
  },
);
Table.displayName = "Table";

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("common-table-header [&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("common-table-body [&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("common-table-footer border-t bg-[#EBD197]/15 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "common-table-row border-b border-[#BB9B49]/20 transition-colors hover:bg-[#EBD197]/10 data-[state=selected]:bg-[#EBD197]/20",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "common-table-head h-12 px-4 text-left align-middle font-bold text-[#1F2933]/70 [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("common-table-cell p-4 align-middle text-[#1F2933] [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("common-table-caption mt-4 text-xs text-[#1F2933]/50", className)} {...props} />
));
TableCaption.displayName = "TableCaption";
