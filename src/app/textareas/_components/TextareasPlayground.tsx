"use client";

import React, { useState } from "react";
import { MessageSquare, Clipboard, FileText, Send } from "lucide-react";
import { toast } from "sonner";

import { Textarea } from "@/components/common/Textarea";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function TextareasPlayground() {
  // States
  const [comments, setComments] = useState("");
  const [notes, setNotes] = useState("");
  const [feedback, setFeedback] = useState("");
  const [charLimitText, setCharLimitText] = useState("");

  const placeholderText = "Vui lòng nhập nội dung chi tiết tại đây...";

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Đã sao chép nội dung vào Clipboard!");
  };

  const testCases: TestCase[] = [
    // --- Resize Options
    {
      id: "textarea-resize-vert",
      category: "Kiểu Co Giãn (Resize)",
      title: "Co giãn Chiều Dọc (Vertical - Mặc định)",
      desc: "Chỉ cho phép co giãn theo chiều dọc, tránh làm vỡ layout giao diện chiều ngang.",
      propsUsed: 'resize="vertical"',
      element: (
        <Textarea
          label="Ghi chú đơn hàng (Dọc)"
          resize="vertical"
          placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
      ),
    },
    {
      id: "textarea-resize-none",
      category: "Kiểu Co Giãn (Resize)",
      title: "Không Cho Co Giãn (None)",
      desc: "Khóa kích thước cố định của ô nhập, người dùng chỉ có thể cuộn chuột để xem tiếp.",
      propsUsed: 'resize="none"',
      element: (
        <Textarea
          label="Lời nhắn gửi (Cố định)"
          resize="none"
          placeholder="Kích thước ô nhập này không thể kéo dãn..."
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />
      ),
    },
    {
      id: "textarea-resize-both",
      category: "Kiểu Co Giãn (Resize)",
      title: "Co giãn Cả 2 Chiều (Both)",
      desc: "Cho phép kéo dãn tự do cả chiều dọc và chiều ngang tùy ý người dùng.",
      propsUsed: 'resize="both"',
      element: (
        <Textarea
          label="Mô tả dự án (Tự do)"
          resize="both"
          placeholder="Nhập thông tin chi tiết dự án tại đây..."
          value={comments}
          onChange={e => setComments(e.target.value)}
        />
      ),
    },

    // --- Features & Validation
    {
      id: "textarea-char-count",
      category: "Tính Năng & Kiểm Thử",
      title: "Đếm Số Ký Tự (Character Counter)",
      desc: "Tích hợp bộ đếm ký tự góc dưới bên phải, tự động đổi màu cảnh báo khi gần đạt/đạt giới hạn ký tự tối đa.",
      propsUsed: "showCount maxLength={100}",
      element: (
        <Textarea
          label="Đánh giá sản phẩm (Tối đa 100 ký tự)"
          showCount
          maxLength={100}
          placeholder="Nhập tối đa 100 ký tự phản hồi..."
          value={charLimitText}
          onChange={e => setCharLimitText(e.target.value)}
        />
      ),
    },
    {
      id: "textarea-state-error",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Trạng thái báo lỗi Validation (Error State)",
      desc: "Viền đỏ nổi bật và hiển thị thông báo lỗi bên dưới khi Validation dữ liệu thất bại.",
      propsUsed: 'error="Nội dung liên hệ không được để trống"',
      element: (
        <Textarea
          label="Nội dung phản hồi lỗi"
          error="Nội dung phản hồi không được để trống và phải tối thiểu 20 ký tự."
          placeholder="Nhập mô tả lỗi bạn đang gặp phải..."
        />
      ),
    },
    {
      id: "textarea-state-disabled",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Trạng thái Vô Hiệu Hóa (Disabled)",
      desc: "Làm mờ, khóa focus và chặn hoàn toàn mọi thao tác nhập liệu của người dùng.",
      propsUsed: "disabled",
      element: (
        <Textarea
          label="Ý kiến đóng góp (Đã đóng)"
          disabled
          placeholder="Cổng đóng góp ý kiến hiện tại đã kết thúc thời hạn tiếp nhận."
        />
      ),
    },
    {
      id: "textarea-state-readonly",
      category: "Trạng Thái & Hỗ Trợ UI",
      title: "Trạng thái Chỉ Đọc (Read-Only)",
      desc: "Chặn chỉnh sửa nhưng cho phép bôi đen sao chép, giữ nguyên giao diện đẹp mắt (không làm mờ sâu như disabled).",
      propsUsed: "readOnly",
      element: (
        <div className="flex w-full flex-col gap-2">
          <Textarea
            label="Điều khoản dịch vụ bảo mật (Chỉ đọc)"
            readOnly
            value="1. Chúng tôi cam kết bảo mật tuyệt đối thông tin khách hàng.
2. Không chia sẻ dữ liệu cho bên thứ ba khi chưa có sự đồng ý.
3. Hỗ trợ xử lý tranh chấp 24/7 theo quy định pháp luật."
          />
          <button
            onClick={() => handleCopyText("1. Chúng tôi cam kết bảo mật tuyệt đối thông tin khách hàng...\n")}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-[#BB9B49]/40 bg-[#F7F4ED] py-1.5 text-xs font-bold text-[#1F2933] transition-colors hover:bg-[#BB9B49]/10"
          >
            <Clipboard size={12} /> Sao chép điều khoản
          </button>
        </div>
      ),
    },

    // --- Real-world scenarios
    {
      id: "textarea-usecase-comment",
      category: "Trường Hợp Thực Tế",
      title: "Form bình luận bài viết (Comment Box)",
      desc: "Giao diện bình luận chuẩn chỉnh kèm nút gửi bài viết trực quan ở góc dưới.",
      propsUsed: 'label="Bình luận" placeholder="..."',
      element: (
        <div className="flex w-full flex-col gap-2.5">
          <Textarea label="Để lại ý kiến của bạn" placeholder="Viết bình luận văn minh lịch sự..." rows={3} />
          <div className="flex justify-end">
            <button
              onClick={() => toast.success("Đã gửi bình luận của bạn thành công!")}
              className="flex items-center gap-1.5 rounded-xl bg-[#1F2933] px-4 py-2 text-xs font-bold text-[#F7F4ED] transition-transform hover:bg-[#1F2933]/90 active:scale-95"
            >
              <Send size={12} /> Gửi bình luận
            </button>
          </div>
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
          <span>✍️</span> Bảng Kiểm Thử: Textarea (Khung Nhập Lớn)
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử khả năng nhập văn bản dài, cấu hình giới hạn ký tự và đếm số lượng thực tế, các kiểu co giãn và
          trạng thái validation của Textarea.
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

                    <div className="flex w-full max-w-[380px] min-w-[280px] shrink-0 items-center justify-start md:justify-end">
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
