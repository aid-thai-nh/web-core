"use client";

import React from "react";

import { HelpCircle, Info, Cpu, Award } from "lucide-react";

import { Button } from "@/components/common/Button";
import { Tooltip } from "@/components/common/Tooltip";

export function TooltipsPlayground() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header intro */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>💬</span> Bảng Kiểm Thử: Component Tooltip
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử các gợi ý thông tin nhanh (Tooltips) khi di chuột qua phần tử, hỗ trợ định hướng tự động và kết
          xuất nội dung HTML phong phú.
        </p>
      </div>

      {/* Nhóm 1: Định hướng Tooltip */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Định Hướng Không Gian (Directions)</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Hỗ trợ hiển thị bong bóng thông tin theo 4 hướng khác nhau tùy vào vị trí trống của màn hình.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-12 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Top */}
            <Tooltip side="top" content="Đây là thông tin hiển thị ở phía TRÊN nút bấm.">
              <Button variant="outline" className="min-w-[120px]">
                Tooltip Top
              </Button>
            </Tooltip>

            {/* Right */}
            <Tooltip side="right" content="Đây là thông tin hiển thị ở phía BÊN PHẢI nút bấm.">
              <Button variant="outline" className="min-w-[120px]">
                Tooltip Right
              </Button>
            </Tooltip>

            {/* Bottom */}
            <Tooltip side="bottom" content="Đây là thông tin hiển thị ở phía DƯỚI nút bấm.">
              <Button variant="outline" className="min-w-[120px]">
                Tooltip Bottom
              </Button>
            </Tooltip>

            {/* Left */}
            <Tooltip side="left" content="Đây là thông tin hiển thị ở phía BÊN TRÁI nút bấm.">
              <Button variant="outline" className="min-w-[120px]">
                Tooltip Left
              </Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Nhóm 2: Rich HTML Content (Advanced Tooltips) */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Nội Dung Rich HTML Nâng Cao</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Trình diễn khả năng chứa văn bản định dạng, danh sách, biểu tượng, và cấu trúc thẻ phức tạp bên trong
            tooltip.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Helper 1: Hướng dẫn nhập liệu */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 shadow-sm transition-all hover:border-[#BB9B49]/40">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-sm font-bold">
                <HelpCircle size={16} className="text-[#BB9B49]" /> Hướng Dẫn Giải Thích Từ Ngữ
              </h4>
              <p className="text-xs text-[#1F2933]/60">
                Thường dùng giải thích các thuật ngữ chuyên ngành viết tắt, tránh chiếm dụng diện tích giao diện.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#1F2933]/80">Phương thức bảo mật</span>
              <Tooltip
                side="top"
                className="max-w-[280px]"
                content={
                  <div className="space-y-1 text-left">
                    <h6 className="flex items-center gap-1 text-xs font-bold text-[#EBD197]">
                      <Award size={12} /> Xác thực 2 lớp (2FA)
                    </h6>
                    <p className="text-[10px] leading-relaxed text-[#F7F4ED]/80">
                      Mã hóa bảo mật nâng cao yêu cầu nhập mã OTP được tạo ra từ Google Authenticator hoặc tin nhắn SMS
                      để hoàn tất quá trình giao dịch.
                    </p>
                  </div>
                }
              >
                <button className="cursor-pointer text-[#BB9B49] transition-colors hover:text-[#BB9B49]/80 focus:outline-none">
                  <Info size={14} />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Helper 2: Mini User Profile Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 shadow-sm transition-all hover:border-[#BB9B49]/40">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-sm font-bold">
                <Compass size={16} className="text-[#BB9B49]" /> Thẻ User Thu Nhỏ (Mini Profile Card)
              </h4>
              <p className="text-xs text-[#1F2933]/60">
                Hiển thị nhanh danh thiếp, chức danh, trạng thái hoạt động của nhân sự khi di chuột qua tên/avatar.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Tooltip
                side="top"
                className="p-3"
                content={
                  <div className="flex w-56 items-center gap-3 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#EBD197] to-[#BB9B49] text-sm font-bold text-[#1F2933] shadow">
                      HN
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-[#F7F4ED]">Hoàng Nguyễn</h6>
                      <p className="text-[10px] text-[#EBD197]">Lead Security Architect</p>
                      <div className="mt-1 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                        <span className="text-[9px] text-[#F7F4ED]/70">Đang hoạt động</span>
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#BB9B49] text-xs font-bold text-[#F7F4ED] shadow-sm">
                  HN
                </div>
              </Tooltip>
              <div className="text-xs">
                <span className="block font-bold text-[#1F2933]">Hoàng Nguyễn</span>
                <span className="block text-[10px] text-[#1F2933]/50">Security Engineer</span>
              </div>
            </div>
          </div>

          {/* Helper 3: System Stats Panel */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 shadow-sm transition-all hover:border-[#BB9B49]/40">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-sm font-bold">
                <Cpu size={16} className="text-[#BB9B49]" /> Báo Cáo Hiệu Năng Hệ Thống (Stats Panel)
              </h4>
              <p className="text-xs text-[#1F2933]/60">
                Hiển thị chi tiết số liệu phần cứng hoặc tham số hiệu suất khi hover vào tỷ lệ tổng quát.
              </p>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/10 p-2.5">
              <span className="text-xs font-bold">Máy chủ Hà Nội</span>
              <Tooltip
                side="right"
                content={
                  <div className="w-48 space-y-1.5 py-0.5 text-left">
                    <h6 className="flex items-center gap-1 border-b border-[#F7F4ED]/15 pb-1 text-xs font-bold text-[#EBD197]">
                      <Cpu size={12} /> Hiệu Năng Server HN-1
                    </h6>
                    <div className="space-y-1 text-[10px] text-[#F7F4ED]/80">
                      <div className="flex justify-between">
                        <span>CPU Load:</span>
                        <span className="font-bold text-green-400">12%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>RAM Sử dụng:</span>
                        <span className="font-bold">4.2 / 16 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Băng thông mạng:</span>
                        <span className="font-bold">142 Mbps</span>
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-green-100 px-2 py-1 text-[10px] font-bold text-green-800 transition-colors hover:bg-green-200">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-green-500" />
                  Ổn định (12%)
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const Compass = ({ size, className }: { size?: number; className?: string }) => {
  return <Info size={size} className={className} />;
};
