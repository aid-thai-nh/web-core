"use client";

import React, { useState } from "react";

import { CheckCircle2, AlertTriangle, AlertCircle, Info, Sparkles, RotateCcw } from "lucide-react";
import { toast } from "sonner";

import { Alert } from "@/components/common/Alert";
import { Button } from "@/components/common/Button";

export function ToastsPlayground() {
  // States
  const [showAlert1, setShowAlert1] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  // Advanced Undo Action Handler
  const triggerAddToCartWithUndo = () => {
    toast.success("Đã thêm 1 chiếc Đồng hồ Vàng vào giỏ!", {
      description: "Sản phẩm cao cấp phiên bản giới hạn",
      action: {
        label: "Hoàn tác",
        onClick: () => {
          toast.warning("Đã hoàn tác: Rút sản phẩm khỏi giỏ hàng!");
        },
      },
      duration: 5000,
    });
  };

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header intro */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>🔔</span> Bảng Kiểm Thử: Toast & Alert
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Hệ thống thông báo đồng bộ bao gồm: Banners cảnh báo nội dòng (Alert) và thông báo nổi góc màn hình (Toast
          Notifications).
        </p>
      </div>

      {/* Nhóm 1: Inline Alerts (Banners nội dòng) */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Cảnh Báo Nội Dòng (Inline Alert Banners)</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Dùng để thu hút sự chú ý của người dùng trực tiếp trên luồng nội dung của trang web.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Static Variants */}
          <div className="space-y-4 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 shadow-sm">
            <h4 className="border-b border-[#BB9B49]/15 pb-2 text-sm font-bold text-[#1F2933]">
              Các Biến Thể Trạng Thái (Variants)
            </h4>

            <Alert variant="success" title="Hoàn thành tải lên!">
              Tệp tài liệu hợp đồng của bạn đã được mã hóa và lưu trữ thành công trên dịch vụ bảo mật.
            </Alert>

            <Alert variant="info" title="Cập nhật hệ thống:">
              Phiên bản WebCore 2.0 đã sẵn sàng. Vui lòng làm mới trang trình duyệt nếu thấy lỗi hiển thị.
            </Alert>

            <Alert variant="warning" title="Dung lượng bộ nhớ sắp đầy:">
              Bạn đã sử dụng 85% dung lượng lưu trữ miễn phí. Vui lòng nâng cấp gói dịch vụ để tiếp tục.
            </Alert>

            <Alert variant="error" title="Gửi liên hệ thất bại:">
              Không thể kết nối đến máy chủ lưu trữ. Vui lòng kiểm tra lại đường truyền internet và gửi lại sau.
            </Alert>
          </div>

          {/* Interactive / Closable Alerts */}
          <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-6 shadow-sm">
            <div className="space-y-4">
              <h4 className="border-b border-[#BB9B49]/15 pb-2 text-sm font-bold text-[#1F2933]">
                Khả Năng Đóng & Ẩn Cảnh Báo
              </h4>
              <p className="text-xs text-[#1F2933]/60">
                Cho phép người dùng chủ động tắt thông báo sau khi đã đọc xong thông tin.
              </p>

              {showAlert1 ? (
                <Alert
                  variant="info"
                  title="Thông báo có thể tắt"
                  onClose={() => {
                    setShowAlert1(false);
                    toast.info("Đã ẩn thông báo thành công!");
                  }}
                >
                  Click vào nút dấu X bên phải để đóng thanh banner thông báo này.
                </Alert>
              ) : (
                <div className="flex h-[74px] items-center justify-center rounded-xl border border-dashed border-[#BB9B49]/30 bg-[#EBD197]/5">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<RotateCcw size={12} />}
                    onClick={() => setShowAlert1(true)}
                  >
                    Khôi Phục Banner 1
                  </Button>
                </div>
              )}

              {showAlert2 ? (
                <Alert
                  variant="success"
                  title="Thành công!"
                  onClose={() => {
                    setShowAlert2(false);
                    toast.success("Đã đóng banner thành công!");
                  }}
                >
                  Hộp thoại thông báo hoạt động chính xác. Bạn có thể khôi phục lại bất cứ lúc nào bằng nút bên dưới.
                </Alert>
              ) : (
                <div className="flex h-[74px] items-center justify-center rounded-xl border border-dashed border-[#BB9B49]/30 bg-[#EBD197]/5">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<RotateCcw size={12} />}
                    onClick={() => setShowAlert2(true)}
                  >
                    Khôi Phục Banner 2
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Nhóm 2: Floating Toasts (Sonner) */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Thông Báo Nổi Góc Màn Hình (Toasts Notifications)</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Thông báo không chặn trải nghiệm người dùng, xuất hiện ngắn hạn ở góc màn hình.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Hộp 1: Trạng thái cơ bản */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-base font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Toast Trạng Thái
              </h4>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Được tích hợp sẵn Sonner với thời gian chuyển tiếp mượt mà, hỗ trợ xếp chồng thông báo.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<CheckCircle2 size={14} className="text-green-600" />}
                className="justify-start text-xs"
                onClick={() => toast.success("Thao tác thành công!")}
              >
                Trigger Success Toast
              </Button>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<AlertCircle size={14} className="text-red-600" />}
                className="justify-start text-xs"
                onClick={() => toast.error("Đã xảy ra lỗi hệ thống!")}
              >
                Trigger Error Toast
              </Button>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<Info size={14} className="text-blue-600" />}
                className="justify-start text-xs"
                onClick={() => toast.info("Có 1 tin nhắn mới chưa đọc.")}
              >
                Trigger Info Toast
              </Button>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<AlertTriangle size={14} className="text-amber-600" />}
                className="justify-start text-xs"
                onClick={() => toast.warning("Phiên làm việc sắp hết hạn.")}
              >
                Trigger Warning Toast
              </Button>
            </div>
          </div>

          {/* Hộp 2: Hành động nâng cao (Action Callback) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-base font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#BB9B49]" />
                Toast Hoàn Tác (Action Undo)
              </h4>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Kịch bản nâng cao: Cung cấp nút bấm tương tác ngay trên thông báo, cho phép người dùng hoàn tác hành
                động vừa thực hiện.
              </p>
            </div>
            <div>
              <Button variant="primary" className="btn-primary w-full" onClick={triggerAddToCartWithUndo}>
                Thêm Giỏ Hàng (Có Hoàn Tác)
              </Button>
            </div>
          </div>

          {/* Hộp 3: Tùy biến nâng cao (Custom / Rich content) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-4 space-y-2">
              <h4 className="flex items-center gap-2 text-base font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                Toast Tùy Biến (Custom Rich HTML)
              </h4>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Tự do truyền cấu trúc JSX, avatar, hoặc nội dung đa phương tiện phong phú vào khung thông báo.
              </p>
            </div>
            <div>
              <Button
                variant="outline"
                leftIcon={<Sparkles size={16} className="text-purple-500" />}
                className="w-full border-purple-200 hover:bg-purple-50"
                onClick={() => {
                  toast(
                    <div className="flex items-center gap-3 py-1 text-[#1F2933]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white shadow-md shadow-purple-200">
                        ✨
                      </div>
                      <div>
                        <h6 className="text-xs font-bold">Phần thưởng đã mở khóa!</h6>
                        <p className="text-[10px] text-[#1F2933]/60">
                          Bạn nhận được voucher giảm giá 20% cho đơn hàng sau.
                        </p>
                      </div>
                    </div>,
                  );
                }}
              >
                Kích Hoạt Rich Toast
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
