import type { Metadata } from "next";

import { SelectsPlayground } from "./_components/SelectsPlayground";

export const metadata: Metadata = {
  title: "Select / Dropdown — WebCore Showcase",
  description: "Kiểm thử toàn bộ các thuộc tính, kích thước và kịch bản thực tế của Select Dropdown dùng chung.",
};

export default function SelectsPage() {
  return <SelectsPlayground />;
}
