import type { Metadata } from "next";

import { SwitchesPlayground } from "./_components/SwitchesPlayground";

export const metadata: Metadata = {
  title: "Switch / Toggle — WebCore Showcase",
  description: "Kiểm thử các kịch bản thiết kế, kích thước và phản hồi sự kiện của Switch dùng chung.",
};

export default function SwitchesPage() {
  return <SwitchesPlayground />;
}
