import React from "react";

import { Metadata } from "next";

import { InputsPlayground } from "./_components/InputsPlayground";

export const metadata: Metadata = {
  title: "Component Input - WebCore Boilerplate",
  description: "Trang demo kiểm thử các kịch bản sử dụng (test cases) của Common Component Input trong WebCore.",
};

export default function InputsPage() {
  return <InputsPlayground />;
}
