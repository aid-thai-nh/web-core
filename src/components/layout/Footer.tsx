import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[#BB9B49]/20 bg-[#F7F4ED] py-8 text-center text-xs text-[#1F2933]/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p>© 2026 {siteConfig.name}. Thiết kế kiến trúc dạng modulized bền vững.</p>
        <div className="flex gap-4 text-[#1F2933]/60">
          <a
            href="file:///d:/GlobalSafe/web-core/ARCHITECTURE.md"
            className="transition-colors hover:text-[#BB9B49] hover:underline"
          >
            Kiến trúc
          </a>
          <span>•</span>
          <a
            href="file:///d:/GlobalSafe/web-core/docs/WebCoreConvention.md"
            className="transition-colors hover:text-[#BB9B49] hover:underline"
          >
            Quy chuẩn
          </a>
        </div>
      </div>
    </footer>
  );
}
