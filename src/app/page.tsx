"use client";

import React, { useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function HomePage() {
  // States
  const [mounted, setMounted] = useState(false);

  // Effects
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-champagne-page flex min-h-screen items-center justify-center text-[#1F2933]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#BB9B49] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-6 py-16">
      {/* Intro Banner - Champagne Metallic Gradient */}
      <section className="bg-champagne-metallic relative overflow-hidden rounded-3xl border border-[#BB9B49]/30 p-8 text-[#1F2933] shadow-xl md:p-12">
        {/* Subtle decorative warm ambient glow */}
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <span className="inline-flex items-center rounded-full bg-[#1F2933]/10 px-3 py-1 text-xs font-bold text-[#1F2933] ring-1 ring-[#1F2933]/20 ring-inset">
            Kiến Trúc Module-Driven
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl">
            {siteConfig.description}
          </h2>
          <p className="text-sm leading-relaxed text-[#1F2933]/85 md:text-base">
            Trải nghiệm hệ thống Core chuẩn hóa với cấu trúc dự án rõ ràng, phân chia Layer logic độc lập, quản lý State
            tập trung bằng Zustand và caching dữ liệu tối ưu qua TanStack React Query.
          </p>
        </div>
      </section>

      {/* Component Navigation Grid */}
      <div className="space-y-6">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#1F2933]">
            <span className="text-[#BB9B49]">🧱</span> Thư Viện Thành Phần Dùng Chung (Common Showcase)
          </h3>
          <p className="text-xs text-[#1F2933]/70">
            Nhấp chọn các thành phần dưới đây để xem tài liệu, ví dụ và thử nghiệm playground.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Buttons */}
          <Link
            href="/buttons"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🧩</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Sẵn sàng
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Buttons (Nút bấm)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Đầy đủ biến thể màu sắc, kích thước, spinner loading, icons và hỗ trợ unstyled.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 2: Inputs */}
          <Link
            href="/inputs"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">⌨️</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Sẵn sàng
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Inputs (Ô nhập liệu)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Thiết kế ô nhập liệu tùy chọn tiền tố/hậu tố, hiển thị lỗi động và tương tác mật khẩu.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 3: Badges */}
          <Link
            href="/badges"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🏷️</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Sẵn sàng
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Badges (Nhãn trạng thái)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Nhãn trạng thái màu sắc phong phú, hỗ trợ pulse indicator nhấp nháy realtime và tag dismissible.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 4: Checkboxes */}
          <Link
            href="/checkboxes"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">☑️</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Sẵn sàng
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Checkboxes (Hộp chọn)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Hộp chọn tùy biến giao diện, xử lý validate lỗi, và quản lý nhóm lửng lơ (indeterminate).
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 4b: Selects */}
          <Link
            href="/selects"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🔽</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Sẵn sàng
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Selects (Hộp chọn thả xuống)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Hộp chọn thả xuống chuẩn hóa, hỗ trợ icon bên trái, chi tiết hóa chọn tỉnh thành, danh mục, và sắp
                  xếp.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 4c: Radios */}
          <Link
            href="/radios"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🔘</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Radios (Nút chọn một)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Nhóm nút chọn một trong nhiều, hỗ trợ định hướng ngang/dọc, và mô tả phụ cho từng lựa chọn.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 4d: Switches */}
          <Link
            href="/switches"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🎚️</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Switches (Công tắc gạt)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Công tắc bật/tắt nhanh trạng thái, hiệu ứng trượt mượt mà, hỗ trợ nhiều kích thước.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 4e: Textareas */}
          <Link
            href="/textareas"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.1)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">✍️</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Textareas (Nhập văn bản dài)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Khung nhập văn bản dài hỗ trợ co giãn, giới hạn ký tự và hiển thị đếm số lượng thời gian thực.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 4f: Advanced Checkout Form */}
          <Link
            href="/forms"
            className="group relative block overflow-hidden rounded-2xl border border-[#BB9B49] bg-[#EBD197]/5 p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.18)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#BB9B49]/10 blur-xl transition-colors group-hover:bg-[#BB9B49]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🛒</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49] ring-inset">
                  Nghiệp Vụ
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Checkout Form (Form phức hợp)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Kịch bản thực tế kết hợp toàn bộ Input, Checkbox, Select, Radio, Switch, và Textarea với đầy đủ
                  validation.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#BB9B49] transition-colors group-hover:text-[#BB9B49]/80">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 5: Skeletons */}
          <Link
            href="/skeletons"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.15)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">💀</span>
                <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#BB9B49] ring-1 ring-[#BB9B49]/20 ring-inset">
                  Sẵn sàng
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Skeletons (Khung xương)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Tạo khung xương chờ tải trang, hỗ trợ hiệu ứng mờ pulse hoặc làn sóng shimmer cho ảnh, chữ, bảng.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 6: Avatars */}
          <Link
            href="/avatars"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.15)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">👤</span>
                <span className="inline-flex items-center rounded-full bg-[#1F2933]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1F2933]/85 ring-1 ring-[#1F2933]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Avatars (Hình đại diện)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Tự động tạo initials, màu nền hash ngẫu nhiên theo tên người dùng, hỗ trợ status indicator nhấp nháy.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 7: Tables */}
          <Link
            href="/tables"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.15)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📊</span>
                <span className="inline-flex items-center rounded-full bg-[#1F2933]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1F2933]/85 ring-1 ring-[#1F2933]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Tables (Bảng dữ liệu)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Bảng dữ liệu được styling hiện đại với các tuỳ chọn hover, striped, dense và bordered.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 8: Accordions */}
          <Link
            href="/accordions"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.15)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">↕️</span>
                <span className="inline-flex items-center rounded-full bg-[#1F2933]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1F2933]/85 ring-1 ring-[#1F2933]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Accordions (Thanh thu gọn)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Thanh thu gọn/mở rộng theo chuẩn WAI-ARIA. Hỗ trợ layout tách biệt (cards) hoặc có đường viền.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 9: Tabs */}
          <Link
            href="/tabs"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.15)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🗂️</span>
                <span className="inline-flex items-center rounded-full bg-[#1F2933]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1F2933]/85 ring-1 ring-[#1F2933]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Tabs (Tab chọn)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Thanh tab điều hướng có các biến thể line, pill và flat. Tự động đồng bộ variant qua Context.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Card 10: Carousels */}
          <Link
            href="/carousels"
            className="group relative block overflow-hidden rounded-2xl border border-[#EBD197] bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#BB9B49] hover:shadow-[0_4px_20px_rgba(187,155,73,0.15)]"
          >
            <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-full bg-[#EBD197]/10 blur-xl transition-colors group-hover:bg-[#EBD197]/20"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🎠</span>
                <span className="inline-flex items-center rounded-full bg-[#1F2933]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#1F2933]/85 ring-1 ring-[#1F2933]/20 ring-inset">
                  Mới
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                  Carousels (Trình chiếu)
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#1F2933]/70">
                  Slider cuộn mượt mà dựa trên Embla, hỗ trợ autoplay, chuyển chiều dọc, dot & arrow controls.
                </p>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-[#1F2933] transition-colors group-hover:text-[#BB9B49]">
                Thử nghiệm ngay <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
