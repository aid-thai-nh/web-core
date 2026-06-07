import React from "react";

import { Metadata } from "next";

import { BadgesPlayground } from "./_components/BadgesPlayground";

export const metadata: Metadata = {
  title: "Component Badge - WebCore Boilerplate",
  description: "Trang kiểm thử các kịch bản sử dụng (test cases) của Common Component Badge trong WebCore.",
};

export default function BadgesPage() {
  return <BadgesPlayground />;
}
