"use client";

import React, { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Navbar } from "@/components/common/Navbar";

export function Header() {
  // Hooks
  // -- Library Hooks
  const pathname = usePathname();

  // States
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effects
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Handlers
  const isActive = (path: string) => pathname === path;

  if (!mounted) {
    return (
      <header className="bg-champagne-metallic fixed top-0 right-0 left-0 z-50 border-b border-[#BB9B49]/30 shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛡️</span>
            <span className="text-xl font-bold tracking-tight text-[#1F2933]">WebCore</span>
          </div>
          <div className="h-8 w-24 animate-pulse rounded-lg bg-[#1F2933]/10"></div>
        </div>
      </header>
    );
  }

  const navItems = [
    { name: "Trang Chủ", path: "/" },
    {
      name: "Basis Component",
      items: [
        { name: "Buttons", path: "/buttons", description: "Các nút bấm thông dụng" },
        { name: "Inputs", path: "/inputs", description: "Các trường nhập dữ liệu" },
        { name: "Selects", path: "/selects", description: "Hộp chọn danh sách thả xuống" },
        { name: "Radios", path: "/radios", description: "Nút chọn một trong nhiều" },
        { name: "Switches", path: "/switches", description: "Công tắc bật tắt nhanh trạng thái" },
        { name: "Textareas", path: "/textareas", description: "Khung nhập nội dung dài" },
        { name: "Badges", path: "/badges", description: "Nhãn hiển thị trạng thái" },
        { name: "Checkboxes", path: "/checkboxes", description: "Các hộp chọn đa phương thức" },
        { name: "Skeletons", path: "/skeletons", description: "Khung chờ tải trang (Shimmer)" },
        { name: "Avatars", path: "/avatars", description: "Ảnh đại diện & status indicator" },
        { name: "Tables", path: "/tables", description: "Bảng dữ liệu và phân trang" },
      ],
    },
    {
      name: "Shadcn Component",
      items: [
        { name: "Accordions", path: "/accordions", description: "Danh sách xếp chồng collapsible" },
        { name: "Tabs", path: "/tabs", description: "Các thẻ điều hướng nội dung" },
        { name: "Carousels", path: "/carousels", description: "Khung trượt ảnh và card ngang" },
      ],
    },
    {
      name: "Feedback & Overlay",
      items: [
        { name: "Modals / Dialogs", path: "/modals", description: "Cửa sổ pop-up hiển thị thông tin hoặc form" },
        { name: "Drawers / Sheets", path: "/drawers", description: "Bảng trượt từ cạnh màn hình" },
        { name: "Toasts & Alerts", path: "/toasts", description: "Thông báo trạng thái & cảnh báo hệ thống" },
        { name: "Tooltips", path: "/tooltips", description: "Gợi ý thông tin khi hover vào phần tử" },
      ],
    },
    {
      name: "Form Nghiệp Vụ",
      items: [{ name: "Checkout Form", path: "/forms", description: "Biểu mẫu thanh toán phức hợp" }],
    },
  ];

  return (
    <header className="bg-champagne-metallic fixed top-0 right-0 left-0 z-50 border-b border-[#BB9B49]/30 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-transform active:scale-95">
          <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">🛡️</span>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-[#1F2933] transition-colors group-hover:text-[#1F2933]/80">
              WebCore
            </h1>
            <p className="text-[9px] font-bold tracking-widest text-[#1F2933]/70 uppercase">Enterprise Boilerplate</p>
          </div>
        </Link>

        {/* Navigation Menu for Desktop using Reusable Navbar */}
        <Navbar items={navItems} activePath={pathname} />

        {/* Right Actions (Mobile Menu Toggle) */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer rounded-lg border border-[#BB9B49]/30 bg-[#F7F4ED]/40 p-1.5 text-[#1F2933] transition-transform hover:bg-[#F7F4ED]/60 active:scale-95 md:hidden"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 absolute top-[69px] right-0 left-0 flex flex-col gap-4 border-b border-[#BB9B49]/30 bg-gradient-to-br from-[#F7F4ED] to-[#EBD197] p-6 shadow-xl backdrop-blur-lg duration-200 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.items ? (
                  <div className="mt-2 flex flex-col gap-1">
                    <span className="px-4 text-[10px] font-extrabold tracking-widest text-[#1F2933]/60 uppercase">
                      {item.name}
                    </span>
                    {item.items.map(subItem => (
                      <Link
                        key={subItem.path}
                        href={subItem.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`rounded-xl px-6 py-2.5 text-xs font-bold transition-all ${
                          isActive(subItem.path)
                            ? "bg-[#1F2933] text-[#F7F4ED]"
                            : "text-[#1F2933]/85 hover:bg-[#1F2933]/5 hover:text-[#1F2933]"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.path || "/"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                      isActive(item.path || "/")
                        ? "bg-[#1F2933] text-[#F7F4ED]"
                        : "text-[#1F2933]/85 hover:bg-[#1F2933]/5 hover:text-[#1F2933]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
