"use client";

import React, { useState, useCallback } from "react";

import { toast } from "sonner";

import { Checkbox } from "@/components/common/Checkbox";
import { cn } from "@/lib/utils";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function CheckboxesPlayground() {
  // Hooks

  // States
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(true);

  // States for nested checkboxes (Indeterminate demo)
  const [childStates, setChildStates] = useState([true, false, false]);

  // States for interactive hobby selection group
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(["Coding"]);

  // States for premium luxury selectors
  const [isPremiumChecked1, setIsPremiumChecked1] = useState(false);
  const [isPremiumChecked2, setIsPremiumChecked2] = useState(true);

  // Handlers for hobbies
  const handleHobbyChange = useCallback((hobby: string, checked: boolean) => {
    setSelectedHobbies(prev => (checked ? [...prev, hobby] : prev.filter(h => h !== hobby)));
  }, []);

  // Handlers
  const handleCheckbox1Change = useCallback((checked: boolean) => {
    setIsChecked1(checked);
    toast.info(checked ? "Đã bật tùy chọn thông báo!" : "Đã tắt tùy chọn thông báo!");
  }, []);

  // Indeterminate handlers
  const allChildrenChecked = childStates.every(Boolean);
  const someChildrenChecked = childStates.some(Boolean) && !allChildrenChecked;

  const handleParentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setChildStates(childStates.map(() => checked));
      toast.success(checked ? "Đã chọn toàn bộ quyền hạn!" : "Đã bỏ chọn toàn bộ quyền hạn!");
    },
    [childStates],
  );

  const handleChildChange = useCallback(
    (index: number, checked: boolean) => {
      const nextStates = [...childStates];
      nextStates[index] = checked;
      setChildStates(nextStates);
    },
    [childStates],
  );

  // Constants & Memos
  const testCases: TestCase[] = [
    // --- Nhóm: Cơ bản
    {
      id: "cb-basic-unchecked",
      category: "Cơ Bản & Trạng Thái",
      title: "Checkbox Cơ bản (Chưa chọn)",
      desc: "Trạng thái tĩnh mặc định chưa được click chọn.",
      propsUsed: 'label="Đồng ý với điều khoản"',
      element: (
        <Checkbox
          id="cb-un"
          label="Đồng ý với điều khoản"
          checked={isChecked3}
          onChange={e => setIsChecked3(e.target.checked)}
        />
      ),
    },
    {
      id: "cb-basic-checked",
      category: "Cơ Bản & Trạng Thái",
      title: "Checkbox Cơ bản (Đã chọn)",
      desc: "Trạng thái tĩnh mặc định đã được tick chọn sẵn khi render.",
      propsUsed:
        'label="Nhớ mật khẩu đăng nhập" checked={isChecked4} onChange={(e) => setIsChecked4(e.target.checked)}',
      element: (
        <Checkbox
          id="cb-ch"
          label="Nhớ mật khẩu đăng nhập"
          checked={isChecked4}
          onChange={e => setIsChecked4(e.target.checked)}
        />
      ),
    },
    {
      id: "cb-interactive",
      category: "Cơ Bản & Trạng Thái",
      title: "Checkbox Tương Tác & Giao Tiếp (Toast)",
      desc: "Click chọn checkbox sẽ kích hoạt hàm onChange và bắn ra thông báo toast tương ứng.",
      propsUsed: 'label="Bật thông báo hệ thống" checked={isChecked1} onChange={...}',
      element: (
        <Checkbox
          id="cb-inter"
          label="Bật thông báo hệ thống"
          checked={isChecked1}
          onChange={e => handleCheckbox1Change(e.target.checked)}
        />
      ),
    },

    // --- Nhóm: Nhãn & Mô tả
    {
      id: "cb-label-desc",
      category: "Nhãn & Mô Tả Chi Tiết",
      title: "Checkbox kèm Label và Mô tả phụ",
      desc: "Hỗ trợ layout hiển thị văn bản mô tả chi tiết giải thích cho nhãn hộp chọn (thường dùng trong cài đặt quyền riêng tư, bảo mật).",
      propsUsed: 'label={<div className="...">...</div>}',
      element: (
        <div className="max-w-[320px]">
          <Checkbox
            id="cb-desc"
            label={
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-[#1F2933]">Chế độ Nhà phát triển</span>
                <span className="text-[11px] leading-relaxed font-normal text-[#1F2933]/50">
                  Kích hoạt các tính năng thử nghiệm và xem log gỡ lỗi trực tiếp trên Console.
                </span>
              </div>
            }
          />
        </div>
      ),
    },

    // --- Nhóm: Trạng Thái Lỗi & Khóa
    {
      id: "cb-error",
      category: "Trạng Thái Lỗi & Khóa",
      title: "Checkbox Trạng thái Báo Lỗi (Validation Error)",
      desc: "Viền của ô chọn sẽ chuyển sang màu đỏ và in thông điệp lỗi validation chi tiết màu đỏ phía bên dưới.",
      propsUsed: 'label="..." error="Bạn phải đồng ý với chính sách bảo mật trước khi tiếp tục"',
      element: (
        <Checkbox
          id="cb-err"
          label="Tôi đồng ý với Chính sách Bảo mật"
          error="Bạn phải đồng ý với chính sách bảo mật trước khi tiếp tục"
        />
      ),
    },
    {
      id: "cb-disabled-unchecked",
      category: "Trạng Thái Lỗi & Khóa",
      title: "Checkbox Vô Hiệu Hóa (Chưa chọn)",
      desc: "Ô chọn bị khóa tương tác, làm mờ đi 60% và đổi con trỏ chuột cấm click.",
      propsUsed: 'disabled label="Tự động sao lưu dữ liệu"',
      element: <Checkbox id="cb-dis-un" disabled label="Tự động sao lưu dữ liệu" />,
    },
    {
      id: "cb-disabled-checked",
      category: "Trạng Thái Lỗi & Khóa",
      title: "Checkbox Vô Hiệu Hóa (Đã chọn)",
      desc: "Ô chọn bị khóa tương tác nhưng ở trạng thái đang được chọn sẵn (thường biểu thị quyền hạn bắt buộc).",
      propsUsed: 'disabled checked label="Quyền đọc cơ bản (Mặc định)"',
      element: <Checkbox id="cb-dis-ch" disabled checked label="Quyền đọc cơ bản (Mặc định)" />,
    },

    // --- Nhóm: Trạng thái lửng lơ (Indeterminate)
    {
      id: "cb-indeterminate-demo",
      category: "Trạng Thái Lửng Lơ (Indeterminate)",
      title: "Quy trình Chọn Nhóm (Parent-Child List)",
      desc: "Nhấn ô 'Chọn tất cả' để chọn/bỏ chọn toàn bộ. Nhấn lẻ các ô con bên dưới sẽ chuyển trạng thái ô cha thành lửng lơ (Indeterminate - gạch ngang ở giữa).",
      propsUsed: "indeterminate={someChildrenChecked} checked={allChildrenChecked} onChange={...}",
      element: (
        <div className="flex w-full max-w-[280px] flex-col gap-3 rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4">
          <Checkbox
            id="cb-parent"
            label={<span className="font-bold text-[#1F2933]">Quản lý Quyền Hạn</span>}
            checked={allChildrenChecked}
            indeterminate={someChildrenChecked}
            onChange={handleParentChange}
          />
          <div className="space-y-2 border-t border-[#BB9B49]/15 pt-2.5 pl-6">
            <Checkbox
              id="cb-child-1"
              label="Quyền xem dữ liệu"
              checked={childStates[0]}
              onChange={e => handleChildChange(0, e.target.checked)}
            />
            <Checkbox
              id="cb-child-2"
              label="Quyền ghi dữ liệu"
              checked={childStates[1]}
              onChange={e => handleChildChange(1, e.target.checked)}
            />
            <Checkbox
              id="cb-child-3"
              label="Quyền xóa dữ liệu"
              checked={childStates[2]}
              onChange={e => handleChildChange(2, e.target.checked)}
            />
          </div>
        </div>
      ),
    },

    // --- Nhóm: Tùy biến
    {
      id: "cb-custom-scale",
      category: "Tùy Biến (Customization)",
      title: "Ghi đè Kích thước bằng Class",
      desc: "Tự do co giãn tỷ lệ của Checkbox bằng cách sử dụng các class Tailwind transform scale hoặc custom class.",
      propsUsed: 'className="scale-125 origin-left"',
      element: <Checkbox id="cb-scale" label="Checkbox phóng to 125%" className="origin-left scale-125" />,
    },
    {
      id: "cb-unstyled",
      category: "Tùy Biến (Customization)",
      title: "Chế độ Unstyled (Tự viết style)",
      desc: "Ẩn hoàn toàn giao diện mặc định, giữ lại thẻ input checkbox ẩn để nhà phát triển tự vẽ giao diện tùy ý bên ngoài.",
      propsUsed: 'unstyled label="..." className="..."',
      element: (
        <Checkbox
          id="cb-unstyle"
          unstyled
          label={
            <span className="text-[#BB9B49] italic transition-colors hover:text-[#1F2933]">
              Custom Checkbox dạng text link nhấp nháy
            </span>
          }
          className="text-[#BB9B49] peer-checked:underline"
        />
      ),
    },
    {
      id: "cb-required",
      category: "Cơ Bản & Trạng Thái",
      title: "Hộp chọn Bắt Buộc (Required Field)",
      desc: "Hộp chọn bắt buộc người dùng tích chọn trước khi gửi form, có thêm dấu sao màu đỏ báo hiệu.",
      propsUsed: 'required label="..."',
      element: (
        <Checkbox
          id="cb-req-test"
          required
          label={
            <span>
              Tôi đồng ý với chính sách sử dụng <span className="text-rose-500">*</span>
            </span>
          }
        />
      ),
    },
    {
      id: "cb-hobbies-group",
      category: "Cơ Bản & Trạng Thái",
      title: "Nhóm Hộp Chọn (Checkbox Group)",
      desc: "Tick chọn nhiều mục sở thích cá nhân khác nhau, cập nhật thời gian thực vào React state mảng và hiển thị kết quả.",
      propsUsed: "checked={selectedHobbies.includes(hobby)} onChange={...}",
      element: (
        <div className="flex w-full max-w-[280px] flex-col gap-3 rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4">
          <span className="text-xs font-bold text-[#1F2933]/60">Chọn sở thích của bạn:</span>
          <div className="space-y-2">
            {["Coding", "Design", "Music"].map(hobby => (
              <Checkbox
                key={hobby}
                id={`cb-hobby-${hobby}`}
                label={hobby}
                checked={selectedHobbies.includes(hobby)}
                onChange={e => handleHobbyChange(hobby, e.target.checked)}
              />
            ))}
          </div>
          <div className="border-t border-[#BB9B49]/15 pt-2.5">
            <span className="text-[10px] text-[#1F2933]/50">Đang chọn: </span>
            <span className="font-mono text-[10px] font-bold text-[#BB9B49]">
              {selectedHobbies.length > 0 ? selectedHobbies.join(", ") : "(trống)"}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "cb-premium-luxury",
      category: "Thiết Kế Cao Cấp (Premium)",
      title: "Hộp Chọn Thẻ Premium (Luxury Gradient & Radius)",
      desc: "Hộp chọn tùy biến sâu bằng cách kết hợp background gradient chuyển sắc, hiệu ứng phát sáng mờ ảo, viền bo góc tròn đầy đặn (rounded-full) mang lại cảm giác cực kỳ chuyên nghiệp và sang trọng.",
      propsUsed: 'className="[&_.common-checkbox-indicator]:rounded-full ..."',
      element: (
        <div className="flex w-full max-w-[340px] flex-col gap-4">
          {/* Option 1: Enterprise */}
          <div
            onClick={() => setIsPremiumChecked1(prev => !prev)}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300 select-none",
              isPremiumChecked1
                ? "border-[#BB9B49]/50 bg-gradient-to-br from-[#EBD197]/20 via-[#F7F4ED] to-[#F7F4ED] shadow-lg shadow-[#BB9B49]/10"
                : "border-[#BB9B49]/20 bg-[#F7F4ED] hover:border-[#BB9B49]/40 hover:bg-[#EBD197]/10",
            )}
          >
            {isPremiumChecked1 && (
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#EBD197]/20 blur-xl"></div>
            )}
            <Checkbox
              id="cb-premium-1"
              checked={isPremiumChecked1}
              onChange={e => {
                e.stopPropagation();
                setIsPremiumChecked1(e.target.checked);
              }}
              indicatorClassName="rounded-full border-[#BB9B49]/40 peer-checked:border-transparent peer-checked:bg-gradient-to-r peer-checked:from-[#EBD197] peer-checked:to-[#BB9B49]"
              label={
                <div className="ml-1 flex flex-col gap-0.5">
                  <span
                    className={cn(
                      "text-xs font-bold tracking-wider uppercase transition-colors",
                      isPremiumChecked1 ? "text-[#BB9B49]" : "text-[#1F2933]/60",
                    )}
                  >
                    Gói Enterprise
                  </span>
                  <span className="text-[10px] leading-relaxed font-normal text-[#1F2933]/50">
                    Toàn bộ tính năng cao cấp nhất, CDN toàn cầu & Hỗ trợ kỹ thuật 24/7 chuyên biệt.
                  </span>
                </div>
              }
            />
          </div>

          {/* Option 2: Pro */}
          <div
            onClick={() => setIsPremiumChecked2(prev => !prev)}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300 select-none",
              isPremiumChecked2
                ? "border-[#BB9B49]/50 bg-gradient-to-br from-[#EBD197]/20 via-[#F7F4ED] to-[#F7F4ED] shadow-lg shadow-[#BB9B49]/10"
                : "border-[#BB9B49]/20 bg-[#F7F4ED] hover:border-[#BB9B49]/40 hover:bg-[#EBD197]/10",
            )}
          >
            {isPremiumChecked2 && (
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#EBD197]/20 blur-xl"></div>
            )}
            <Checkbox
              id="cb-premium-2"
              checked={isPremiumChecked2}
              onChange={e => {
                e.stopPropagation();
                setIsPremiumChecked2(e.target.checked);
              }}
              indicatorClassName="rounded-lg border-[#BB9B49]/40 peer-checked:border-transparent peer-checked:bg-gradient-to-r peer-checked:from-[#EBD197] peer-checked:to-[#BB9B49]"
              label={
                <div className="ml-1 flex flex-col gap-0.5">
                  <span
                    className={cn(
                      "text-xs font-bold tracking-wider uppercase transition-colors",
                      isPremiumChecked2 ? "text-[#BB9B49]" : "text-[#1F2933]/60",
                    )}
                  >
                    Gói Developer Pro
                  </span>
                  <span className="text-[10px] leading-relaxed font-normal text-[#1F2933]/50">
                    Không giới hạn dự án cá nhân, đầy đủ API & Phân tích báo cáo chuyên sâu.
                  </span>
                </div>
              }
            />
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
          <span>🧩</span> Bảng Kiểm Thử: Component Checkbox
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử các trạng thái hoạt động, trạng thái lửng lơ (Indeterminate) và hành vi phản hồi của Checkbox
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
