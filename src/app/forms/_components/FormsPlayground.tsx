"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  MapPin,
  CreditCard,
  Receipt,
  FileText,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  User,
  Phone,
  Mail,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/common/Input";
import { Checkbox } from "@/components/common/Checkbox";
import { Select } from "@/components/common/Select";
import { RadioGroup } from "@/components/common/Radio";
import { Switch } from "@/components/common/Switch";
import { Textarea } from "@/components/common/Textarea";

export function FormsPlayground() {
  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderNotes, setOrderNotes] = useState("");
  const [requestInvoice, setRequestInvoice] = useState(false);
  const [invoiceCompanyName, setInvoiceCompanyName] = useState("");
  const [invoiceTaxCode, setInvoiceTaxCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Status States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Constants
  const provinces = [
    { value: "hcm", label: "TP. Hồ Chí Minh" },
    { value: "hn", label: "Hà Nội" },
    { value: "dn", label: "Đà Nẵng" },
    { value: "ct", label: "Cần Thơ" },
    { value: "hp", label: "Hải Phòng" },
  ];

  const districtsMap: Record<string, { value: string; label: string }[]> = {
    hcm: [
      { value: "q1", label: "Quận 1" },
      { value: "q3", label: "Quận 3" },
      { value: "q7", label: "Quận 7" },
      { value: "tb", label: "Quận Tân Bình" },
    ],
    hn: [
      { value: "hk", label: "Quận Hoàn Kiếm" },
      { value: "cg", label: "Quận Cầu Giấy" },
      { value: "tx", label: "Quận Thanh Xuân" },
      { value: "hbt", label: "Quận Hai Bà Trưng" },
    ],
    dn: [
      { value: "hc", label: "Quận Hải Châu" },
      { value: "tk", label: "Quận Thanh Khê" },
      { value: "st", label: "Quận Sơn Trà" },
    ],
  };

  const paymentOptions = [
    {
      value: "cod",
      label: "Thanh toán khi nhận hàng (COD)",
      description: "Thanh toán tiền mặt cho nhân viên giao hàng.",
    },
    {
      value: "vnpay",
      label: "Cổng thanh toán VNPay",
      description: "Quét mã QR từ ứng dụng Ngân hàng di động.",
    },
    {
      value: "momo",
      label: "Ví điện tử MoMo",
      description: "Ví điện tử liên kết thanh toán tức thì.",
    },
  ];

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = "Họ và tên không được để trống";

    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (!phone) {
      newErrors.phone = "Số điện thoại không được để trống";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Số điện thoại không đúng định dạng (Ví dụ: 0987654321)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email không được để trống";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email không đúng định dạng (Ví dụ: customer@example.com)";
    }

    if (!province) newErrors.province = "Vui lòng chọn Tỉnh/Thành phố";
    if (province && districtsMap[province] && !district) {
      newErrors.district = "Vui lòng chọn Quận/Huyện";
    }
    if (!addressDetail.trim()) newErrors.addressDetail = "Địa chỉ chi tiết không được để trống";

    if (requestInvoice) {
      if (!invoiceCompanyName.trim()) newErrors.invoiceCompanyName = "Tên công ty không được để trống";
      if (!invoiceTaxCode.trim()) newErrors.invoiceTaxCode = "Mã số thuế không được để trống";
    }

    if (!agreeTerms) newErrors.agreeTerms = "Bạn phải đồng ý với điều khoản mua hàng";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Vui lòng kiểm tra lại thông tin biểu mẫu!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Đặt hàng thành công!");
    }, 2000);
  };

  const resetForm = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setProvince("");
    setDistrict("");
    setAddressDetail("");
    setPaymentMethod("cod");
    setOrderNotes("");
    setRequestInvoice(false);
    setInvoiceCompanyName("");
    setInvoiceTaxCode("");
    setAgreeTerms(false);
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center text-[#1F2933]">
        <div className="bg-champagne-metallic mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-[#BB9B49]/40 text-[#BB9B49] shadow-md">
          <CheckCircle2 size={44} strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-4xl">Đơn Hàng Đã Ghi Nhận!</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#1F2933]/70">
          Cảm ơn <strong>{fullName}</strong> đã đặt hàng. Đơn hàng của bạn đang được hệ thống xử lý và sẽ liên hệ giao
          hàng tới số <strong>{phone}</strong> trong vòng 3-5 ngày làm việc.
        </p>

        <div className="mt-8 space-y-4 rounded-2xl border border-[#BB9B49]/30 bg-[#F7F4ED] p-6 text-left">
          <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/50 uppercase">Chi tiết đơn hàng</h3>
          <div className="grid grid-cols-2 gap-y-3 text-xs">
            <span className="text-[#1F2933]/60">Khách hàng:</span>
            <span className="text-right font-bold">{fullName}</span>

            <span className="text-[#1F2933]/60">Địa chỉ:</span>
            <span className="truncate text-right font-bold">
              {addressDetail}, {district && districtsMap[province]?.find(d => d.value === district)?.label},{" "}
              {provinces.find(p => p.value === province)?.label}
            </span>

            <span className="text-[#1F2933]/60">Thanh toán:</span>
            <span className="text-right font-bold text-[#BB9B49] uppercase">{paymentMethod}</span>

            {requestInvoice && (
              <>
                <span className="text-[#1F2933]/60">Xuất hóa đơn:</span>
                <span className="text-right font-bold">
                  {invoiceCompanyName} (MST: {invoiceTaxCode})
                </span>
              </>
            )}

            {orderNotes && (
              <>
                <span className="text-[#1F2933]/60">Ghi chú:</span>
                <span className="text-right font-bold text-[#1F2933]/75 italic">"{orderNotes}"</span>
              </>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={resetForm}
            className="flex items-center gap-1.5 rounded-xl bg-[#1F2933] px-6 py-3 text-sm font-bold text-[#F7F4ED] shadow-sm transition-transform hover:bg-[#1F2933]/90 active:scale-95"
          >
            Quay lại mua sắm <ChevronRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 text-[#1F2933]">
      {/* Intro Header */}
      <div className="mb-10 border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2.5 text-3xl font-extrabold tracking-tight">
          <span>🛒</span> Form Phức Hợp: Xác Nhận Đơn Hàng (Checkout)
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#1F2933]/70">
          Kịch bản kết hợp toàn bộ tầng Form nâng cao gồm ô nhập (Input), dropdown (Select), tùy chọn thanh toán
          (Radio), bật tắt hóa đơn (Switch), hộp kiểm thỏa thuận (Checkbox) và ghi chú dài (Textarea).
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Left Column: Form Fields */}
        <div className="space-y-8 lg:col-span-7">
          {/* Section 1: Customer Info */}
          <section className="space-y-4 rounded-2xl border border-[#BB9B49]/20 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 border-b border-[#BB9B49]/10 pb-3 text-base font-bold text-[#1F2933]">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#BB9B49]/10 text-xs font-black text-[#BB9B49]">
                1
              </span>
              Thông tin liên hệ
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                label="Họ và Tên"
                placeholder="Nguyễn Văn A"
                leftIcon={<User size={15} />}
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                error={errors.fullName}
              />
              <Input
                label="Số Điện Thoại"
                placeholder="0987654321"
                leftIcon={<Phone size={15} />}
                value={phone}
                onChange={e => setPhone(e.target.value)}
                error={errors.phone}
              />
            </div>

            <Input
              label="Địa chỉ Email"
              placeholder="customer@domain.com"
              leftIcon={<Mail size={15} />}
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={errors.email}
            />
          </section>

          {/* Section 2: Shipping Info */}
          <section className="space-y-4 rounded-2xl border border-[#BB9B49]/20 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 border-b border-[#BB9B49]/10 pb-3 text-base font-bold text-[#1F2933]">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#BB9B49]/10 text-xs font-black text-[#BB9B49]">
                2
              </span>
              Địa chỉ nhận hàng
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Select
                label="Tỉnh / Thành Phố"
                placeholder="-- Chọn tỉnh thành --"
                leftIcon={<MapPin size={14} />}
                options={provinces}
                value={province}
                onChange={e => {
                  setProvince(e.target.value);
                  setDistrict("");
                }}
                error={errors.province}
              />

              <Select
                label="Quận / Huyện"
                placeholder="-- Chọn quận huyện --"
                leftIcon={<MapPin size={14} />}
                options={province ? districtsMap[province] || [] : []}
                disabled={!province}
                value={district}
                onChange={e => setDistrict(e.target.value)}
                error={errors.district}
              />
            </div>

            <Input
              label="Địa chỉ chi tiết (Số nhà, Tên đường)"
              placeholder="Ví dụ: 123 Đường Nguyễn Trãi..."
              value={addressDetail}
              onChange={e => setAddressDetail(e.target.value)}
              error={errors.addressDetail}
            />

            <Textarea
              label="Ghi chú thêm cho người giao hàng"
              placeholder="Giao hàng giờ hành chính, gọi trước khi giao 15 phút..."
              resize="vertical"
              rows={3}
              value={orderNotes}
              onChange={e => setOrderNotes(e.target.value)}
            />
          </section>

          {/* Section 3: Invoicing / Settings */}
          <section className="space-y-4 rounded-2xl border border-[#BB9B49]/20 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 border-b border-[#BB9B49]/10 pb-3 text-base font-bold text-[#1F2933]">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#BB9B49]/10 text-xs font-black text-[#BB9B49]">
                3
              </span>
              Yêu cầu xuất hoá đơn đỏ
            </h3>

            <div className="flex items-center justify-between rounded-xl border border-[#BB9B49]/15 bg-[#F7F4ED]/30 p-3">
              <div className="flex items-center gap-2.5">
                <Receipt size={18} className="text-[#BB9B49]" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold">Yêu cầu hóa đơn VAT</span>
                  <span className="text-[10px] text-[#1F2933]/60">Chỉ xuất hóa đơn điện tử GTGT</span>
                </div>
              </div>
              <Switch checked={requestInvoice} onChange={setRequestInvoice} />
            </div>

            {requestInvoice && (
              <div className="animate-in slide-in-from-top mt-2 space-y-4 border-l-2 border-[#BB9B49]/30 pl-4 duration-200">
                <Input
                  label="Tên Công Ty"
                  placeholder="Công ty Cổ phần Công nghệ Toàn Cầu"
                  value={invoiceCompanyName}
                  onChange={e => setInvoiceCompanyName(e.target.value)}
                  error={errors.invoiceCompanyName}
                />
                <Input
                  label="Mã Số Thuế (MST)"
                  placeholder="0101234567"
                  value={invoiceTaxCode}
                  onChange={e => setInvoiceTaxCode(e.target.value)}
                  error={errors.invoiceTaxCode}
                />
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Checkout Details / Payment */}
        <div className="space-y-6 lg:col-span-5">
          {/* Section 4: Payment Methods */}
          <section className="space-y-4 rounded-2xl border border-[#BB9B49]/20 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 border-b border-[#BB9B49]/10 pb-3 text-base font-bold text-[#1F2933]">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#BB9B49]/10 text-xs font-black text-[#BB9B49]">
                4
              </span>
              Phương thức thanh toán
            </h3>

            <RadioGroup name="payment" options={paymentOptions} value={paymentMethod} onChange={setPaymentMethod} />
          </section>

          {/* Section 5: Order Summary */}
          <section className="space-y-6 rounded-2xl border border-[#BB9B49]/35 bg-[#EBD197]/10 p-6">
            <div className="flex items-center gap-2 border-b border-[#BB9B49]/25 pb-3">
              <ShoppingCart size={18} className="text-[#BB9B49]" />
              <h3 className="text-base font-extrabold text-[#1F2933]">Tóm tắt đơn hàng</h3>
            </div>

            <div className="space-y-3 border-b border-[#BB9B49]/15 pb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-[#1F2933]/70">Khóa Học Core React Enterprise × 1</span>
                <span className="font-bold">1,200,000 đ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1F2933]/70">Module logic TanStack Query × 1</span>
                <span className="font-bold">450,000 đ</span>
              </div>
              <div className="flex justify-between font-medium text-rose-500">
                <span>Ưu đãi (Giảm giá 10%)</span>
                <span>-165,000 đ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1F2933]/70">Phí vận chuyển</span>
                <span className="font-bold text-emerald-600">Miễn phí</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold">Tổng thanh toán:</span>
              <span className="text-2xl font-black text-[#BB9B49]">1,485,000 đ</span>
            </div>

            <div className="space-y-4 pt-2">
              <Checkbox
                id="agree-checkbox"
                label={
                  <span className="text-xs">
                    Tôi đồng ý với các{" "}
                    <a href="#" className="font-bold text-[#BB9B49] hover:underline" onClick={e => e.preventDefault()}>
                      điều khoản chính sách
                    </a>{" "}
                    dịch vụ và mua hàng.
                  </span>
                }
                checked={agreeTerms}
                onChange={e => setAgreeTerms(e.target.checked)}
                error={errors.agreeTerms}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F2933] py-3.5 text-sm font-bold text-[#F7F4ED] shadow-md transition-transform hover:bg-[#1F2933]/90 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Đang xử lý...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} className="text-[#EBD197]" /> Xác nhận đặt hàng
                  </>
                )}
              </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}
