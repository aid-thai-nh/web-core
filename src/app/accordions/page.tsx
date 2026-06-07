"use client";

import React, { useState } from "react";

import { KeyRound, Mail, Globe, CheckCircle2 } from "lucide-react";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { Checkbox } from "@/components/common/Checkbox";
import { Input } from "@/components/common/Input";

export default function AccordionsPage() {
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [webhookLogs, setWebhookLogs] = useState(false);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Page Header */}
      <section className="space-y-4 border-b border-[#BB9B49]/30 pb-8">
        <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-3 py-1 text-xs font-medium text-[#BB9B49] ring-1 ring-[#BB9B49]/20">
          Shadcn Component
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl">Accordion (Thanh thu gọn)</h1>
        <p className="max-w-3xl text-sm text-[#1F2933]/70">
          Component cho phép thu gọn/mở rộng các vùng nội dung để tiết kiệm diện tích màn hình. Được xây dựng trên nền
          tảng Radix UI, đảm bảo tuân thủ tuyệt đối chuẩn tiếp cận ARIA và điều hướng bằng bàn phím.
        </p>
      </section>

      {/* --- BASIC UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">1. Basic UI</h2>
          <p className="text-xs text-[#1F2933]/60">
            Các câu hỏi thường gặp (Q&A) hiển thị dưới các biến thể viền khác nhau.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Default style */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">Giao diện Phẳng (Default)</h3>
            <Accordion type="single" collapsible defaultValue="item-1" variant="default">
              <AccordionItem value="item-1">
                <AccordionTrigger>Hệ thống có tương thích với Docker không?</AccordionTrigger>
                <AccordionContent>
                  Có, WebCore cung cấp sẵn tệp tin `Dockerfile` và `docker-compose.yml` để bạn triển khai tức thì.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Làm cách nào để tùy biến Theme?</AccordionTrigger>
                <AccordionContent>
                  Bạn có thể cập nhật các biến CSS HSL trong tệp tin `src/app/globals.css` để cấu hình lại bộ màu.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bordered style */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">
              Giao diện Đóng khung (Bordered)
            </h3>
            <Accordion type="single" collapsible variant="bordered">
              <AccordionItem value="item-1">
                <AccordionTrigger>Bảng giá sử dụng API?</AccordionTrigger>
                <AccordionContent>
                  Chúng tôi miễn phí 100,000 requests mỗi tháng. Các request tiếp theo có giá $0.001 mỗi lượt.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Tôi có được hỗ trợ 24/7 không?</AccordionTrigger>
                <AccordionContent>
                  Có, gói Enterprise đi kèm dịch vụ hỗ trợ kỹ thuật qua Slack và điện thoại 24/7.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* --- ADVANCED & LUXURY UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">2. Advanced & Luxury UI</h2>
          <p className="text-xs text-[#1F2933]/60">
            Tổ chức biểu mẫu cấu hình hệ thống chuyên nghiệp bằng Accordion Item độc lập (Separated).
          </p>
        </div>

        {/* Separated Accordion form container */}
        <div className="mx-auto max-w-4xl">
          <Accordion type="multiple" variant="separated">
            {/* Panel 1: Domain settings */}
            <AccordionItem value="sec-domain">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-[#BB9B49]/10 p-1.5 text-[#BB9B49]">
                    <Globe size={16} />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-[#1F2933]">1. Cấu hình Tên miền & API</span>
                    <span className="text-[10px] font-normal text-[#1F2933]/60">
                      Trỏ tên miền chính thức và cấu hình gateway API endpoint
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="space-y-4 rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input label="Custom Domain" placeholder="api.company.com" defaultValue="api.globalsafe.vn" />
                    <Input label="API Base URL Path" placeholder="/v1/secure" defaultValue="/v2/core" />
                  </div>
                  <p className="text-[10px] leading-normal text-[#1F2933]/60">
                    * Lưu ý: Hãy đảm bảo bạn đã cấu hình bản ghi CNAME hoặc A trỏ về IP của máy chủ WebCore trước khi
                    lưu.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Panel 2: Email & Webhooks */}
            <AccordionItem value="sec-webhook">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-[#BB9B49]/10 p-1.5 text-[#BB9B49]">
                    <Mail size={16} />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-[#1F2933]">2. Email Webhook & Cảnh báo</span>
                    <span className="text-[10px] font-normal text-[#1F2933]/60">
                      Gửi log hoạt động đến server riêng hoặc nhận thông báo lỗi
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="space-y-4 rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
                  <div className="space-y-3">
                    <Checkbox
                      id="cb-webhook"
                      checked={webhookLogs}
                      onChange={e => setWebhookLogs(e.target.checked)}
                      label={
                        <div className="flex flex-col">
                          <span>Bật gửi Webhook Log tự động</span>
                          <span className="text-[10px] leading-normal font-normal text-[#1F2933]/60">
                            Gửi dữ liệu thô dạng JSON đến API Endpoint của bạn ngay khi có cảnh báo mới.
                          </span>
                        </div>
                      }
                    />
                  </div>

                  {webhookLogs && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                      <Input label="Webhook Endpoint URL" placeholder="https://yourserver.com/hooks" />
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Panel 3: Security & Passwords */}
            <AccordionItem value="sec-auth">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-[#BB9B49]/10 p-1.5 text-[#BB9B49]">
                    <KeyRound size={16} />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-[#1F2933]">3. Chính sách Xác thực & Bảo mật</span>
                    <span className="text-[10px] font-normal text-[#1F2933]/60">
                      Độ phức tạp mật khẩu và bắt buộc bảo mật 2 lớp (MFA)
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <div className="space-y-4 rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
                  <div className="space-y-4">
                    <Checkbox
                      id="cb-mfa"
                      checked={mfaEnabled}
                      onChange={e => setMfaEnabled(e.target.checked)}
                      label={
                        <div className="flex flex-col">
                          <span>Bắt buộc sử dụng xác thực 2 lớp (MFA)</span>
                          <span className="text-[10px] leading-normal font-normal text-[#1F2933]/60">
                            Tất cả tài khoản quản trị hệ thống bắt buộc phải quét mã OTP Authenticator khi đăng nhập.
                          </span>
                        </div>
                      }
                    />
                    <Checkbox
                      id="cb-complexity"
                      defaultChecked
                      label={
                        <div className="flex flex-col">
                          <span>Yêu cầu mật khẩu phức tạp</span>
                          <span className="text-[10px] leading-normal font-normal text-[#1F2933]/60">
                            Độ dài tối thiểu 12 ký tự, chứa chữ hoa, chữ thường, số và ký tự đặc biệt.
                          </span>
                        </div>
                      }
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Action buttons footer */}
          <div className="mt-6 flex justify-end gap-3 border-t border-[#BB9B49]/30 pt-6">
            <Button variant="outline">Hủy cấu hình</Button>
            <Button variant="primary" leftIcon={<CheckCircle2 size={15} />} className="btn-primary">
              Lưu toàn bộ thay đổi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
