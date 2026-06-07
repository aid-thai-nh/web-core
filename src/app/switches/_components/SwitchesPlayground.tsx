"use client";

import React, { useState } from "react";
import { Sun, Moon, Bell, ShieldCheck, Cpu } from "lucide-react";
import { toast } from "sonner";

import { Switch } from "@/components/common/Switch";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function SwitchesPlayground() {
  // States
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [biometrics, setBiometrics] = useState(false);

  // Handlers
  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
    toast.success(`Đã chuyển sang ${checked ? "Giao diện tối (Dark Mode)" : "Giao diện sáng (Light Mode)"}`);
  };

  const handleNotificationsToggle = (checked: boolean) => {
    setNotifications(checked);
    toast.success(checked ? "Đã bật nhận thông báo hệ thống" : "Đã tắt nhận thông báo hệ thống");
  };

  const testCases: TestCase[] = [
    // --- Sizes
    {
      id: "switch-size-sm",
      category: "Kích Thước (Sizes)",
      title: "Switch Size Small (sm)",
      desc: "Nút gạt siêu nhỏ gọn. Phù hợp sử dụng trong các thanh cài đặt nhỏ gọn, trong bảng dữ liệu hoặc không gian hẹp.",
      propsUsed: 'size="sm"',
      element: <Switch size="sm" label="Tự động cập nhật phần mềm" checked={marketing} onChange={setMarketing} />,
    },
    {
      id: "switch-size-md",
      category: "Kích Thước (Sizes)",
      title: "Switch Size Medium (md - Mặc định)",
      desc: "Kích thước tiêu chuẩn phù hợp với đa số các form cài đặt chung và tùy chọn bật tắt hệ thống.",
      propsUsed: 'size="md"',
      element: <Switch size="md" label="Cho phép chạy dưới nền" checked={biometrics} onChange={setBiometrics} />,
    },
    {
      id: "switch-size-lg",
      category: "Kích Thước (Sizes)",
      title: "Switch Size Large (lg)",
      desc: "Kích thước lớn dễ dàng tương tác. Phù hợp với các màn hình bảng điều khiển cảm ứng hoặc trên các thiết bị di động.",
      propsUsed: 'size="lg"',
      element: <Switch size="lg" label="Bật tính năng bảo vệ nâng cao" checked={autoSave} onChange={setAutoSave} />,
    },

    // --- Configurations & States
    {
      id: "switch-with-desc",
      category: "Tùy Biến Giao Diện (Layout)",
      title: "Switch kèm Nhãn và Mô tả phụ",
      desc: "Hỗ trợ truyền thêm text mô tả chi tiết giải thích cho người dùng hiểu rõ hành động bật/tắt.",
      propsUsed: 'label="..." description="..."',
      element: (
        <Switch
          label="Nhận thông tin khuyến mãi"
          description="Chúng tôi sẽ gửi cho bạn ưu đãi đặc biệt qua email tối đa 1 lần/tuần."
          checked={marketing}
          onChange={setMarketing}
        />
      ),
    },
    {
      id: "switch-state-disabled",
      category: "Trạng Thái",
      title: "Switch ở Trạng thái Vô Hiệu Hóa (Disabled)",
      desc: "Khóa tương tác, làm mờ đi 45% giao diện. Áp dụng cho cả khi Switch đang tắt hoặc đang bật.",
      propsUsed: "disabled",
      element: (
        <div className="flex w-full flex-col gap-4">
          <Switch
            label="Xác thực 2 yếu tố (Bắt buộc)"
            description="Tài khoản admin bắt buộc phải bật xác thực 2 lớp."
            checked={true}
            disabled
          />
          <Switch
            label="Dọn dẹp cache tự động (Bảo trì)"
            description="Tính năng đang được bảo trì định kỳ."
            checked={false}
            disabled
          />
        </div>
      ),
    },

    // --- Real-world Use Cases
    {
      id: "switch-usecase-darkmode",
      category: "Trường Hợp Thực Tế",
      title: "Công tắc Giao Diện Tối/Sáng (Dark Mode Toggle)",
      desc: "Kịch bản điển hình thay đổi Theme ứng dụng. Hiển thị Icon Sun/Moon trực quan phía trước tùy chọn.",
      propsUsed: "checked={darkMode} onChange={handleDarkModeToggle}",
      element: (
        <div className="flex w-full items-center justify-between rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4">
          <div className="flex items-center gap-3">
            {darkMode ? (
              <Moon className="animate-pulse text-[#BB9B49]" size={20} />
            ) : (
              <Sun className="animate-spin-slow text-amber-500" size={20} />
            )}
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Giao diện hệ thống</span>
              <span className="text-xs text-[#1F2933]/55">Kích hoạt giao diện chế độ ban đêm</span>
            </div>
          </div>
          <Switch checked={darkMode} onChange={handleDarkModeToggle} />
        </div>
      ),
    },
    {
      id: "switch-usecase-notification",
      category: "Trường Hợp Thực Tế",
      title: "Cài Đặt Nhận Thông Báo (Settings Form)",
      desc: "Kiểm thử việc tích hợp nhiều Switch trong một nhóm cài đặt chi tiết của tài khoản.",
      propsUsed: "checked={notifications} onChange={handleNotificationsToggle}",
      element: (
        <div className="flex w-full flex-col gap-3 rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4">
          <div className="mb-1 flex items-center gap-2 border-b border-[#BB9B49]/10 pb-2">
            <Bell size={16} className="text-[#BB9B49]" />
            <span className="text-xs font-bold tracking-wider text-[#1F2933]/70 uppercase">Cài đặt thông báo</span>
          </div>
          <Switch
            label="Nhận thông báo đẩy"
            description="Báo động thời gian thực trên màn hình máy tính."
            checked={notifications}
            onChange={handleNotificationsToggle}
          />
          <Switch
            label="Báo cáo tuần qua email"
            description="Gửi tổng hợp giao dịch hàng tuần vào sáng thứ 2."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
      ),
    },
  ];

  const categories = Array.from(new Set(testCases.map(tc => tc.category)));

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>🎚️</span> Bảng Kiểm Thử: Switch (Toggle Button)
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử khả năng bật tắt trạng thái nhanh, xử lý tương thích con trỏ chuột, các kích thước hiển thị và
          phản hồi sự kiện của Switch.
        </p>
      </div>

      {/* Test Cases */}
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
                    <div className="max-w-xl space-y-2">
                      <h4 className="flex items-center gap-2 text-base font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#BB9B49]" />
                        {tc.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#1F2933]/70">{tc.desc}</p>
                      <div className="flex items-center gap-1.5 pt-1 font-mono text-[10px] text-[#BB9B49]">
                        <span className="text-[#1F2933]/50 select-none">Props:</span>
                        <code className="rounded border border-[#BB9B49]/20 bg-[#F7F4ED] px-2 py-0.5">
                          {tc.propsUsed}
                        </code>
                      </div>
                    </div>

                    <div className="flex w-full max-w-[360px] min-w-[280px] shrink-0 items-center justify-start md:justify-end">
                      <div className="w-full">{tc.element}</div>
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
