"use client";

import React, { useState, useCallback } from "react";

import { Plus, ArrowRight, Home, ExternalLink, Settings, Sparkles, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/common/Button";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function ButtonsPlayground() {
  // Hooks

  // States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [formResult, setFormResult] = useState<string | null>(null);

  // Handlers
  const handleSimulateApiCall = useCallback(() => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Gọi API gửi dữ liệu thành công!");
    }, 2000);
  }, []);

  const handleConfirmClick = useCallback(() => {
    if (!isConfirming) {
      setIsConfirming(true);
      toast.warning("Vui lòng nhấn một lần nữa để xác nhận xóa!");
      // Tự động khôi phục trạng thái xác nhận sau 4 giây nếu không có hành động tiếp theo
      setTimeout(() => {
        setIsConfirming(false);
      }, 4000);
    } else {
      setIsConfirming(false);
      toast.error("Đã thực thi hành động xóa dữ liệu vĩnh viễn!");
    }
  }, [isConfirming]);

  // Constants & Memos
  const testCases: TestCase[] = [
    // --- Nhóm: Các Biến Thể Giao Diện (Variants)
    {
      id: "var-primary",
      category: "Các Biến Thể (Variants)",
      title: "Button Primary (Mặc định)",
      desc: "Nút bấm chính có nền màu Champagne Gold gradient sang trọng. Được dùng cho các hành động quan trọng nhất trên giao diện như 'Lưu', 'Xác nhận', hoặc 'Gửi form'.",
      propsUsed: 'variant="primary"',
      element: <Button variant="primary">Primary Button</Button>,
    },
    {
      id: "var-secondary",
      category: "Các Biến Thể (Variants)",
      title: "Button Secondary",
      desc: "Nút phụ có màu nền Champagne nhạt. Được dùng cho các hành động phụ hoặc đi kèm nút Primary để tạo sự cân bằng và định hướng thị giác tốt hơn.",
      propsUsed: 'variant="secondary"',
      element: <Button variant="secondary">Secondary Button</Button>,
    },
    {
      id: "var-outline",
      category: "Các Biến Thể (Variants)",
      title: "Button Outline",
      desc: "Nút viền có nền trong suốt và nổi bật đường viền Champagne Gold. Phù hợp cho các hành động mang tính chất rút lui như 'Hủy', 'Quay lại', hoặc 'Xem thêm'.",
      propsUsed: 'variant="outline"',
      element: <Button variant="outline">Outline Button</Button>,
    },
    {
      id: "var-ghost",
      category: "Các Biến Thể (Variants)",
      title: "Button Ghost",
      desc: "Nút bóng ma không nền và không viền ở trạng thái tĩnh, chỉ đổi màu nền nhạt khi di chuột. Thường dùng trong thanh công cụ (toolbar) hoặc menu bar.",
      propsUsed: 'variant="ghost"',
      element: <Button variant="ghost">Ghost Button</Button>,
    },
    {
      id: "var-danger",
      category: "Các Biến Thể (Variants)",
      title: "Button Danger",
      desc: "Nút cảnh báo nguy hiểm sử dụng nền màu đỏ tươi. Dùng riêng cho các hành động không thể đảo ngược hoặc gây mất mát dữ liệu như 'Xóa tài khoản', 'Hủy'.",
      propsUsed: 'variant="danger"',
      element: <Button variant="danger">Danger Button</Button>,
    },
    {
      id: "var-link",
      category: "Các Biến Thể (Variants)",
      title: "Button Link",
      desc: "Nút giả lập đường dẫn, nền trong suốt và tự động gạch chân text khi hover. Dùng cho các liên kết phụ không cần thu hút nhiều sự chú ý của người dùng.",
      propsUsed: 'variant="link"',
      element: <Button variant="link">Link Button</Button>,
    },

    // --- Nhóm: Kích Thước (Sizes)
    {
      id: "size-sm",
      category: "Kích Thước (Sizes)",
      title: "Size Small (sm)",
      desc: "Chiều cao 36px, kích thước chữ nhỏ (xs). Thích hợp cho các khu vực giao diện chật hẹp, bảng dữ liệu (data table) hoặc phiên bản di động.",
      propsUsed: 'size="sm"',
      element: <Button size="sm">Small Button</Button>,
    },
    {
      id: "size-md",
      category: "Kích Thước (Sizes)",
      title: "Size Medium (md - Mặc định)",
      desc: "Chiều cao 44px, kích thước chữ tiêu chuẩn (sm). Là kích cỡ phổ biến nhất được sử dụng cho hầu hết các nút bấm trong ứng dụng.",
      propsUsed: 'size="md"',
      element: <Button size="md">Medium Button</Button>,
    },
    {
      id: "size-lg",
      category: "Kích Thước (Sizes)",
      title: "Size Large (lg)",
      desc: "Chiều cao 52px, kích thước chữ lớn (base), bo góc rộng hơn. Sử dụng cho các nút hành động chính (CTA) nổi bật trên trang chủ hoặc Landing Page.",
      propsUsed: 'size="lg"',
      element: <Button size="lg">Large Button</Button>,
    },
    {
      id: "size-icon",
      category: "Kích Thước (Sizes)",
      title: "Size Icon (icon)",
      desc: "Nút bấm dạng hình vuông tỉ lệ 1:1 dùng riêng để chứa các biểu tượng hoặc icon điều hướng (không chứa nhãn văn bản).",
      propsUsed: 'size="icon" variant="outline"',
      element: (
        <Button size="icon" variant="outline">
          <Settings size={16} />
        </Button>
      ),
    },

    // --- Nhóm: Trạng Thái Tương Tác & Icons
    {
      id: "state-loading",
      category: "Trạng Tháii & Tương Tác",
      title: "Trạng thái Loading Tĩnh",
      desc: "Tự động hiển thị vòng quay loading (Spinner) ở vị trí icon bên trái và vô hiệu hóa click chuột (disabled) để báo hiệu hệ thống đang xử lý dữ liệu.",
      propsUsed: "isLoading={true}",
      element: <Button isLoading={true}>Đang xử lý</Button>,
    },
    {
      id: "state-api",
      category: "Trạng Tháii & Tương Tác",
      title: "Trạng thái Gọi API Thực Tế (Tương tác)",
      desc: "Nút bấm mô phỏng cuộc gọi API thực tế. Click vào nút sẽ chuyển sang trạng thái loading và disabled trong 2 giây trước khi thông báo thành công.",
      propsUsed: 'variant="primary" isLoading={isSubmitting} onClick={handleSimulateApiCall}',
      element: (
        <Button variant="primary" isLoading={isSubmitting} onClick={handleSimulateApiCall}>
          Gửi Dữ Liệu (API Call)
        </Button>
      ),
    },
    {
      id: "state-confirm",
      category: "Trạng Tháii & Tương Tác",
      title: "Xác nhận Hai Bước (Double Confirm)",
      desc: "Ngăn chặn các thao tác xóa nhầm bằng cách yêu cầu xác nhận 2 lần. Nhấn lần 1 nút chuyển sang màu đỏ cảnh báo, nhấn lần 2 mới thực thi hành động.",
      propsUsed: 'variant={isConfirming ? "danger" : "outline"} onClick={handleConfirmClick}',
      element: (
        <Button
          variant={isConfirming ? "danger" : "outline"}
          leftIcon={<Trash2 size={16} />}
          onClick={handleConfirmClick}
          className="min-w-[180px] transition-all"
        >
          {isConfirming ? "Nhấp lại để Xóa" : "Xóa Tài Khoản"}
        </Button>
      ),
    },
    {
      id: "icon-left",
      category: "Trạng Tháii & Tương Tác",
      title: "Tích hợp Icon Bên Trái",
      desc: "Bổ sung biểu tượng trực quan vào phía bên trái nhãn văn bản, giúp người dùng nhanh chóng nhận diện ý nghĩa chức năng của nút.",
      propsUsed: "leftIcon={<Plus size={16} />}",
      element: <Button leftIcon={<Plus size={16} />}>Thêm Mới</Button>,
    },
    {
      id: "icon-right",
      category: "Trạng Tháii & Tương Tác",
      title: "Tích hợp Icon Bên Phải",
      desc: "Bổ sung biểu tượng vào phía bên phải nhãn văn bản, thường dùng cho các nút chuyển bước tiếp theo hoặc chỉ hướng liên kết.",
      propsUsed: 'variant="secondary" rightIcon={<ArrowRight size={16} />}',
      element: (
        <Button variant="secondary" rightIcon={<ArrowRight size={16} />}>
          Tiếp Tục
        </Button>
      ),
    },
    {
      id: "state-disabled",
      category: "Trạng Tháii & Tương Tác",
      title: "Trạng thái Vô Hiệu Hóa (Disabled)",
      desc: "Vô hiệu hóa hoàn toàn tương tác chuột, tự động làm mờ (opacity 50%) và đổi con trỏ chuột thành dạng cấm click để chặn mọi thao tác.",
      propsUsed: "disabled={true}",
      element: <Button disabled={true}>Vô Hiệu Hóa</Button>,
    },

    // --- Nhóm: Hành Vi Biểu Mẫu (Forms)
    {
      id: "form-action",
      category: "Biểu Mẫu & Sự Kiện (Form Actions)",
      title: "Sự kiện onSubmit & onReset trong HTML Form",
      desc: "Biểu mẫu tương tác nhỏ kiểm thử hành vi truyền thống. Click 'Submit' (type='submit') kích hoạt gửi dữ liệu form, click 'Reset' (type='reset') khôi phục dữ liệu ban đầu.",
      propsUsed: 'type="submit" (nút chính) | type="reset" (nút phụ)',
      element: (
        <form
          onSubmit={e => {
            e.preventDefault();
            setFormResult("Dữ liệu form đã gửi thành công!");
            toast.success("onSubmit Form được kích hoạt!");
          }}
          onReset={() => {
            setFormResult(null);
            setFormValue("");
            toast.info("Đã reset form về trạng thái trống!");
          }}
          className="flex w-full max-w-[280px] flex-col gap-2 rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-3"
        >
          <input
            type="text"
            placeholder="Nhập gì đó..."
            value={formValue}
            onChange={e => setFormValue(e.target.value)}
            className="rounded-lg border border-[#BB9B49]/30 bg-[#F7F4ED] px-3 py-1.5 text-xs text-[#1F2933] focus:border-[#BB9B49] focus:outline-none"
          />
          <div className="flex gap-2">
            <Button type="reset" variant="outline" size="sm" className="flex-1">
              Reset
            </Button>
            <Button type="submit" variant="primary" size="sm" className="flex-1">
              Submit
            </Button>
          </div>
          {formResult && <span className="text-center text-[10px] font-semibold text-[#BB9B49]">{formResult}</span>}
        </form>
      ),
    },

    // --- Nhóm: Bố Cục & Responsive
    {
      id: "layout-responsive",
      category: "Bố Cục & Responsive",
      title: "Nút co giãn Responsive Width",
      desc: "Nút bấm co giãn linh hoạt: Chiếm 100% chiều rộng khung chứa (w-full) trên thiết bị di động (mobile) và tự co gọn lại trên thiết bị Desktop lớn.",
      propsUsed: 'className="w-full md:w-auto"',
      element: (
        <div className="w-full max-w-[300px] rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 md:max-w-none">
          <span className="mb-2 block text-[10px] text-[#1F2933]/50">Khung chứa co giãn thử nghiệm:</span>
          <Button variant="primary" className="w-full md:w-auto">
            Responsive Button
          </Button>
        </div>
      ),
    },

    // --- Nhóm: Định Tuyến Linh Hoạt (asChild)
    {
      id: "route-link",
      category: "Định Tuyến (asChild)",
      title: "Render thành Link Next.js (asChild + Link)",
      desc: "Kế thừa thẻ Link của Next.js nhờ cơ chế Radix Slot. Nút bấm sẽ được kết xuất thành thẻ <a> chuẩn SEO, hỗ trợ prefetch trang nhưng vẫn giữ nguyên giao diện nút bấm.",
      propsUsed: 'asChild variant="outline" leftIcon={<Home size={16} />}',
      element: (
        <Button asChild variant="outline" leftIcon={<Home size={16} />}>
          <Link href="/">Quay về Trang Chủ</Link>
        </Button>
      ),
    },
    {
      id: "route-external",
      category: "Định Tuyến (asChild)",
      title: "Render thành Thẻ a truyền thống (asChild + a)",
      desc: "Sử dụng asChild bọc thẻ a thông thường để chuyển hướng người dùng sang các liên kết bên ngoài hệ thống (External URL).",
      propsUsed: 'asChild variant="ghost" rightIcon={<ExternalLink size={14} />}',
      element: (
        <Button asChild variant="ghost" rightIcon={<ExternalLink size={14} />}>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Đi tới Google
          </a>
        </Button>
      ),
    },

    // --- Nhóm: Tiêu Chuẩn Tiếp Cận (Accessibility / A11y)
    {
      id: "a11y-aria",
      category: "Tiêu Chuẩn Tiếp Cận (A11y)",
      title: "ARIA Attributes cho trình đọc màn hình",
      desc: "Gắn thẻ thuộc tính aria-label để mô tả công năng cho các nút chỉ chứa icon, giúp những người khiếm thị sử dụng trình đọc màn hình dễ dàng điều hướng ứng dụng.",
      propsUsed: 'aria-label="Xóa dữ liệu vĩnh viễn"',
      element: (
        <Button variant="danger" size="icon" aria-label="Xóa dữ liệu vĩnh viễn">
          <Trash2 size={16} />
        </Button>
      ),
    },

    // --- Nhóm: Tự Do Tùy Biến (Customization)
    {
      id: "custom-tailwind",
      category: "Tùy Biến (Customization)",
      title: "Ghi đè Giao diện bằng className",
      desc: "Truyền thêm các class Tailwind tùy chỉnh vào prop className để ghi đè bo góc tròn hoàn toàn (rounded-full) và đổ màu nền gradient chuyển sắc.",
      propsUsed: 'className="rounded-full border-none bg-gradient-to-r from-blue-600 to-indigo-600 ..."',
      element: (
        <Button className="rounded-full border-none bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white shadow-lg shadow-indigo-600/20 hover:from-blue-700 hover:to-indigo-700">
          Rounded Gradient Button
        </Button>
      ),
    },
    {
      id: "custom-unstyled",
      category: "Tùy Biến (Customization)",
      title: "Chế độ Unstyled (Bỏ Styles mặc định)",
      desc: "Loại bỏ hoàn toàn toàn bộ màu nền, viền và hiệu ứng mặc định của các variant. Cho phép nhà phát triển tự do cấu hình style riêng biệt từ con số không.",
      propsUsed: 'unstyled leftIcon={<Sparkles size={16} />} className="..."',
      element: (
        <Button
          unstyled
          leftIcon={<Sparkles size={16} />}
          className="flex cursor-pointer items-center gap-2 rounded-2xl bg-rose-600 px-6 py-3 font-semibold text-white shadow-md shadow-rose-900/10 transition-all hover:bg-rose-700 active:scale-95"
        >
          Custom Unstyled Nút
        </Button>
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
          <span>🧩</span> Bảng Kiểm Thử: Component Button
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử toàn bộ các thuộc tính, trạng thái hoạt động và kịch bản kết xuất (Render Test Cases) của
          Button dùng chung.
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

                    <div className="flex min-w-[200px] shrink-0 items-center justify-start md:justify-end">
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
