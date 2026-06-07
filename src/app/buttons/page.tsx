import type { Metadata } from "next";

import { ButtonsPlayground } from "./_components/ButtonsPlayground";

export const metadata: Metadata = {
  title: "Buttons Showcase - WebCore",
  description: "Trực quan hóa và thử nghiệm các biến thể của component Button dùng chung trong hệ thống WebCore.",
  keywords: ["button", "component", "webcore", "boilerplate", "nextjs"],
};

export default function ButtonsPage() {
  return <ButtonsPlayground />;
}
