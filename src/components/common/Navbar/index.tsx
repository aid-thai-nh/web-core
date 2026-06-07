"use client";

import React, { forwardRef } from "react";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { NavbarProps } from "./navbar.types";

import "./css/navbar.base.css";

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ items, activePath, unstyled = false, className, ...props }, ref) => {
    // Handlers
    const isActive = (path?: string) => {
      if (!path || !activePath) return false;
      if (path === "/") return activePath === "/";
      return activePath.startsWith(path);
    };

    const isSubActive = (submenuItems?: { path: string }[]) => {
      if (!submenuItems || !activePath) return false;
      return submenuItems.some(item => activePath === item.path);
    };

    return (
      <nav
        ref={ref}
        className={cn(
          "hidden items-center gap-1.5 rounded-xl border border-[#BB9B49]/30 bg-[#F7F4ED]/60 p-1 shadow-sm select-none md:flex",
          className,
          "common-navbar",
        )}
        {...props}
      >
        {items.map((item, idx) => {
          const hasDropdown = item.items && item.items.length > 0;
          const active = hasDropdown ? isSubActive(item.items) : isActive(item.path);

          if (hasDropdown) {
            return (
              <div key={idx} className="group common-navbar-group relative">
                {/* Trigger */}
                <button
                  type="button"
                  className={cn(
                    "flex cursor-pointer items-center gap-1 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all outline-none",
                    "focus-visible:ring-1 focus-visible:ring-[#BB9B49]",
                    !unstyled &&
                      (active
                        ? "bg-[#BB9B49] text-[#F7F4ED]"
                        : "border border-transparent text-[#1F2933]/90 hover:bg-[#EBD197]/30 hover:text-[#1F2933]"),
                    "common-navbar-trigger",
                  )}
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  <span>{item.name}</span>
                  <ChevronDown
                    size={12}
                    className="text-[#1F2933]/60 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#1F2933]"
                  />
                </button>

                {/* Dropdown Menu Container */}
                <div
                  className={cn(
                    "absolute top-full left-1/2 w-64 -translate-x-1/2 pt-2",
                    "pointer-events-none opacity-0 transition-all duration-200 ease-out",
                    "group-hover:pointer-events-auto group-hover:opacity-100",
                    "common-navbar-dropdown z-50",
                  )}
                >
                  <div className="rounded-xl border border-[#BB9B49]/30 bg-[#F7F4ED] p-2 shadow-xl backdrop-blur-md">
                    <div className="flex flex-col gap-0.5">
                      {item.items?.map((subItem, sIdx) => {
                        const subActive = activePath === subItem.path;
                        return (
                          <Link
                            key={sIdx}
                            href={subItem.path}
                            className={cn(
                              "flex items-start gap-2.5 rounded-lg p-2.5 text-left transition-all",
                              subActive
                                ? "bg-[#BB9B49] text-[#F7F4ED]"
                                : "text-[#1F2933]/90 hover:bg-[#EBD197]/30 hover:text-[#1F2933]",
                            )}
                          >
                            {subItem.icon && <span className="mt-0.5 text-[#1F2933]/60">{subItem.icon}</span>}
                            <div>
                              <div className="text-xs font-bold">{subItem.name}</div>
                              {subItem.description && (
                                <p className="mt-0.5 text-[10px] leading-normal text-[#1F2933]/60">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={idx}
              href={item.path || "/"}
              className={cn(
                "rounded-lg border border-transparent px-3.5 py-2 text-xs font-semibold transition-all outline-none",
                "focus-visible:ring-1 focus-visible:ring-[#BB9B49]",
                !unstyled &&
                  (active
                    ? "bg-[#BB9B49] text-[#F7F4ED] shadow-sm shadow-[#BB9B49]/10"
                    : "text-[#1F2933]/90 hover:bg-[#EBD197]/30 hover:text-[#1F2933]"),
                "common-navbar-link",
              )}
            >
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.name}
            </Link>
          );
        })}
      </nav>
    );
  },
);
Navbar.displayName = "Navbar";
