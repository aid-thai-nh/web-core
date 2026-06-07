import type { Metadata } from "next";

import { TextareasPlayground } from "./_components/TextareasPlayground";

export const metadata: Metadata = {
  title: "Textarea / Input Box — WebCore Showcase",
  description:
    "Kiểm thử các kịch bản co giãn kích thước, giới hạn ký tự và phản hồi validation của Textarea dùng chung.",
};

export default function TextareasPage() {
  return <TextareasPlayground />;
}
