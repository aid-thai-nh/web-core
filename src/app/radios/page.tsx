import type { Metadata } from "next";

import { RadiosPlayground } from "./_components/RadiosPlayground";

export const metadata: Metadata = {
  title: "Radio Group / Radio Item — WebCore Showcase",
  description: "Kiểm thử các kịch bản thiết kế và thuộc tính nâng cao của Radio Group dùng chung.",
};

export default function RadiosPage() {
  return <RadiosPlayground />;
}
