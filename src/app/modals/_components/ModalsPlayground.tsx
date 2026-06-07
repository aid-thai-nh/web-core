"use client";

import React, { useState } from "react";

import { Trash2, Eye, Mail, ShoppingCart, Sparkles, Layout, Maximize2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/common/Button";
import { Checkbox } from "@/components/common/Checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/Dialog";
import { Input } from "@/components/common/Input";

export function ModalsPlayground() {
  // States
  const [email, setEmail] = useState("");
  const [isSubmittingNews, setIsSubmittingNews] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  // Form submit handler
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Vui lòng nhập email hợp lệ!");
      return;
    }
    setIsSubmittingNews(true);
    setTimeout(() => {
      setIsSubmittingNews(false);
      setNewsletterOpen(false);
      toast.success(`Đăng ký tin thành công cho email: ${email}`);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header intro */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>🪟</span> Bảng Kiểm Thử: Component Dialog / Modal
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang giới thiệu, trải nghiệm trực quan toàn bộ các kịch bản sử dụng, kích thước khác nhau của Dialog / Modal.
        </p>
      </div>

      {/* Nhóm 1: Tương tác nghiệp vụ thực tế */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Kịch Bản Tương Tác Nghiệp Vụ</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Các trường hợp thực tế thường gặp trong dự án doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Case 1: Xác nhận xóa */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-base font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Xác Nhận Xóa Dữ Liệu (Confirm Delete)
              </h4>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Hộp thoại cảnh báo mức độ cao (Alert Dialog). Yêu cầu người dùng xác nhận rõ ràng trước khi xóa vĩnh
                viễn tài nguyên.
              </p>
            </div>
            <div>
              <Dialog
                variant="alert"
                size="sm"
                trigger={
                  <Button variant="danger" leftIcon={<Trash2 size={16} />} className="w-full">
                    Xóa Tài Khoản
                  </Button>
                }
                title="Xác nhận xóa tài khoản?"
                description="Hành động này không thể hoàn tác. Tất cả dữ liệu của bạn sẽ bị xóa vĩnh viễn khỏi máy chủ."
                footer={
                  <>
                    <DialogClose asChild>
                      <Button variant="outline" size="sm">
                        Hủy Bỏ
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button variant="danger" size="sm" onClick={() => toast.error("Đã xóa tài khoản vĩnh viễn!")}>
                        Đồng Ý Xóa
                      </Button>
                    </DialogClose>
                  </>
                }
              >
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                  Cảnh báo: Hành động này cũng sẽ hủy tất cả các gói đăng ký dịch vụ đang hoạt động của bạn.
                </div>
              </Dialog>
            </div>
          </div>

          {/* Case 2: Đăng ký nhanh bản tin */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-base font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Form Đăng Ký Bản Tin (Newsletter Form)
              </h4>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Thu thập thông tin liên hệ của khách hàng thông qua hộp thoại nhập dữ liệu (Form Submit).
              </p>
            </div>
            <div>
              <DialogRoot open={newsletterOpen} onOpenChange={setNewsletterOpen}>
                <DialogTrigger asChild>
                  <Button variant="primary" leftIcon={<Mail size={16} />} className="btn-primary w-full">
                    Đăng Ký Nhận Tin
                  </Button>
                </DialogTrigger>
                <DialogContent size="md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Sparkles size={18} className="text-[#BB9B49]" /> Đăng ký nhận tin tức mới
                    </DialogTitle>
                    <DialogDescription>
                      Điền email của bạn để nhận cập nhật về các tính năng mới và khuyến mại đặc quyền.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1F2933]/80">Địa chỉ Email</label>
                      <Input
                        type="email"
                        placeholder="ten.ban@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <Checkbox id="terms" defaultChecked />
                      <label htmlFor="terms" className="text-[11px] leading-tight text-[#1F2933]/70 select-none">
                        Tôi đồng ý nhận email tiếp thị hàng tuần và đồng ý với điều khoản sử dụng.
                      </label>
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline" size="sm">
                          Hủy
                        </Button>
                      </DialogClose>
                      <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        isLoading={isSubmittingNews}
                        className="btn-primary"
                      >
                        Đăng Ký
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </DialogRoot>
            </div>
          </div>

          {/* Case 3: Xem nhanh sản phẩm */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-base font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Xem Nhanh Sản Phẩm (Quick Product View)
              </h4>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Hiển thị tóm tắt thông tin chi tiết một sản phẩm thương mại điện tử giúp tối ưu hóa luồng mua hàng.
              </p>
            </div>
            <div>
              <Dialog
                size="lg"
                trigger={
                  <Button variant="outline" leftIcon={<Eye size={16} />} className="w-full">
                    Xem Nhanh Sản Phẩm
                  </Button>
                }
                title="Đồng hồ Chronograph Champagne Gold"
                description="Mã sản phẩm: GL-WATCH-1996"
                footer={
                  <>
                    <DialogClose asChild>
                      <Button variant="outline" size="sm">
                        Đóng
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<ShoppingCart size={16} />}
                        className="btn-primary"
                        onClick={() => toast.success("Đã thêm sản phẩm vào giỏ hàng!")}
                      >
                        Thêm Vào Giỏ
                      </Button>
                    </DialogClose>
                  </>
                }
              >
                <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
                  <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl border border-[#BB9B49]/20 bg-gradient-to-br from-[#EBD197] to-[#BB9B49] text-[#F7F4ED] shadow-inner">
                    <span className="text-5xl">⌚</span>
                    <div className="absolute bottom-2 left-2 rounded-lg border border-[#BB9B49]/30 bg-[#1F2933]/85 px-2 py-0.5 text-[10px] font-bold text-[#F7F4ED]">
                      PREMIUM EDITION
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#BB9B49]">$1,299.00</span>
                      <span className="text-xs text-[#1F2933]/50 line-through">$1,599.00</span>
                    </div>
                    <p className="text-xs leading-relaxed text-[#1F2933]/70">
                      Chế tác tinh xảo từ chất liệu thép không gỉ mạ vàng champagne 18K, mặt kính sapphire chống xước
                      vượt trội và khả năng kháng nước lên đến 50m.
                    </p>
                    <div className="space-y-1.5">
                      <span className="block text-[11px] font-bold text-[#1F2933]/80">Thông số kỹ thuật:</span>
                      <ul className="list-disc space-y-1 pl-4 text-[11px] text-[#1F2933]/60">
                        <li>Đường kính mặt: 40mm | Độ dày: 11mm</li>
                        <li>Bộ máy: Automatic Thụy Sĩ</li>
                        <li>Thời gian trữ cót: 42 giờ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Nhóm 2: Kích thước khác nhau */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Kích Thước Khác Nhau (Dialog Sizes)</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Hỗ trợ cấu hình đa dạng kích thước từ nhỏ gọn (sm) cho đến toàn màn hình (full).
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {/* SM Size */}
          <Dialog
            size="sm"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 text-center transition-all hover:bg-[#EBD197]/15">
                <Maximize2 size={20} className="text-[#BB9B49]/80 transition-transform group-hover:scale-110" />
                <div>
                  <span className="block text-xs font-bold">Small (sm)</span>
                  <span className="mt-0.5 block text-[10px] text-[#1F2933]/60">380px max-width</span>
                </div>
              </button>
            }
            title="Kích thước Small (sm)"
            description="Thích hợp cho các popup cảnh báo, thông tin ngắn."
            footer={
              <DialogClose asChild>
                <Button size="sm" className="btn-primary w-full">
                  Xác Nhận
                </Button>
              </DialogClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Ví dụ về nội dung Dialog có độ rộng hẹp (380px). Rất thích hợp để hiển thị các câu hỏi nhanh Yes/No hoặc
              mã xác nhận OTP.
            </div>
          </Dialog>

          {/* MD Size */}
          <Dialog
            size="md"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 text-center transition-all hover:bg-[#EBD197]/15">
                <Maximize2 size={20} className="text-[#BB9B49]/80 transition-transform group-hover:scale-110" />
                <div>
                  <span className="block text-xs font-bold">Medium (md)</span>
                  <span className="mt-0.5 block text-[10px] text-[#1F2933]/60">540px max-width</span>
                </div>
              </button>
            }
            title="Kích thước Medium (md)"
            description="Kích thước tiêu chuẩn phù hợp cho hầu hết nội dung form cơ bản."
            footer={
              <DialogClose asChild>
                <Button size="sm" className="btn-primary">
                  Hoàn Thành
                </Button>
              </DialogClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Ví dụ về nội dung Dialog có độ rộng vừa phải (540px). Đủ chỗ để sắp xếp các trường nhập liệu đơn hàng,
              đăng nhập tài khoản hoặc cài đặt thông tin cá nhân.
            </div>
          </Dialog>

          {/* LG Size */}
          <Dialog
            size="lg"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 text-center transition-all hover:bg-[#EBD197]/15">
                <Maximize2 size={20} className="text-[#BB9B49]/80 transition-transform group-hover:scale-110" />
                <div>
                  <span className="block text-xs font-bold">Large (lg)</span>
                  <span className="mt-0.5 block text-[10px] text-[#1F2933]/60">720px max-width</span>
                </div>
              </button>
            }
            title="Kích thước Large (lg)"
            description="Phù hợp để hiển thị bảng dữ liệu, cấu trúc grid nhiều cột."
            footer={
              <DialogClose asChild>
                <Button size="sm" className="btn-primary">
                  Đóng Lại
                </Button>
              </DialogClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Ví dụ về nội dung Dialog có độ rộng lớn (720px). Phù hợp cho việc trình bày các sản phẩm đa biến thể, xem
              trước báo cáo thống kê biểu đồ hoặc danh sách lịch sử giao dịch.
            </div>
          </Dialog>

          {/* XL Size */}
          <Dialog
            size="xl"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 text-center transition-all hover:bg-[#EBD197]/15">
                <Maximize2 size={20} className="text-[#BB9B49]/80 transition-transform group-hover:scale-110" />
                <div>
                  <span className="block text-xs font-bold">Extra Large (xl)</span>
                  <span className="mt-0.5 block text-[10px] text-[#1F2933]/60">960px max-width</span>
                </div>
              </button>
            }
            title="Kích thước Extra Large (xl)"
            description="Phù hợp với các bảng điều khiển quản trị phức tạp."
            footer={
              <DialogClose asChild>
                <Button size="sm" className="btn-primary">
                  Hoàn Thành Cấu Hình
                </Button>
              </DialogClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Ví dụ về nội dung Dialog cực rộng (960px). Cung cấp đủ không gian cho các form dài chia nhóm, tài liệu
              điều khoản pháp lý dài, hoặc màn hình chỉnh sửa hình ảnh quy mô nhỏ.
            </div>
          </Dialog>

          {/* FULL Size */}
          <Dialog
            size="full"
            trigger={
              <button className="group col-span-2 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 text-center transition-all hover:bg-[#EBD197]/15 sm:col-span-1">
                <Layout size={20} className="text-[#BB9B49]/80 transition-transform group-hover:scale-110" />
                <div>
                  <span className="block text-xs font-bold">Full Screen</span>
                  <span className="mt-0.5 block text-[10px] text-[#1F2933]/60">Màn hình lớn</span>
                </div>
              </button>
            }
            title="Trải nghiệm Toàn Màn Hình (Full Dialog)"
            description="Kịch bản chế độ tập trung cao độ, chiếm dụng 96% kích thước màn hình để thực hiện tác vụ lớn."
            footer={
              <DialogClose asChild>
                <Button size="sm" className="btn-primary">
                  Lưu Lại & Đóng Trình Duyệt
                </Button>
              </DialogClose>
            }
          >
            <div className="space-y-4 text-xs text-[#1F2933]/70">
              <p>
                Đây là ví dụ về Dialog kích thước Full (Toàn màn hình). Thiết kế này được thiết lập để người dùng có thể
                thực hiện các thao tác viết bài dài, chỉnh sửa chi tiết dự án, hoặc xem báo cáo phân tích đồ sộ mà không
                bị xao nhãng bởi các thành phần nền của trang web.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
                  <h5 className="mb-1 text-sm font-bold">Cấu trúc 1</h5>
                  <p className="text-[11px] leading-relaxed text-[#1F2933]/60">
                    Cung cấp khu vực thiết lập tài khoản, liên kết API và cấu hình webhook nâng cao.
                  </p>
                </div>
                <div className="rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
                  <h5 className="mb-1 text-sm font-bold">Cấu trúc 2</h5>
                  <p className="text-[11px] leading-relaxed text-[#1F2933]/60">
                    Xem nhanh tiến độ dự án, phân bổ công việc cho nhân viên và theo dõi hiệu suất.
                  </p>
                </div>
                <div className="rounded-xl border border-[#BB9B49]/20 bg-[#EBD197]/10 p-4">
                  <h5 className="mb-1 text-sm font-bold">Cấu trúc 3</h5>
                  <p className="text-[11px] leading-relaxed text-[#1F2933]/60">
                    Báo cáo trực quan doanh thu tổng thể, tính toán tiền tệ và kết xuất file Excel.
                  </p>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </section>
    </div>
  );
}
