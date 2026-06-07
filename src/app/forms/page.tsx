import type { Metadata } from "next";

import { FormsPlayground } from "./_components/FormsPlayground";

export const metadata: Metadata = {
  title: "Advanced Checkout Form — WebCore Showcase",
  description: "Xử lý form phức hợp kết hợp Select, Radio Group, Switch, Textarea, Input và Checkbox.",
};

export default function FormsPage() {
  return <FormsPlayground />;
}
