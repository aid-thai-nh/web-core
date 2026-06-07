"use client";

import React, { useState, useCallback } from "react";

import { RefreshCw, UserCheck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/common/Button";
import { Skeleton } from "@/components/common/Skeleton";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function SkeletonsPlayground() {
  // Hooks

  // States
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Handlers
  const handleSimulateLoad = useCallback(() => {
    setIsDataLoaded(false);
    toast.promise(new Promise(resolve => setTimeout(resolve, 2500)), {
      loading: "Đang tải thông tin thành viên...",
      success: () => {
        setIsDataLoaded(true);
        return "Dữ liệu thành viên đã sẵn sàng!";
      },
      error: "Lỗi kết nối!",
    });
  }, []);

  // Constants & Memos
  const testCases: TestCase[] = [
    // --- Nhóm: Các Kiểu Chuyển Động (Animations)
    {
      id: "sk-pulse",
      category: "Hiệu Ứng Chuyển Động",
      title: "Skeleton Nhấp Nháy (Pulse Animation - Mặc định)",
      desc: "Chuyển động nhấp nháy tuần hoàn độ đục (opacity) từ nhạt sang đậm. Phổ biến cho các khối tải dữ liệu cơ bản.",
      propsUsed: 'animation="pulse" (hoặc không truyền)',
      element: <Skeleton className="h-6 w-[200px]" />,
    },
    {
      id: "sk-wave",
      category: "Hiệu Ứng Chuyển Động",
      title: "Skeleton Làn Sóng (Wave Shimmer)",
      desc: "Hiệu ứng ánh sáng quét ngang qua phần tử nhờ dải màu gradient di chuyển liên tục, tạo cảm giác mượt mà và cao cấp hơn.",
      propsUsed: 'animation="wave"',
      element: <Skeleton animation="wave" className="h-6 w-[200px]" />,
    },
    {
      id: "sk-none",
      category: "Hiệu Ứng Chuyển Động",
      title: "Skeleton Tĩnh (None Animation)",
      desc: "Hiển thị một khối màu cố định không chuyển động. Thích hợp cho các trường hợp không muốn gây rối mắt người dùng.",
      propsUsed: 'animation="none"',
      element: <Skeleton animation="none" className="h-6 w-[200px]" />,
    },

    // --- Nhóm: Hình Dạng & Kích Thước (Shapes)
    {
      id: "sk-avatar-sizes",
      category: "Hình Dạng & Cấu Trúc",
      title: "Avatar Hình Tròn (Tròn trịa)",
      desc: "Kiểm thử các kích cỡ hình đại diện từ nhỏ (32px), vừa (48px) đến lớn (64px) bằng cách kết hợp bo góc tròn hoàn toàn.",
      propsUsed: 'className="rounded-full h-8 w-8 | h-12 w-12 | h-16 w-16"',
      element: (
        <div className="flex items-end gap-4">
          <Skeleton animation="wave" className="h-8 w-8 shrink-0 rounded-full" />
          <Skeleton animation="wave" className="h-12 w-12 shrink-0 rounded-full" />
          <Skeleton animation="wave" className="h-16 w-16 shrink-0 rounded-full" />
        </div>
      ),
    },
    {
      id: "sk-text-paragraph",
      category: "Hình Dạng & Cấu Trúc",
      title: "Giả lập Đoạn Văn Bản (Text Lines)",
      desc: "Mô phỏng nhiều dòng văn bản đang tải bằng cách xếp chồng các đường line có chiều rộng (width) ngẫu nhiên khác nhau.",
      propsUsed: "Xếp chồng nhiều thẻ <Skeleton /> có độ cao h-2.5 hoặc h-3",
      element: (
        <div className="w-full max-w-[280px] space-y-2">
          <Skeleton animation="wave" className="h-3 w-full" />
          <Skeleton animation="wave" className="h-3 w-5/6" />
          <Skeleton animation="wave" className="h-3 w-4/5" />
          <Skeleton animation="wave" className="h-2.5 w-1/2" />
        </div>
      ),
    },

    // --- Nhóm: Cấu Trúc Khối Lớn (Layout Mocks)
    {
      id: "sk-card-layout",
      category: "Mockups Giao Diện Lớn",
      title: "Khung Xương Thẻ Sản Phẩm (Card Loading)",
      desc: "Mô phỏng tải toàn bộ một Card bao gồm: Ảnh bìa sản phẩm, Avatar người bán, Tên tiêu đề, Mô tả và Nút bấm CTA.",
      propsUsed: "Khung xương phức hợp bọc trong div",
      element: (
        <div className="w-full max-w-[280px] space-y-4 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4">
          {/* Cover image skeleton */}
          <Skeleton animation="wave" className="h-32 w-full rounded-xl" />
          <div className="flex items-center gap-3">
            <Skeleton animation="wave" className="h-9 w-9 shrink-0 rounded-full" />
            <div className="w-full space-y-1.5">
              <Skeleton animation="wave" className="h-3 w-2/3" />
              <Skeleton animation="wave" className="h-2.5 w-1/3" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <Skeleton animation="wave" className="h-4 w-1/3" />
            <Skeleton animation="wave" className="h-8 w-1/3 rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      id: "sk-table-layout",
      category: "Mockups Giao Diện Lớn",
      title: "Khung Xương Hàng Bảng Dữ Liệu (Table Row Loading)",
      desc: "Mô phỏng tải các hàng cột dữ liệu của một Table trước khi hiển thị dữ liệu bảng chính thức.",
      propsUsed: "Xếp chồng các hàng chia cột flex",
      element: (
        <div className="w-full max-w-[320px] space-y-3 rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED]/80 p-3">
          <div className="flex items-center justify-between border-b border-[#BB9B49]/15 pb-2">
            <Skeleton animation="wave" className="h-3.5 w-1/4" />
            <Skeleton animation="wave" className="h-3.5 w-1/4" />
            <Skeleton animation="wave" className="h-3.5 w-1/5" />
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between py-0.5">
              <Skeleton animation="wave" className="h-3 w-1/3" />
              <Skeleton animation="wave" className="h-3 w-1/5" />
              <Skeleton animation="wave" className="h-3 w-1/6" />
            </div>
          ))}
        </div>
      ),
    },

    // --- Nhóm: Trực quan tương tác
    {
      id: "sk-interactive-demo",
      category: "Tải Dữ Liệu Thực Tế",
      title: "Mô Phỏng Trình Tải Dữ Liệu Thực Tế (Async Load)",
      desc: "Nhấn nút 'Tải lại dữ liệu' để kích hoạt trạng thái loading. Sau 2.5 giây, khung xương sẽ tự động ẩn đi và hiển thị thẻ Profile thành viên hoàn chỉnh.",
      propsUsed: "isDataLoaded ? <RealProfileCard /> : <SkeletonProfileCard />",
      element: (
        <div className="flex w-full max-w-[280px] flex-col gap-3">
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<RefreshCw size={12} />}
            onClick={handleSimulateLoad}
            className="w-full font-bold"
          >
            Tải Lại Thành Viên (2.5s)
          </Button>

          {isDataLoaded ? (
            <div className="animate-in fade-in rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 shadow-xl duration-300">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#BB9B49]/20 bg-[#EBD197]/20 text-xl font-bold text-[#BB9B49]">
                  JD
                </div>
                <div>
                  <h5 className="flex items-center gap-1.5 text-sm font-bold text-[#1F2933]">
                    John Doe
                    <UserCheck size={12} className="text-[#BB9B49]" />
                  </h5>
                  <p className="text-[10px] text-[#1F2933]/50">john.doe@company.com</p>
                </div>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-[#1F2933]/60">
                Nhà thiết kế kiến trúc UX/UI trong nhóm phát triển Boilerplate WebCore Master.
              </p>
            </div>
          ) : (
            <div className="space-y-3 rounded-2xl border border-[#BB9B49]/15 bg-[#F7F4ED] p-4">
              <div className="flex animate-pulse items-center gap-3">
                <Skeleton animation="wave" className="h-12 w-12 shrink-0 rounded-full" />
                <div className="w-full space-y-1.5">
                  <Skeleton animation="wave" className="h-3.5 w-2/3" />
                  <Skeleton animation="wave" className="h-2.5 w-1/2" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Skeleton animation="wave" className="h-2 w-full" />
                <Skeleton animation="wave" className="h-2 w-5/6" />
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: "sk-button-mock",
      category: "Hình Dạng & Cấu Trúc",
      title: "Giả lập Nút Bấm đang tải (Button Mock)",
      desc: "Giả lập tải các nút bấm với nhiều kích thước khác nhau để khớp với kích cỡ nút thật (sm, md, lg và icon).",
      propsUsed: 'className="h-9 w-20 | h-11 w-28 | h-13 w-36 | h-10 w-10 rounded-full"',
      element: (
        <div className="flex items-center gap-3">
          <Skeleton animation="wave" className="h-9 w-20 rounded-lg" />
          <Skeleton animation="wave" className="h-11 w-28 rounded-xl" />
          <Skeleton animation="wave" className="h-13 w-36 rounded-2xl" />
          <Skeleton animation="wave" className="h-10 w-10 rounded-full" />
        </div>
      ),
    },
    {
      id: "sk-ratio-mock",
      category: "Mockups Giao Diện Lớn",
      title: "Giả lập Ảnh Tỷ lệ 16:9 (Aspect Ratio)",
      desc: "Giả lập tải hình ảnh với tỷ lệ khung hình 16:9 cố định để giữ chỗ trên giao diện, chống giật trang (Layout Shift).",
      propsUsed: 'className="aspect-video w-full max-w-[280px] rounded-xl"',
      element: (
        <div className="w-full max-w-[280px] space-y-2">
          <Skeleton animation="wave" className="aspect-video w-full rounded-xl" />
          <div className="flex justify-between">
            <Skeleton animation="wave" className="h-3 w-1/3" />
            <Skeleton animation="wave" className="h-3 w-1/4" />
          </div>
        </div>
      ),
    },
  ];

  // Gom nhóm các test case theo category để hiển thị phân khu rõ ràng
  const categories = Array.from(new Set(testCases.map(tc => tc.category)));

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header intro */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>🧩</span> Bảng Kiểm Thử: Component Skeleton
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử các cấu hình chuyển động (Pulse, Shimmer Wave) và kịch bản hiển thị khung xương tải dữ liệu của
          Skeleton dùng chung.
        </p>
      </div>

      {/* Danh sách các Test Case phân nhóm */}
      <div className="space-y-12">
        {categories.map(cat => (
          <section key={cat} className="space-y-6">
            <div className="border-l-4 border-[#BB9B49] pl-4">
              <h3 className="text-xl font-bold tracking-tight">{cat}</h3>
              <p className="mt-0.5 text-xs text-[#1F2933]/60">
                Nhóm các kịch bản kiểm thử liên quan đến {cat.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {testCases
                .filter(tc => tc.category === cat)
                .map(tc => (
                  <div
                    key={tc.id}
                    className="flex flex-col justify-between gap-6 rounded-2xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-6 transition-all duration-300 hover:border-[#BB9B49]/50 hover:bg-[#EBD197]/10 md:flex-row md:items-center"
                  >
                    <div className="max-w-2xl space-y-2">
                      <h4 className="flex items-center gap-2 text-base font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#BB9B49]" />
                        {tc.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#1F2933]/70">{tc.desc}</p>

                      {/* Hiển thị props truyền vào */}
                      <div className="flex items-center gap-1.5 pt-1 font-mono text-[10px] text-[#BB9B49]">
                        <span className="text-[#1F2933]/50 select-none">Props:</span>
                        <code className="rounded border border-[#BB9B49]/20 bg-[#F7F4ED] px-2 py-0.5">
                          {tc.propsUsed}
                        </code>
                      </div>
                    </div>

                    <div className="flex min-w-[280px] shrink-0 items-center justify-start md:justify-end">
                      {tc.element}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
