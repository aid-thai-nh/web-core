"use client";

import React, { useState, useCallback } from "react";
import { CreditCard, Wallet, Truck, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

import { RadioGroup, RadioItem } from "@/components/common/Radio";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function RadiosPlayground() {
  // States
  const [payment, setPayment] = useState("cod");
  const [shipping, setShipping] = useState("standard");
  const [gender, setGender] = useState("");
  const [plan, setPlan] = useState("pro");
  const [surveyVal, setSurveyVal] = useState("");

  // Handlers
  const handlePaymentChange = useCallback((val: string) => {
    setPayment(val);
    toast.success(`Đã chọn phương thức thanh toán: ${val.toUpperCase()}`);
  }, []);

  const handleShippingChange = useCallback((val: string) => {
    setShipping(val);
    toast.success(`Đã chọn hình thức giao hàng: ${val}`);
  }, []);

  // Options
  const paymentOptions = [
    {
      value: "cod",
      label: (
        <span className="flex items-center gap-2">
          <Truck size={16} className="text-[#BB9B49]" /> Giao hàng nhận tiền (COD)
        </span>
      ),
      description: "Thanh toán bằng tiền mặt trực tiếp khi nhận hàng từ shipper.",
    },
    {
      value: "viettelpay",
      label: (
        <span className="flex items-center gap-2">
          <Wallet size={16} className="text-[#BB9B49]" /> Ví điện tử Viettel Money
        </span>
      ),
      description: "Quét mã QR thanh toán nhanh qua ứng dụng Viettel Money.",
    },
    {
      value: "vnpay",
      label: (
        <span className="flex items-center gap-2">
          <CreditCard size={16} className="text-[#BB9B49]" /> Cổng thanh toán VNPay
        </span>
      ),
      description: "Thanh toán qua tài khoản ngân hàng nội địa hoặc thẻ quốc tế.",
    },
  ];

  const shippingOptions = [
    {
      value: "standard",
      label: "Giao hàng tiêu chuẩn (3-5 ngày)",
      description: "Miễn phí vận chuyển cho đơn hàng từ 500k.",
    },
    {
      value: "fast",
      label: "Giao hàng nhanh (1-2 ngày)",
      description: "Phụ thu 30k, cam kết thời gian giao hàng toàn quốc.",
    },
    {
      value: "express",
      label: "Hỏa tốc 2H (Chỉ áp dụng nội thành)",
      description: "Nhận hàng ngay trong 2 giờ kể từ khi duyệt đơn.",
      disabled: true, // Express currently disabled/out of stock
    },
  ];

  const genderOptions = [
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
    { value: "other", label: "Khác" },
  ];

  const planOptions = [
    { value: "free", label: "Bản Miễn Phí (Free)", description: "Các tính năng cơ bản, giới hạn dung lượng." },
    { value: "pro", label: "Bản Chuyên Nghiệp (Pro)", description: "Không giới hạn tính năng và băng thông rộng." },
    { value: "enterprise", label: "Doanh Nghiệp (Enterprise)", description: "Bảo mật cấp cao, support 24/7." },
  ];

  const testCases: TestCase[] = [
    // --- Layout Orientations
    {
      id: "radio-orient-vert",
      category: "Hướng Hiển Thị (Orientation)",
      title: "Radio Group Chiều Dọc (Vertical - Mặc định)",
      desc: "Phù hợp hiển thị các lựa chọn dài kèm mô tả chi tiết, xếp chồng đều đặn.",
      propsUsed: 'orientation="vertical"',
      element: (
        <RadioGroup
          name="gender-vertical"
          label="Giới Tính"
          options={genderOptions}
          value={gender}
          onChange={setGender}
        />
      ),
    },
    {
      id: "radio-orient-horiz",
      category: "Hướng Hiển Thị (Orientation)",
      title: "Radio Group Chiều Ngang (Horizontal)",
      desc: "Xếp ngang các lựa chọn ngắn gọn để tiết kiệm không gian, tự động xuống dòng linh hoạt.",
      propsUsed: 'orientation="horizontal"',
      element: (
        <RadioGroup
          name="gender-horizontal"
          label="Chọn nhanh giới tính"
          orientation="horizontal"
          options={genderOptions}
          value={gender}
          onChange={setGender}
        />
      ),
    },

    // --- State Examples
    {
      id: "radio-state-disabled-opt",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Có tùy chọn bị vô hiệu hóa (Disabled option)",
      desc: "Khóa từng lựa chọn cụ thể không cho tương tác, các lựa chọn khác hoạt động bình thường.",
      propsUsed: 'options={[{value: "express", disabled: true}, ...]}',
      element: (
        <RadioGroup
          name="shipping-method"
          label="Hình Thức Vận Chuyển"
          options={shippingOptions}
          value={shipping}
          onChange={handleShippingChange}
        />
      ),
    },
    {
      id: "radio-state-disabled-group",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Vô hiệu hóa toàn bộ Group (Disabled Group)",
      desc: "Khóa toàn bộ nhóm radio. Làm mờ đồng loạt và chuyển con trỏ chuột sang trạng thái cấm.",
      propsUsed: "disabled",
      element: (
        <RadioGroup
          name="billing-plan-disabled"
          label="Gói Dịch Vụ (Đã khóa đăng ký)"
          disabled
          options={planOptions}
          value={plan}
          onChange={setPlan}
        />
      ),
    },
    {
      id: "radio-state-error",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Trạng thái báo lỗi Validation (Error State)",
      desc: "Hiển thị thông báo lỗi nổi bật màu đỏ bên dưới nếu người dùng chưa chọn hoặc chọn sai.",
      propsUsed: 'error="Vui lòng chọn hình thức thanh toán để tiếp tục"',
      element: (
        <RadioGroup
          name="payment-validation"
          label="Phương thức thanh toán bắt buộc"
          error="Vui lòng chọn một phương thức thanh toán hợp lệ"
          options={paymentOptions}
          value=""
          onChange={() => {}}
        />
      ),
    },

    // --- Real-world Use Cases
    {
      id: "radio-usecase-payment",
      category: "Trường Hợp Thực Tế",
      title: "Chọn Phương Thức Thanh Toán (Checkout Form)",
      desc: "Tích hợp icon và mô tả phụ trực quan cho từng lựa chọn thanh toán, hỗ trợ Toast phản hồi thời gian thực.",
      propsUsed: 'name="payment-method" options={paymentOptions} onChange={...}',
      element: (
        <RadioGroup
          name="payment-method"
          label="Chọn Phương Thức Thanh Toán"
          options={paymentOptions}
          value={payment}
          onChange={handlePaymentChange}
        />
      ),
    },
    {
      id: "radio-usecase-item-standalone",
      category: "Trường Hợp Thực Tế",
      title: "Sử dụng RadioItem độc lập (Standalone)",
      desc: "Tự tạo layout tùy biến bằng cách gọi trực tiếp component con `RadioItem` thay vì dùng qua `RadioGroup` wrapper.",
      propsUsed: "<RadioItem checked={...} onChange={...} />",
      element: (
        <div className="flex w-full flex-col gap-3 rounded-xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-4">
          <span className="text-xs font-bold text-[#1F2933]">Khảo sát ý kiến</span>
          <RadioItem
            name="standalone-survey"
            value="yes"
            label="Tôi đồng ý với chính sách dịch vụ"
            description="Chấp thuận tất cả các điều khoản bảo mật thông tin."
            checked={surveyVal === "yes"}
            onChange={setSurveyVal}
          />
          <RadioItem
            name="standalone-survey"
            value="no"
            label="Tôi muốn xem xét kỹ hơn"
            description="Tìm hiểu thêm về chính sách quyền riêng tư."
            checked={surveyVal === "no"}
            onChange={setSurveyVal}
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
          <span>🔘</span> Bảng Kiểm Thử: Radio Group
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử toàn bộ cấu trúc hiển thị, kích hoạt trạng thái, cách bố trí dọc/ngang và xử lý sự kiện của
          Radio Group dùng chung.
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

                    <div className="flex w-full max-w-[340px] min-w-[280px] shrink-0 items-center justify-start md:justify-end">
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
