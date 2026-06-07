"use client";

import React, { useState, useCallback } from "react";

import { Flame, X, Shield, Star, RefreshCw } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function BadgesPlayground() {
  // Hooks

  // States
  const [isTagVisible, setIsTagVisible] = useState(true);

  // Handlers
  const handleDismissTag = useCallback(() => {
    setIsTagVisible(false);
    toast.success("Đã xóa nhãn Tag khỏi danh sách lọc!");
  }, []);

  const handleResetTag = useCallback(() => {
    setIsTagVisible(true);
  }, []);

  // Constants & Memos
  const testCases: TestCase[] = [
    // --- Nhóm: Các Biến Thể Màu Sắc (Variants)
    {
      id: "badge-primary",
      category: "Các Biến Thể (Variants)",
      title: "Badge Primary (Mặc định)",
      desc: "Nhãn trạng thái màu xanh lá cây đại diện cho các thông tin chuẩn hóa tích cực.",
      propsUsed: 'variant="primary"',
      element: <Badge variant="primary">Active</Badge>,
    },
    {
      id: "badge-secondary",
      category: "Các Biến Thể (Variants)",
      title: "Badge Secondary",
      desc: "Nhãn màu xám trung tính biểu thị thông tin phân nhóm phụ, thẻ danh mục thông thường.",
      propsUsed: 'variant="secondary"',
      element: <Badge variant="secondary">Developer</Badge>,
    },
    {
      id: "badge-success",
      category: "Các Biến Thể (Variants)",
      title: "Badge Success",
      desc: "Nhãn thành công, màu sắc tương tự Primary tạo sự nhất quán cho trạng thái hoàn thành.",
      propsUsed: 'variant="success"',
      element: <Badge variant="success">Completed</Badge>,
    },
    {
      id: "badge-warning",
      category: "Các Biến Thể (Variants)",
      title: "Badge Warning",
      desc: "Nhãn màu vàng amber cảnh báo tiến trình đang chờ xử lý, tạm ngưng hoặc cần kiểm duyệt.",
      propsUsed: 'variant="warning"',
      element: <Badge variant="warning">In Progress</Badge>,
    },
    {
      id: "badge-danger",
      category: "Các Biến Thể (Variants)",
      title: "Badge Danger",
      desc: "Nhãn cảnh báo lỗi nghiêm trọng, nguy hiểm hoặc trạng thái tài khoản/đơn hàng bị khóa.",
      propsUsed: 'variant="danger"',
      element: <Badge variant="danger">Blocked</Badge>,
    },
    {
      id: "badge-info",
      category: "Các Biến Thể (Variants)",
      title: "Badge Info",
      desc: "Nhãn màu xanh dương cung cấp thông tin chỉ số mới, cập nhật phiên bản hoặc mẹo hệ thống.",
      propsUsed: 'variant="info"',
      element: <Badge variant="info">v1.2.0 New</Badge>,
    },

    // --- Nhóm: Kích Thước (Sizes)
    {
      id: "size-sm",
      category: "Kích Thước (Sizes)",
      title: "Badge Size Small (sm)",
      desc: "Kích thước thu nhỏ gọn gàng, dùng làm tag đính kèm trên góc sản phẩm hoặc số lượng giỏ hàng.",
      propsUsed: 'size="sm"',
      element: <Badge size="sm">New</Badge>,
    },
    {
      id: "size-md",
      category: "Kích Thước (Sizes)",
      title: "Badge Size Medium (md - Mặc định)",
      desc: "Kích thước tiêu chuẩn phù hợp cho hầu hết các nhãn trạng thái và phân loại trên bảng.",
      propsUsed: 'size="md"',
      element: <Badge size="md">Standard Tag</Badge>,
    },

    // --- Nhóm: Tích hợp Icon
    {
      id: "badge-icon-left",
      category: "Tích Hợp Icons",
      title: "Badge có Icon bên trái",
      desc: "Chèn icon lửa bên trái hỗ trợ biểu diễn trực quan các xu hướng nổi bật (Hot trends).",
      propsUsed: "leftIcon={<Flame size={12} />} (được truyền qua children ReactNode)",
      element: (
        <Badge variant="warning" className="gap-1">
          <Flame size={12} className="fill-current" /> Hot Trend
        </Badge>
      ),
    },
    {
      id: "badge-icon-right",
      category: "Tích Hợp Icons",
      title: "Badge có Icon bên phải",
      desc: "Chèn biểu tượng lá chắn bên phải thể hiện trạng thái được bảo mật, an toàn thông tin.",
      propsUsed: 'className="gap-1" & icon right in children',
      element: (
        <Badge variant="primary" className="gap-1">
          Verified <Shield size={12} />
        </Badge>
      ),
    },

    // --- Nhóm: Status Pulse (Realtime)
    {
      id: "badge-pulse-success",
      category: "Nhãn Tương Tác & Realtime",
      title: "Pulsing Active Live (Màu xanh)",
      desc: "Hiển thị chấm tròn nhấp nháy chuyển động liên tục báo hiệu hệ thống trực tuyến realtime.",
      propsUsed: 'className="common-badge-pulse text-emerald-400 bg-emerald-950/20 border-emerald-800/40"',
      element: (
        <Badge
          variant="primary"
          className="common-badge-pulse border-emerald-800/40 bg-emerald-950/20 text-emerald-400"
        >
          Hệ thống chạy tốt
        </Badge>
      ),
    },
    {
      id: "badge-pulse-warning",
      category: "Nhãn Tương Tác & Realtime",
      title: "Pulsing Away / Idle (Màu vàng)",
      desc: "Hiển thị chấm nhấp nháy màu vàng báo hiệu trạng thái treo máy hoặc tạm nghỉ.",
      propsUsed: 'className="common-badge-pulse text-amber-400 bg-amber-950/20 border-amber-800/40"',
      element: (
        <Badge variant="warning" className="common-badge-pulse border-amber-800/40 bg-amber-950/20 text-amber-400">
          Chờ phản hồi
        </Badge>
      ),
    },
    {
      id: "badge-pulse-danger",
      category: "Nhãn Tương Tác & Realtime",
      title: "Pulsing Offline (Màu đỏ)",
      desc: "Chấm đỏ nhấp nháy báo động sự cố kết nối, offline hoặc dịch vụ ngưng hoạt động.",
      propsUsed: 'className="common-badge-pulse text-rose-400 bg-rose-950/20 border-rose-800/40"',
      element: (
        <Badge variant="danger" className="common-badge-pulse border-rose-800/40 bg-rose-950/20 text-rose-400">
          Mất kết nối
        </Badge>
      ),
    },
    {
      id: "badge-dismissible",
      category: "Nhãn Tương Tác & Realtime",
      title: "Nhãn đóng tắt (Dismissible Tag Filter)",
      desc: "Thực tế dùng cho các nhãn lọc điều kiện. Bấm nút [x] để gỡ bỏ tag khỏi danh sách hoạt động.",
      propsUsed: "Custom Dismiss layout inside children",
      element: (
        <div className="flex flex-col items-center gap-2">
          {isTagVisible ? (
            <Badge variant="secondary" className="gap-1 pr-1">
              <span>Công nghệ: React</span>
              <button
                onClick={handleDismissTag}
                className="cursor-pointer rounded-full p-0.5 text-[#1F2933]/40 transition-all hover:bg-[#EBD197]/30 hover:text-[#1F2933] focus:outline-none"
              >
                <X size={10} />
              </button>
            </Badge>
          ) : (
            <Button variant="outline" size="sm" leftIcon={<RefreshCw size={12} />} onClick={handleResetTag}>
              Khôi Phục Tag
            </Button>
          )}
        </div>
      ),
    },

    // --- Nhóm: Tự Do Tùy Biến (Customization)
    {
      id: "badge-custom-gradient",
      category: "Tùy Biến (Customization)",
      title: "Ghi đè bằng className (Gradient Pill)",
      desc: "Truyền thêm className để tạo bo tròn hoàn toàn (rounded-full), viền nét đứt (border-dashed) và dải màu gradient sắc sỡ.",
      propsUsed: 'className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white px-3"',
      element: (
        <Badge className="rounded-full border-none bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 font-extrabold text-white shadow-md shadow-pink-500/20">
          <Star size={10} className="mr-1 fill-current" /> Premium Vip
        </Badge>
      ),
    },
    {
      id: "badge-unstyled",
      category: "Tùy Biến (Customization)",
      title: "Chế độ Unstyled (Bỏ styles mặc định)",
      desc: "Loại bỏ hoàn toàn khung viền, bo góc và màu nền của các variant mặc định để dev tự thiết kế tự do.",
      propsUsed: 'unstyled className="underline text-emerald-400 font-bold"',
      element: (
        <Badge unstyled className="font-mono text-emerald-400 underline decoration-emerald-500 decoration-wavy">
          Unstyled custom tag
        </Badge>
      ),
    },
    {
      id: "badge-pill",
      category: "Tùy Biến (Customization)",
      title: "Bo tròn dạng Viên Thuốc (Pill)",
      desc: "Nhãn bo tròn dạng viên thuốc (rounded-full) thay vì bo góc chữ nhật mặc định.",
      propsUsed: 'className="rounded-full"',
      element: (
        <Badge className="rounded-full" variant="info">
          Pill Badge
        </Badge>
      ),
    },
    {
      id: "badge-dashed-border",
      category: "Tùy Biến (Customization)",
      title: "Nhãn viền đứt (Dashed Outline)",
      desc: "Nhãn có viền nét đứt và không nền biểu thị trạng thái nháp (Draft) hoặc cấu hình chưa lưu.",
      propsUsed: 'className="border-dashed bg-transparent border-zinc-700 text-zinc-400"',
      element: <Badge className="border-dashed border-zinc-700 bg-transparent text-zinc-400">Draft Status</Badge>,
    },
  ];

  // Gom nhóm các test case theo category để hiển thị phân khu rõ ràng
  const categories = Array.from(new Set(testCases.map(tc => tc.category)));

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header intro */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>🧩</span> Bảng Kiểm Thử: Component Badge
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử toàn bộ các thuộc tính, trạng thái hoạt động và hiệu ứng động (Pulse status) của Badge dùng
          chung.
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
