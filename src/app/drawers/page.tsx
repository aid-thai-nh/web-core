import type { Metadata } from "next";

import { DrawersPlayground } from "./_components/DrawersPlayground";

export const metadata: Metadata = {
  title: "Drawers & Sheets Showcase - WebCore",
  description:
    "Trực quan hóa và thử nghiệm các biến thể của component Drawer / Sheet dùng chung trong hệ thống WebCore.",
  keywords: ["drawer", "sheet", "slideover", "minicart", "component", "webcore", "boilerplate", "nextjs"],
};

export default function DrawersPage() {
  return <DrawersPlayground />;
}
