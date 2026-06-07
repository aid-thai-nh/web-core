"use client";

import React, { useState } from "react";

import { Download, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

import { Avatar } from "@/components/common/Avatar";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/common/Table";
import { cn } from "@/lib/utils";

export default function TablesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock basic invoice data
  const invoices = [
    { id: "INV001", status: "success", method: "Chuyển khoản", amount: "1,500,000 đ" },
    { id: "INV002", status: "warning", method: "Thẻ Visa", amount: "5,000,000 đ" },
    { id: "INV003", status: "danger", method: "Thẻ ATM", amount: "450,000 đ" },
  ];

  // Mock advanced audit log data
  const auditLogs = [
    {
      id: "LOG-1904",
      user: { name: "Nguyễn Văn A", email: "a.nguyen@globalsafe.vn", avatar: "" },
      action: "Đăng nhập hệ thống",
      ip: "192.168.1.45",
      device: "macOS • Chrome",
      status: "success",
      time: "2026-06-05 20:34:12",
    },
    {
      id: "LOG-1903",
      user: { name: "Bùi Thị B", email: "b.bui@globalsafe.vn", avatar: "" },
      action: "Yêu cầu đặt lại mật khẩu",
      ip: "113.23.44.112",
      device: "Windows • Edge",
      status: "warning",
      time: "2026-06-05 19:12:00",
    },
    {
      id: "LOG-1902",
      user: { name: "Trần Trung C", email: "c.tran@globalsafe.vn", avatar: "" },
      action: "Xuất dữ liệu khách hàng",
      ip: "192.168.1.189",
      device: "Linux • Firefox",
      status: "danger",
      time: "2026-06-05 18:45:33",
    },
    {
      id: "LOG-1901",
      user: { name: "Lê Khắc D", email: "d.le@globalsafe.vn", avatar: "" },
      action: "Thay đổi phân quyền API",
      ip: "203.113.10.8",
      device: "macOS • Safari",
      status: "success",
      time: "2026-06-05 17:30:10",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge variant="success">Thành công</Badge>;
      case "warning":
        return <Badge variant="warning">Cảnh báo</Badge>;
      case "danger":
        return <Badge variant="danger">Thất bại</Badge>;
      default:
        return <Badge variant="info">Thông tin</Badge>;
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Page Header */}
      <section className="space-y-4 border-b border-[#BB9B49]/30 pb-8">
        <span className="inline-flex items-center rounded-full bg-[#BB9B49]/10 px-3 py-1 text-xs font-medium text-[#BB9B49] ring-1 ring-[#BB9B49]/20">
          Basis Component
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1F2933] sm:text-5xl">Table (Bảng dữ liệu)</h1>
        <p className="max-w-3xl text-sm text-[#1F2933]/70">
          Component hiển thị dữ liệu có tổ chức theo hàng và cột. Hỗ trợ đầy đủ các biến thể giao diện, chế độ cuộn
          trang responsive trên mobile, highlight hàng khi hover và zebra stripes.
        </p>
      </section>

      {/* --- BASIC UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">1. Basic UI</h2>
          <p className="text-xs text-[#1F2933]/60">Các tùy chọn gạch chân phân hàng, kẻ ô và thu gọn độ cao dòng.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bordered & Striped */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">
              Kẻ ô đầy đủ (Bordered) & Xen kẽ màu dòng (Striped)
            </h3>
            <Table bordered striped hoverable>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã HĐ</TableHead>
                  <TableHead>Phương thức</TableHead>
                  <TableHead className="text-right">Số tiền</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map(inv => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-bold">{inv.id}</TableCell>
                    <TableCell>{inv.method}</TableCell>
                    <TableCell className="text-right font-bold text-[#BB9B49]">{inv.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Borderless & Dense */}
          <div className="space-y-4 rounded-xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-5">
            <h3 className="text-xs font-bold tracking-wider text-[#1F2933]/60 uppercase">
              Không viền phân hàng (Borderless) & Thu gọn (Dense)
            </h3>
            <Table borderless dense hoverable>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã HĐ</TableHead>
                  <TableHead>Phương thức</TableHead>
                  <TableHead className="text-right">Số tiền</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map(inv => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-bold">{inv.id}</TableCell>
                    <TableCell>{inv.method}</TableCell>
                    <TableCell className="text-right font-bold text-[#BB9B49]">{inv.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* --- ADVANCED & LUXURY UI --- */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold">2. Advanced & Luxury UI</h2>
          <p className="text-xs text-[#1F2933]/60">
            Bảng lịch sử hoạt động bảo mật (Audit Logs) cao cấp dành cho quản trị viên doanh nghiệp.
          </p>
        </div>

        {/* Audit Log Card Wrapper */}
        <div className="overflow-hidden rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] shadow-xl">
          {/* Card Control Header */}
          <div className="flex flex-col gap-4 border-b border-[#BB9B49]/20 bg-[#EBD197]/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="flex items-center gap-2 text-base font-bold text-[#1F2933]">
                <span className="text-rose-600">🛡️</span>
                Nhật ký kiểm tra hệ thống (System Audit Logs)
              </h3>
              <p className="text-xs text-[#1F2933]/70">
                Hiển thị hoạt động phân quyền, thao tác của người dùng trên toàn bộ hệ thống API WebCore.
              </p>
            </div>
            <div className="flex gap-2.5">
              <Button variant="outline" size="sm" leftIcon={<RefreshCw size={13} />}>
                Làm mới
              </Button>
              <Button variant="outline" size="sm" leftIcon={<Download size={13} />}>
                Xuất file .CSV
              </Button>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-[#EBD197]/5 p-2">
            <Table hoverable>
              <TableHeader>
                <TableRow className="border-b border-[#BB9B49]/20">
                  <TableHead className="w-[120px]">Mã phiên</TableHead>
                  <TableHead>Quản trị viên</TableHead>
                  <TableHead>Hành động</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead>Thiết bị</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thời gian</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map(log => (
                  <TableRow key={log.id} className="border-b border-[#BB9B49]/15 hover:bg-[#EBD197]/10">
                    <TableCell className="font-mono text-xs font-bold text-[#1F2933]/60">{log.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar size="sm" alt={log.user.name} />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[#1F2933]">{log.user.name}</span>
                          <span className="text-[10px] text-[#1F2933]/60">{log.user.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs font-medium text-[#1F2933]">{log.action}</TableCell>
                    <TableCell className="font-mono text-xs text-[#1F2933]/70">{log.ip}</TableCell>
                    <TableCell className="text-xs text-[#1F2933]/70">{log.device}</TableCell>
                    <TableCell>{getStatusBadge(log.status)}</TableCell>
                    <TableCell className="text-right font-mono text-xs text-[#1F2933]/60">{log.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Custom Luxury Pagination Footer */}
          <div className="flex flex-col gap-4 border-t border-[#BB9B49]/20 bg-[#EBD197]/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-medium text-[#1F2933]/70">
              Đang hiển thị <span className="font-bold text-[#1F2933]">1 - 4</span> trong tổng số{" "}
              <span className="font-bold text-[#1F2933]">28</span> hoạt động
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex h-8 w-8 items-center justify-center rounded-lg p-0"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              >
                <ChevronLeft size={14} />
              </Button>
              <Button
                variant={currentPage === 1 ? "primary" : "outline"}
                size="sm"
                className={cn(
                  "h-8 rounded-lg px-3 text-xs font-bold",
                  currentPage === 1 && "border-[#BB9B49] bg-[#BB9B49] text-[#F7F4ED]",
                )}
                onClick={() => setCurrentPage(1)}
              >
                1
              </Button>
              <Button
                variant={currentPage === 2 ? "primary" : "outline"}
                size="sm"
                className={cn(
                  "h-8 rounded-lg px-3 text-xs font-bold",
                  currentPage === 2 && "border-[#BB9B49] bg-[#BB9B49] text-[#F7F4ED]",
                )}
                onClick={() => setCurrentPage(2)}
              >
                2
              </Button>
              <Button
                variant={currentPage === 3 ? "primary" : "outline"}
                size="sm"
                className={cn(
                  "h-8 rounded-lg px-3 text-xs font-bold",
                  currentPage === 3 && "border-[#BB9B49] bg-[#BB9B49] text-[#F7F4ED]",
                )}
                onClick={() => setCurrentPage(3)}
              >
                3
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex h-8 w-8 items-center justify-center rounded-lg p-0 text-[#1F2933]/60 hover:text-[#1F2933]"
                disabled={currentPage === 3}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, 3))}
              >
                <ChevronRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
