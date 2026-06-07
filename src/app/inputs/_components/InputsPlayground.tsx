"use client";

import React, { useState, useCallback } from "react";

import { Mail, Lock, Search, Eye, EyeOff, User, Sparkles, Hash, X } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/common/Input";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function InputsPlayground() {
  // Hooks

  // States
  const [showPassword, setShowPassword] = useState(false);
  const [demoText, setDemoText] = useState("");
  const [clearableText, setClearableText] = useState("");
  const [counterText, setCounterText] = useState("");

  // Handlers
  const handleTogglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleClearText = useCallback(() => {
    setClearableText("");
  }, []);

  // Constants & Memos
  const testCases: TestCase[] = [
    // --- Nhóm: Các Kiểu Nhập Liệu (Types)
    {
      id: "type-text",
      category: "Các Loại Ô Nhập (Types)",
      title: 'Ô nhập Văn Bản Thường (type="text")',
      desc: "Ô nhập liệu tiêu chuẩn để thu thập thông tin ngắn dạng chữ như Họ tên, Địa chỉ, Tiêu đề bài viết.",
      propsUsed: 'type="text" placeholder="Nhập họ và tên..."',
      element: (
        <Input
          type="text"
          placeholder="Nhập họ và tên..."
          value={demoText}
          onChange={e => setDemoText(e.target.value)}
        />
      ),
    },
    {
      id: "type-password",
      category: "Các Loại Ô Nhập (Types)",
      title: "Ô nhập Mật Khẩu (Tương tác ẩn/hiện)",
      desc: "Tích hợp nút Xem nhanh mật khẩu ở icon bên phải bằng cách chuyển đổi động kiểu input từ password sang text và ngược lại.",
      propsUsed: 'type={showPassword ? "text" : "password"} rightIcon={<button onClick={...}><Eye .../></button>}',
      element: (
        <Input
          type={showPassword ? "text" : "password"}
          label="Mật khẩu truy cập"
          placeholder="Nhập mật khẩu của bạn..."
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button
              type="button"
              onClick={handleTogglePassword}
              className="cursor-pointer text-[#1F2933]/40 transition-colors hover:text-[#1F2933] focus:outline-none"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      ),
    },
    {
      id: "type-email",
      category: "Các Loại Ô Nhập (Types)",
      title: 'Ô nhập địa chỉ Email (type="email")',
      desc: "Ô nhập tự động kiểm tra định dạng email tiêu chuẩn và hiển thị cảnh báo nếu thiếu ký tự @ hoặc sai cấu trúc tên miền.",
      propsUsed: 'type="email" placeholder="example@domain.com" leftIcon={<Mail size={16} />}',
      element: <Input type="email" placeholder="example@domain.com" leftIcon={<Mail size={16} />} />,
    },
    {
      id: "type-number",
      category: "Các Loại Ô Nhập (Types)",
      title: 'Ô nhập giá trị Số (type="number")',
      desc: "Chỉ cho phép người dùng nhập các ký tự số, tích hợp thêm icon chỉ số ở góc bên trái hỗ trợ nhập lượng tiền hoặc số điện thoại.",
      propsUsed: 'type="number" placeholder="Nhập số lượng..." leftIcon={<Hash size={16} />}',
      element: <Input type="number" placeholder="Nhập số lượng..." leftIcon={<Hash size={16} />} />,
    },

    // --- Nhóm: Kích Thước (Sizes)
    {
      id: "size-sm",
      category: "Kích Thước (Sizes)",
      title: "Size Small (sm)",
      desc: "Chiều cao nhỏ gọn (36px). Thích hợp sử dụng cho các bộ lọc tìm kiếm nhanh (filter bar), trong bảng dữ liệu hoặc trên thiết bị di động nhỏ.",
      propsUsed: 'size="sm" placeholder="Tìm kiếm nhanh..." leftIcon={<Search size={14} />}',
      element: <Input size="sm" placeholder="Tìm kiếm nhanh..." leftIcon={<Search size={14} />} />,
    },
    {
      id: "size-md",
      category: "Kích Thước (Sizes)",
      title: "Size Medium (md - Mặc định)",
      desc: "Chiều cao tiêu chuẩn (44px). Phù hợp cho hầu hết các vị trí form thông tin, đăng ký, đăng nhập tiêu chuẩn.",
      propsUsed: 'size="md" placeholder="Nhập thông tin tiêu chuẩn..."',
      element: <Input size="md" placeholder="Nhập thông tin tiêu chuẩn..." />,
    },
    {
      id: "size-lg",
      category: "Kích Thước (Sizes)",
      title: "Size Large (lg)",
      desc: "Chiều cao lớn nổi bật (52px), bo góc rộng. Sử dụng cho các ô tìm kiếm lớn ở trang chủ chính hoặc các form trên Landing Page.",
      propsUsed: 'size="lg" placeholder="Nhập từ khóa tìm kiếm..."',
      element: <Input size="lg" placeholder="Nhập từ khóa tìm kiếm..." />,
    },

    // --- Nhóm: Trạng Thái & Icons
    {
      id: "state-icon-left",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Ô nhập có Icon bên trái",
      desc: "Bổ sung icon trực quan bên trái biểu thị loại dữ liệu cần nhập (ví dụ: icon User cho Tên tài khoản).",
      propsUsed: 'leftIcon={<User size={16} />} placeholder="Nhập tên đăng nhập..."',
      element: <Input leftIcon={<User size={16} />} placeholder="Nhập tên đăng nhập..." />,
    },
    {
      id: "state-error",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Trạng thái Báo Lỗi (Error State)",
      desc: "Tự động hiển thị viền đỏ nổi bật xung quanh ô nhập và hiện thông điệp báo lỗi chi tiết có hiệu ứng slide-down bên dưới.",
      propsUsed: 'label="Tài khoản" error="Tên đăng nhập không được để trống"',
      element: <Input label="Tài khoản" error="Tên đăng nhập không được để trống" placeholder="Nhập tài khoản..." />,
    },
    {
      id: "state-disabled",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Trạng thái Vô Hiệu Hóa (Disabled)",
      desc: "Khóa hoàn toàn mọi hành vi click, focus hoặc nhập liệu của người dùng, làm mờ đi 60% và đổi con trỏ chuột cấm chỉ.",
      propsUsed: 'disabled placeholder="Không thể chỉnh sửa trường này"',
      element: <Input disabled placeholder="Không thể chỉnh sửa trường này" label="Khóa chỉnh sửa" />,
    },

    // --- Nhóm: Tự Do Tùy Biến (Customization)
    {
      id: "custom-tailwind",
      category: "Tùy Biến (Customization)",
      title: "Ghi đè bằng className (Tailwind)",
      desc: "Sử dụng thuộc tính className truyền từ bên ngoài để ghi đè bo góc tròn hoàn toàn (rounded-full) hoặc đổi màu viền sang tông Indigo.",
      propsUsed: 'className="rounded-full border-indigo-500/50 focus:border-indigo-500 focus:ring-indigo-500"',
      element: (
        <Input
          placeholder="Custom border & rounded..."
          className="rounded-full border-indigo-500/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      ),
    },
    {
      id: "custom-unstyled",
      category: "Tùy Biến (Customization)",
      title: "Chế độ Unstyled (Bỏ Styles mặc định)",
      desc: "Loại bỏ hoàn toàn toàn bộ màu nền và màu viền mặc định, giữ lại các thuộc tính cấu trúc cơ bản để nhà phát triển tự custom từ đầu.",
      propsUsed: 'unstyled leftIcon={<Sparkles size={16} />} className="border-b border-[#BB9B49]/40 ..."',
      element: (
        <Input
          unstyled
          leftIcon={<Sparkles size={16} />}
          placeholder="Chỉ có viền dưới..."
          className="border-b border-[#BB9B49]/40 bg-transparent py-2 text-[#1F2933] transition-colors focus:border-[#BB9B49] focus:outline-none"
        />
      ),
    },
    {
      id: "interactive-clearable",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Ô Nhập có nút Xóa Nhanh (Clearable Input)",
      desc: "Hiển thị icon Xóa (dấu x) ở bên phải khi ô nhập có dữ liệu, cho phép người dùng click để xóa sạch nội dung nhanh chóng.",
      propsUsed: "value={clearableText} onChange={(e) => setClearableText(e.target.value)} rightIcon={...}",
      element: (
        <Input
          placeholder="Nhập chữ để hiện nút xóa..."
          value={clearableText}
          onChange={e => setClearableText(e.target.value)}
          rightIcon={
            clearableText ? (
              <button
                type="button"
                onClick={handleClearText}
                className="cursor-pointer text-[#1F2933]/40 transition-colors hover:text-[#1F2933] focus:outline-none"
              >
                <X size={16} />
              </button>
            ) : undefined
          }
        />
      ),
    },
    {
      id: "interactive-counter",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Đếm Số Ký Tự Thực Tế (Character Counter)",
      desc: "Giới hạn tối đa 20 ký tự và hiển thị đếm số lượng ký tự trực tiếp thời gian thực bên dưới ô nhập liệu.",
      propsUsed: "maxLength={20} value={counterText} onChange={(e) => setCounterText(e.target.value)}",
      element: (
        <div className="w-full">
          <Input
            placeholder="Giới hạn 20 ký tự..."
            maxLength={20}
            value={counterText}
            onChange={e => setCounterText(e.target.value)}
          />
          <div className="mt-1 flex justify-end text-[10px] text-[#1F2933]/50">
            <span className={counterText.length >= 20 ? "font-bold text-amber-600" : ""}>
              {counterText.length}/20 ký tự
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "state-readonly",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Trạng thái Chỉ Đọc (Read-Only)",
      desc: "Ô nhập dữ liệu ở chế độ chỉ cho xem hoặc sao chép, không cho chỉnh sửa nhưng không bị làm mờ sâu như disabled.",
      propsUsed: 'readOnly value="API-KEY-XYZ-123456" label="Khóa API Của Bạn"',
      element: (
        <Input
          readOnly
          label="Khóa API Của Bạn"
          value="API-KEY-XYZ-123456"
          onClick={() => {
            navigator.clipboard.writeText("API-KEY-XYZ-123456");
            toast.success("Đã sao chép khóa API vào Clipboard!");
          }}
          className="cursor-pointer font-mono text-[#BB9B49] select-all"
        />
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
          <span>🧩</span> Bảng Kiểm Thử: Component Input
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử toàn bộ các thuộc tính, trạng thái hoạt động và kịch bản kết xuất (Render Test Cases) của Input
          dùng chung.
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
