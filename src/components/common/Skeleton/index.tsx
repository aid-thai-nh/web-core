"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { SkeletonProps } from "./skeleton.types";

import "./css/skeleton.base.css";

export function Skeleton({ animation = "pulse", className, ...props }: SkeletonProps) {
  // Hooks

  // States

  // Constants & Memos

  // Handlers

  return (
    <div
      className={cn(
        "min-h-[16px] w-full rounded-md bg-[#EBD197]/40",
        animation === "pulse" && "animate-pulse",
        animation === "wave" && "common-skeleton-wave",
        className,
        "common-skeleton",
      )}
      {...props}
    />
  );
}
