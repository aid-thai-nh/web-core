import type { Metadata } from "next";

import { ModalsPlayground } from "./_components/ModalsPlayground";

export const metadata: Metadata = {
  title: "Modals & Dialogs Showcase - WebCore",
  description:
    "Trực quan hóa và thử nghiệm các biến thể của component Dialog / Modal dùng chung trong hệ thống WebCore.",
  keywords: ["modal", "dialog", "popup", "component", "webcore", "boilerplate", "nextjs"],
};

export default function ModalsPage() {
  return <ModalsPlayground />;
}
