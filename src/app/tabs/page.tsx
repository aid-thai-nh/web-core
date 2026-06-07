"use client";

import React, { useState } from "react";

import { CreditCard, Key, Bell, Shield, ShieldCheck, MapPin } from "lucide-react";

import { Avatar } from "@/components/common/Avatar";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Checkbox } from "@/components/common/Checkbox";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/common/Table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/common/Tabs";

export default function TabsPage() {
  const [activeSessions, setActiveSessions] = useState([
    { id: 1, location: "Hà Nội, Việt Nam", ip: "192.168.1.100", device: "Chrome trên macOS", current: true },
    { id: 2, location: "Hồ Chí Minh, Việt Nam", ip: "113.23.4.92", device: "Safari trên iPhone", current: false },
  ]);

  const invoices = [
    { id: "INV-01", date: "2026-06-01", amount: "1,500,000 đ", status: "Đã thanh toán" },
    { id: "INV-02", date: "2026-05-01", amount: "1,500,000 đ", status: "Đã thanh toán" },
    { id: "INV-03", date: "2026-04-01", amount: "1,500,000 đ", status: "Đã thanh toán" },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Page Header */}
      <section className="space-y-4 border-b border-[#BB9B49]/30 pb-8">
        <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-3 py-1 text-xs font-medium text-[#BB9B49] ring-1 ring-[#BB9B49]/20">
          Shadcn Component
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl">Tabs (Tab chọn)</h1>
        <p className="max-w-3xl text-sm text-[#1F2933]/70">
          Component phân chia nội dung thành các tab độc lập. Hỗ trợ đồng bộ hóa giao diện và kích thước tự động qua
          React Context, giúp nhà phát triển khai báo các nhóm tab cực kỳ tinh gọn.
        </p>
      </section>

      {/* --- BASIC UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">1. Basic UI</h2>
          <p className="text-xs text-[#1F2933]/60">
            Các biến thể giao diện cơ bản (Line, Pill, Flat) và các kích thước khác nhau.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* Variant Line */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">
              Đường kẻ dưới (Line - Size MD)
            </h3>
            <Tabs defaultValue="t1" variant="line" size="md">
              <TabsList>
                <TabsTrigger value="t1">Tab 1</TabsTrigger>
                <TabsTrigger value="t2">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent
                value="t1"
                className="mt-3 rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 text-xs text-[#1F2933]/70"
              >
                Nội dung tab 1 - Giao diện thanh mảnh và thoáng mắt.
              </TabsContent>
              <TabsContent
                value="t2"
                className="mt-3 rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 text-xs text-[#1F2933]/70"
              >
                Nội dung tab 2 - Thích hợp hiển thị tài liệu dạng phẳng.
              </TabsContent>
            </Tabs>
          </div>

          {/* Variant Pill */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">
              Kén nhộng nổi (Pill - Size SM)
            </h3>
            <Tabs defaultValue="t1" variant="pill" size="sm">
              <TabsList>
                <TabsTrigger value="t1">Hộp thư</TabsTrigger>
                <TabsTrigger value="t2">Spam</TabsTrigger>
              </TabsList>
              <TabsContent
                value="t1"
                className="mt-3 rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 text-xs text-[#1F2933]/70"
              >
                Hiển thị danh sách thư đến chính của tài khoản của bạn.
              </TabsContent>
              <TabsContent
                value="t2"
                className="mt-3 rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 text-xs text-[#1F2933]/70"
              >
                Nơi lưu trữ các email bị hệ thống đánh dấu làm phiền.
              </TabsContent>
            </Tabs>
          </div>

          {/* Variant Flat */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">Khối chìm (Flat - Size LG)</h3>
            <Tabs defaultValue="t1" variant="flat" size="lg">
              <TabsList>
                <TabsTrigger value="t1">Ngày</TabsTrigger>
                <TabsTrigger value="t2">Tháng</TabsTrigger>
              </TabsList>
              <TabsContent
                value="t1"
                className="mt-3 rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 text-xs text-[#1F2933]/70"
              >
                Thống kê số liệu hệ thống tính theo chu kỳ 24h.
              </TabsContent>
              <TabsContent
                value="t2"
                className="mt-3 rounded-lg border border-[#BB9B49]/20 bg-[#F7F4ED] p-4 text-xs text-[#1F2933]/70"
              >
                Báo cáo tổng kết hiệu quả của tháng hiện tại.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* --- ADVANCED & LUXURY UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">2. Advanced & Luxury UI</h2>
          <p className="text-xs text-[#1F2933]/60">
            Trang cá nhân nâng cao lồng ghép bảng biểu, danh sách phiên đăng nhập và cài đặt bảo mật.
          </p>
        </div>

        {/* Dashboard Account card with Tabs */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] shadow-xl">
          {/* Header section with User Profile Details */}
          <div className="flex items-center gap-4 border-b border-[#BB9B49]/20 bg-[#EBD197]/10 p-6">
            <Avatar size="lg" alt="Lê Hoàng Duy" status="online" />
            <div>
              <h3 className="text-base font-bold text-[#1F2933]">Lê Hoàng Duy</h3>
              <p className="text-xs text-[#1F2933]/70">Gói dịch vụ: Enterprise Secure Access</p>
            </div>
          </div>

          {/* Navigating Tabs container */}
          <div className="p-6">
            <Tabs defaultValue="billing" variant="pill" size="md">
              <TabsList className="mb-6 flex items-center gap-2 rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/15 p-1">
                <TabsTrigger value="billing" className="flex items-center gap-2">
                  <CreditCard size={14} />
                  Lịch sử Thanh toán
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Key size={14} />
                  Bảo mật tài khoản
                </TabsTrigger>
                <TabsTrigger value="notify" className="flex items-center gap-2">
                  <Bell size={14} />
                  Thông báo
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: Billing list using customized Table component */}
              <TabsContent value="billing" className="space-y-4">
                <h4 className="text-xs font-bold tracking-wider text-[#1F2933]/70 uppercase">
                  Hóa đơn thanh toán gần đây
                </h4>
                <div className="overflow-hidden rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/5">
                  <Table hoverable dense>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Hóa đơn</TableHead>
                        <TableHead>Ngày phát hành</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead className="text-right">Số tiền</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map(inv => (
                        <TableRow key={inv.id}>
                          <TableCell className="text-xs font-bold">{inv.id}</TableCell>
                          <TableCell className="text-xs text-[#1F2933]/70">{inv.date}</TableCell>
                          <TableCell>
                            <Badge variant="success">{inv.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right text-xs font-bold text-[#BB9B49]">{inv.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              {/* Tab 2: Security & Session Log details */}
              <TabsContent value="security" className="space-y-6">
                {/* Session list */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold tracking-wider text-[#1F2933]/70 uppercase">
                      Danh sách phiên đang hoạt động
                    </h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveSessions(activeSessions.filter(s => s.current))}
                    >
                      Đăng xuất tất cả
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {activeSessions.map(session => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/5 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="rounded-lg border border-[#BB9B49]/20 bg-[#EBD197]/20 p-2 text-[#1F2933]/70">
                            <Shield size={16} />
                          </span>
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-[#1F2933]">
                              {session.device}
                              {session.current && (
                                <span className="rounded-full border border-[#BB9B49]/20 bg-[#BB9B49]/15 px-1.5 py-0.5 text-[9px] font-bold text-[#BB9B49]">
                                  Hiện tại
                                </span>
                              )}
                            </div>
                            <div className="mt-0.5 flex items-center gap-2 text-[10px] text-[#1F2933]/60">
                              <span className="flex items-center gap-0.5">
                                <MapPin size={10} /> {session.location}
                              </span>
                              <span>• IP: {session.ip}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-rose-600 hover:bg-rose-50 hover:text-rose-700"
                          onClick={() => setActiveSessions(activeSessions.filter(s => s.id !== session.id))}
                        >
                          Xóa
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MFA check */}
                <div className="flex items-start gap-3 rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/5 p-4">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#BB9B49]" />
                  <div>
                    <h5 className="text-xs font-bold text-[#1F2933]">Thiết lập Multi-Factor Authentication (MFA)</h5>
                    <p className="mt-0.5 text-[10px] leading-normal text-[#1F2933]/60">
                      MFA đang được bật. Tài khoản của bạn được tăng cường lớp bảo vệ OTP mỗi khi có hành động nhạy cảm
                      hoặc đăng nhập lạ.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Tab 3: Notification preference */}
              <TabsContent value="notify" className="space-y-4">
                <h4 className="text-xs font-bold tracking-wider text-[#1F2933]/70 uppercase">
                  Cấu hình kênh thông báo
                </h4>
                <div className="space-y-3 rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/5 p-4">
                  <Checkbox
                    id="c1"
                    defaultChecked
                    label={
                      <div className="flex flex-col">
                        <span>Nhận Email báo cáo giao dịch</span>
                        <span className="text-[10px] leading-normal font-normal text-[#1F2933]/60">
                          Nhận hóa đơn điện tử hàng tháng qua hòm thư.
                        </span>
                      </div>
                    }
                  />
                  <Checkbox
                    id="c2"
                    defaultChecked
                    label={
                      <div className="flex flex-col">
                        <span>Cảnh báo thiết bị lạ đăng nhập</span>
                        <span className="text-[10px] leading-normal font-normal text-[#1F2933]/60">
                          Gửi thư cảnh báo khẩn cấp khi phát hiện IP mới.
                        </span>
                      </div>
                    }
                  />
                  <Checkbox
                    id="c3"
                    label={
                      <div className="flex flex-col">
                        <span>Bản tin hàng tuần của WebCore</span>
                        <span className="text-[10px] leading-normal font-normal text-[#1F2933]/60">
                          Nhận thông báo cập nhật tính năng mới hệ thống.
                        </span>
                      </div>
                    }
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
