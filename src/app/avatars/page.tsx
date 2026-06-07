"use client";

import React from "react";

import { ShieldAlert, MessageSquare, Plus } from "lucide-react";

import { Avatar } from "@/components/common/Avatar";
import { Button } from "@/components/common/Button";

export default function AvatarsPage() {
  const team = [
    { name: "Anh Nguyễn", alt: "Anh Nguyen", src: "" },
    { name: "Bảo Trần", alt: "Bao Tran", src: "" },
    { name: "Cường Lê", alt: "Cuong Le", src: "" },
    { name: "Duy Phạm", alt: "Duy Pham", src: "" },
    { name: "Elena Petrova", alt: "Elena Petrova", src: "" },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Page Header */}
      <section className="space-y-4 border-b border-[#BB9B49]/30 pb-8">
        <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-3 py-1 text-xs font-medium text-[#BB9B49] ring-1 ring-[#BB9B49]/20">
          Basis Component
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl">Avatar (Hình đại diện)</h1>
        <p className="max-w-3xl text-sm text-[#1F2933]/70">
          Component hiển thị ảnh đại diện người dùng với các tùy biến về hình dạng, kích thước, trạng thái trực tuyến và
          cơ chế tự động chuyển đổi sang chữ cái đầu tiên (Initials) với dải màu gradient tương ứng.
        </p>
      </section>

      {/* --- BASIC UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">1. Basic UI</h2>
          <p className="text-xs text-[#1F2933]/60">Các tùy chọn kích thước, hình dạng và trạng thái cơ bản.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Sizes */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">Kích thước</h3>
            <div className="flex flex-wrap items-end gap-4 rounded-lg border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
              <Avatar size="xs" alt="XS" />
              <Avatar size="sm" alt="SM" />
              <Avatar size="md" alt="MD" />
              <Avatar size="lg" alt="LG" />
              <Avatar size="xl" alt="XL" />
            </div>
          </div>

          {/* Shapes */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">Hình dạng</h3>
            <div className="flex flex-wrap items-center gap-4 rounded-lg border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
              <div className="flex flex-col items-center gap-1.5">
                <Avatar size="lg" shape="circle" alt="Circle" />
                <span className="text-[10px] text-[#1F2933]/60">Circle</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Avatar size="lg" shape="rounded" alt="Rounded" />
                <span className="text-[10px] text-[#1F2933]/60">Rounded</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Avatar size="lg" shape="square" alt="Square" />
                <span className="text-[10px] text-[#1F2933]/60">Square</span>
              </div>
            </div>
          </div>

          {/* Online status */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">
              Trạng thái (Status Indicator)
            </h3>
            <div className="flex flex-wrap items-center gap-4 rounded-lg border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
              <Avatar size="md" status="online" alt="Online" />
              <Avatar size="md" status="busy" alt="Busy" />
              <Avatar size="md" status="away" alt="Away" />
              <Avatar size="md" status="offline" alt="Offline" />
            </div>
          </div>
        </div>
      </section>

      {/* --- ADVANCED & LUXURY UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">2. Advanced & Luxury UI</h2>
          <p className="text-xs text-[#1F2933]/60">Kết hợp Avatar vào các thiết kế giao diện doanh nghiệp thực tế.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Card 1: Premium Profile Header */}
          <div className="relative overflow-hidden rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] shadow-xl">
            {/* Cover photo banner */}
            <div className="h-24 bg-gradient-to-r from-[#BB9B49] to-[#EBD197] opacity-80"></div>

            <div className="relative px-6 pb-6">
              {/* Avatar positioned overlapping the banner */}
              <div className="absolute -top-10 left-6">
                <Avatar size="xl" shape="circle" status="online" alt="Duy Nguyen" className="ring-4 ring-[#F7F4ED]" />
              </div>

              <div className="flex flex-col gap-4 pt-14 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="flex items-center gap-1.5 text-lg font-bold text-[#1F2933]">
                    Nguyễn Khương Duy
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </h3>
                  <p className="text-xs text-[#1F2933]/70">Security Architecture Director</p>
                  <p className="mt-1 text-[10px] text-[#1F2933]/50">Hà Nội, Việt Nam • Thành viên từ 2024</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" leftIcon={<MessageSquare size={13} />}>
                    Nhắn tin
                  </Button>
                  <Button variant="primary" size="sm" className="btn-primary">
                    Theo dõi
                  </Button>
                </div>
              </div>

              {/* Bio details */}
              <div className="mt-4 flex justify-between border-t border-[#BB9B49]/20 pt-4 text-center">
                <div>
                  <div className="text-sm font-bold text-[#1F2933]">45</div>
                  <div className="text-[9px] font-medium text-[#1F2933]/50 uppercase">Dự án</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1F2933]">12.4k</div>
                  <div className="text-[9px] font-medium text-[#1F2933]/50 uppercase">Người theo dõi</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1F2933]">99.2%</div>
                  <div className="text-[9px] font-medium text-[#1F2933]/50 uppercase">Độ tin cậy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Team Members Stack with Tooltip effect */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-xl">
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-base font-bold text-[#1F2933]">
                <span className="text-[#BB9B49]">👥</span>
                Quản lý thành viên nhóm dự án
              </h3>
              <p className="text-xs text-[#1F2933]/70">
                Hiển thị danh sách các cộng tác viên đang hoạt động trong dự án bảo mật lõi.
              </p>
            </div>

            <div className="my-6 flex flex-col gap-4 rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/5 p-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Stacked avatars */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold tracking-wider text-[#1F2933]/50 uppercase">
                  Đang trực tuyến
                </span>
                <div className="flex -space-x-3 transition-all duration-300 hover:space-x-1">
                  {team.map((member, idx) => (
                    <div key={idx} className="group/stack relative cursor-pointer">
                      <Avatar
                        size="md"
                        alt={member.name}
                        status={idx % 2 === 0 ? "online" : "away"}
                        className="ring-2 ring-[#F7F4ED] transition-transform group-hover/stack:-translate-y-1"
                      />
                      {/* Micro tooltip */}
                      <span className="absolute bottom-full left-1/2 z-10 mb-1.5 hidden -translate-x-1/2 rounded border border-[#BB9B49]/30 bg-[#1F2933] px-2 py-1 text-[10px] font-bold whitespace-nowrap text-[#F7F4ED] shadow-md group-hover/stack:block">
                        {member.name}
                      </span>
                    </div>
                  ))}
                  {/* Plus badge */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F7F4ED] bg-[#EBD197]/25 text-xs font-bold text-[#1F2933]">
                    +7
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center">
                <Button variant="secondary" size="sm" leftIcon={<Plus size={14} />}>
                  Thêm thành viên
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-1.5 border-t border-[#BB9B49]/20 pt-4 text-xs text-[#1F2933]/50">
              <ShieldAlert size={14} className="text-amber-600" />
              <span>Chỉ có Quản trị viên mới được quyền phân quyền thành viên dự án.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
