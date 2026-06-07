import React from "react";

import { Metadata } from "next";

import { CheckboxesPlayground } from "./_components/CheckboxesPlayground";

export const metadata: Metadata = {
  title: "Component Checkbox - WebCore Boilerplate",
  description: "Trang kiểm thử các kịch bản sử dụng (test cases) của Common Component Checkbox trong WebCore.",
};

export default function CheckboxesPage() {
  return <CheckboxesPlayground />;
}
