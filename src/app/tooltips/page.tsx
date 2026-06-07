import type { Metadata } from "next";

import { TooltipsPlayground } from "./_components/TooltipsPlayground";

export const metadata: Metadata = {
  title: "Tooltips Showcase - WebCore",
  description: "Trực quan hóa và thử nghiệm các biến thể của component Tooltip dùng chung trong hệ thống WebCore.",
  keywords: ["tooltip", "hover", "popup", "component", "webcore", "boilerplate", "nextjs"],
};

export default function TooltipsPage() {
  return <TooltipsPlayground />;
}
