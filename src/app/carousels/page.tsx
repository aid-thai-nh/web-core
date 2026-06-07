"use client";

import React, { useState } from "react";

import { ShieldCheck, ArrowRight, Zap, Database } from "lucide-react";

import { Button } from "@/components/common/Button";
import { Carousel, CarouselApi } from "@/components/common/Carousel";

export default function CarouselsPage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Background slides data
  const marketingSlides = [
    {
      icon: <ShieldCheck size={44} className="animate-pulse text-[#BB9B49]" />,
      title: "Giải pháp bảo mật Web Core chuẩn doanh nghiệp",
      description:
        "Tích hợp sẵn các cấu hình bảo mật cơ bản AES-256 mã hóa cơ sở dữ liệu, lọc request SQL Injection đầu vào, cùng quy chuẩn cấu hình phân lớp Layer logic bảo mật tối tân.",
      btnText: "Bắt đầu tích hợp",
      bgClass: "from-[#BB9B49]/15 via-[#EBD197]/5 to-[#F7F4ED] border-[#BB9B49]/25",
    },
    {
      icon: <Zap size={44} className="text-[#BB9B49]" />,
      title: "Uptime 99.99% cùng kiến trúc Module-Driven",
      description:
        "Kiến trúc mã nguồn mở gọn nhẹ, chia nhỏ modules cô lập giúp giảm thiểu thời gian lỗi (downtime), tối ưu hóa tải trang Next.js nhờ Turbopack và cache thông minh.",
      btnText: "Đọc tài liệu kiến trúc",
      bgClass: "from-[#EBD197]/20 via-[#EBD197]/5 to-[#F7F4ED] border-[#BB9B49]/25",
    },
    {
      icon: <Database size={44} className="text-[#BB9B49]" />,
      title: "Quản lý dữ liệu tối ưu qua Zustand & React Query",
      description:
        "Giải pháp quản lý state cục bộ đồng bộ tự động, đồng thời đồng bộ hóa cache API thông qua React Query giúp giảm tải băng thông và cải thiện tốc độ phản hồi client.",
      btnText: "Xem bảng biểu demo",
      bgClass: "from-[#BB9B49]/10 via-[#EBD197]/5 to-[#F7F4ED] border-[#BB9B49]/25",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Page Header */}
      <section className="space-y-4 border-b border-[#BB9B49]/30 pb-8">
        <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-3 py-1 text-xs font-medium text-[#BB9B49] ring-1 ring-[#BB9B49]/20">
          Shadcn Component
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl">Carousel (Trình chiếu)</h1>
        <p className="max-w-3xl text-sm text-[#1F2933]/70">
          Component trình chiếu các nội dung động theo chu kỳ trượt ngang hoặc dọc. Được tối ưu hóa bằng thư viện Embla
          Carousel, hỗ trợ vuốt chạm cảm ứng mượt mà trên mobile, điều hướng phím mũi tên và autoplay.
        </p>
      </section>

      {/* --- BASIC UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">1. Basic UI</h2>
          <p className="text-xs text-[#1F2933]/60">
            Các tùy chọn cuộn trang cơ bản (Ngang, Dọc) với các dot điều hướng.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Horizontal Basic */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-6">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">
              Trượt ngang với nút điều hướng (Horizontal)
            </h3>
            <div className="rounded-lg border border-[#BB9B49]/20 bg-[#EBD197]/10 px-10 py-4">
              <Carousel
                showArrows
                showDots
                slides={[
                  <div
                    key="b1"
                    className="flex h-32 items-center justify-center rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] text-xs font-bold text-[#1F2933]/70"
                  >
                    Slide 1
                  </div>,
                  <div
                    key="b2"
                    className="flex h-32 items-center justify-center rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] text-xs font-bold text-[#1F2933]/70"
                  >
                    Slide 2
                  </div>,
                  <div
                    key="b3"
                    className="flex h-32 items-center justify-center rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] text-xs font-bold text-[#1F2933]/70"
                  >
                    Slide 3
                  </div>,
                ]}
              />
            </div>
          </div>

          {/* Vertical Basic */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-6">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">Trượt dọc (Vertical)</h3>
            <div className="flex justify-center rounded-lg border border-[#BB9B49]/20 bg-[#EBD197]/10 px-10 py-4">
              <Carousel
                orientation="vertical"
                showArrows
                showDots
                className="max-w-xs"
                contentClassName="h-32"
                slides={[
                  <div
                    key="v1"
                    className="flex h-full items-center justify-center rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] text-xs font-bold text-[#1F2933]/70"
                  >
                    Slide Dọc 1
                  </div>,
                  <div
                    key="v2"
                    className="flex h-full items-center justify-center rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] text-xs font-bold text-[#1F2933]/70"
                  >
                    Slide Dọc 2
                  </div>,
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ADVANCED & LUXURY UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">2. Advanced & Luxury UI</h2>
          <p className="text-xs text-[#1F2933]/60">
            Trình chiếu banner quảng bá (Hero Slider) cao cấp, tích hợp autoplay và custom layout typography.
          </p>
        </div>

        {/* Premium Banner Slider */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-8 shadow-xl">
          <Carousel
            showDots
            autoplay={{ delay: 5000 }}
            setApi={setCarouselApi}
            slides={marketingSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`h-72 w-full rounded-xl bg-gradient-to-r ${slide.bgClass} flex flex-col items-center gap-6 border p-8 transition-all md:flex-row md:gap-10`}
              >
                {/* Left icon wrapper */}
                <div className="shrink-0 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 shadow-sm">
                  {slide.icon}
                </div>

                {/* Right typography details */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h3 className="text-lg leading-snug font-extrabold text-[#1F2933] md:text-2xl">{slide.title}</h3>
                  <p className="max-w-xl text-xs leading-relaxed text-[#1F2933]/70">{slide.description}</p>
                  <div>
                    <Button variant="primary" size="sm" rightIcon={<ArrowRight size={13} />} className="btn-primary">
                      {slide.btnText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          />

          {/* Luxury External control arrows */}
          <div className="mt-6 flex items-center justify-between border-t border-[#BB9B49]/20 pt-6">
            <span className="font-mono text-[10px] tracking-widest text-[#1F2933]/50 uppercase">
              WebCore SecOps Marketing Panels
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-lg px-3 text-xs text-[#1F2933]/60 hover:text-[#1F2933]"
                onClick={() => carouselApi?.scrollPrev()}
              >
                Trước
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-lg px-3 text-xs text-[#1F2933]/60 hover:text-[#1F2933]"
                onClick={() => carouselApi?.scrollNext()}
              >
                Sau
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
