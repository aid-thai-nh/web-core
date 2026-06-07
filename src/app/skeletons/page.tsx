import React from "react";

import { Metadata } from "next";

import { SkeletonsPlayground } from "./_components/SkeletonsPlayground";

export const metadata: Metadata = {
  title: "Component Skeleton - WebCore Boilerplate",
  description: "Trang kiểm thử các kịch bản sử dụng (test cases) của Common Component Skeleton trong WebCore.",
};

export default function SkeletonsPage() {
  return <SkeletonsPlayground />;
}
