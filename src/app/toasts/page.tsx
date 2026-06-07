import type { Metadata } from "next";

import { ToastsPlayground } from "./_components/ToastsPlayground";

export const metadata: Metadata = {
  title: "Toasts & Alerts Showcase - WebCore",
  description:
    "Trực quan hóa và thử nghiệm các biến thể của các thông báo nhanh góc màn hình (Toast) và thanh cảnh báo (Alert) dùng chung.",
  keywords: ["toast", "alert", "notification", "sonner", "component", "webcore", "boilerplate", "nextjs"],
};

export default function ToastsPage() {
  return <ToastsPlayground />;
}
