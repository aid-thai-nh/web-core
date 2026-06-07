"use client";

import React, { useState } from "react";

import {
  Menu,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Shield,
  CreditCard,
  Compass,
  BookOpen,
  Settings,
  PhoneCall,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/common/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/common/Drawer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  icon: string;
}

export function DrawersPlayground() {
  // States
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Đồng hồ Chronograph 18K", price: 1299, qty: 1, icon: "⌚" },
    { id: 2, name: "Ví da cá sấu Premium", price: 349, qty: 1, icon: "💼" },
    { id: 3, name: "Bút ký Waterman Gold", price: 150, qty: 1, icon: "✒️" },
  ]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Cart operations
  const updateQty = (id: number, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const nextQty = item.qty + delta;
            return { ...item, qty: nextQty };
          }
          return item;
        })
        .filter(item => item.qty > 0),
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.error("Đã xóa sản phẩm khỏi giỏ hàng!");
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal > 1000 ? 0 : 25;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCartOpen(false);
      toast.success("Thanh toán thành công! Mã đơn hàng: #WS-9921");
      // Reset cart
      setCartItems([
        { id: 1, name: "Đồng hồ Chronograph 18K", price: 1299, qty: 1, icon: "⌚" },
        { id: 2, name: "Ví da cá sấu Premium", price: 349, qty: 1, icon: "💼" },
        { id: 3, name: "Bút ký Waterman Gold", price: 150, qty: 1, icon: "✒️" },
      ]);
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header intro */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>🚪</span> Bảng Kiểm Thử: Component Drawer / Sheet
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Khám phá và tương tác với các slide-over panel trượt từ bốn cạnh màn hình, cùng với kịch bản giỏ hàng nhanh
          (Mini Cart) chuyên sâu.
        </p>
      </div>

      {/* Nhóm 1: Tương tác nghiệp vụ chính */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Trải Nghiệm Nghiệp Vụ Thực Tế</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Ứng dụng Drawer trong thiết kế menu di động và giỏ hàng e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Case 1: Giỏ hàng mini (Interactive Mini Cart) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="flex items-center gap-2 text-base font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Mini Shopping Cart (Mini Cart)
                </h4>
                {cartItems.length > 0 && (
                  <span className="rounded-full bg-[#BB9B49] px-1.5 py-0.5 text-[10px] font-bold text-[#F7F4ED]">
                    {cartItems.reduce((acc, i) => acc + i.qty, 0)} sản phẩm
                  </span>
                )}
              </div>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Giỏ hàng nhanh trượt từ cạnh phải. Hỗ trợ thay đổi số lượng, tự động tính toán tổng hóa đơn chi tiết
                trực tiếp trong drawer.
              </p>
            </div>
            <div>
              <DrawerRoot open={cartOpen} onOpenChange={setCartOpen}>
                <DrawerTrigger asChild>
                  <Button variant="primary" leftIcon={<ShoppingBag size={16} />} className="btn-primary w-full">
                    Mở Giỏ Hàng Nhanh
                  </Button>
                </DrawerTrigger>
                <DrawerContent side="right" className="w-[420px] max-w-full">
                  <DrawerHeader>
                    <DrawerTitle className="flex items-center gap-2">
                      <ShoppingBag size={18} className="text-[#BB9B49]" /> Giỏ Hàng Của Bạn
                    </DrawerTitle>
                    <DrawerDescription>
                      Kiểm tra lại danh sách sản phẩm trước khi tiến hành thanh toán.
                    </DrawerDescription>
                  </DrawerHeader>

                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <span className="mb-3 text-4xl">🛒</span>
                      <p className="text-sm font-medium text-[#1F2933]/60">Giỏ hàng của bạn đang trống.</p>
                    </div>
                  ) : (
                    <div className="space-y-4 pr-1">
                      {cartItems.map(item => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-3 rounded-xl border border-[#BB9B49]/15 bg-[#EBD197]/10 p-3"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#BB9B49]/10 bg-[#F7F4ED] text-2xl shadow-sm">
                            {item.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h5 className="truncate text-xs font-bold text-[#1F2933]">{item.name}</h5>
                            <span className="mt-0.5 block text-xs font-bold text-[#BB9B49]">${item.price}</span>
                          </div>
                          <div className="flex items-center rounded-lg border border-[#BB9B49]/30 bg-[#F7F4ED]">
                            <button
                              onClick={() => updateQty(item.id, -1)}
                              className="px-2 py-1 text-xs text-[#1F2933] transition-colors hover:bg-[#EBD197]/30"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-[#1F2933]">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, 1)}
                              className="px-2 py-1 text-xs text-[#1F2933] transition-colors hover:bg-[#EBD197]/30"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="cursor-pointer rounded-lg p-1.5 text-red-500 transition-colors hover:bg-red-50"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}

                      {/* Calculations Panel */}
                      <div className="mt-6 space-y-2.5 rounded-xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-4 shadow-sm">
                        <div className="flex justify-between text-xs">
                          <span className="text-[#1F2933]/60">Tạm tính</span>
                          <span className="font-semibold text-[#1F2933]">${subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-[#1F2933]/60">Phí vận chuyển</span>
                          <span className="font-semibold text-[#1F2933]">
                            {shipping === 0 ? (
                              <span className="font-bold text-green-600">MIỄN PHÍ</span>
                            ) : (
                              `$${shipping}`
                            )}
                          </span>
                        </div>
                        <div className="my-1 h-px bg-[#BB9B49]/15" />
                        <div className="flex justify-between text-sm">
                          <span className="font-bold text-[#1F2933]">Tổng cộng</span>
                          <span className="font-black text-[#BB9B49]">${total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <DrawerFooter>
                    <Button
                      variant="primary"
                      className="btn-primary w-full"
                      leftIcon={<CreditCard size={16} />}
                      isLoading={isCheckingOut}
                      disabled={cartItems.length === 0}
                      onClick={handleCheckout}
                    >
                      Thanh Toán Ngay
                    </Button>
                    <DrawerClose asChild>
                      <Button variant="outline" className="w-full">
                        Tiếp Tục Mua Sắm
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </DrawerRoot>
            </div>
          </div>

          {/* Case 2: Menu Mobile Slide-over */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#BB9B49]/25 bg-[#F7F4ED] p-6 shadow-sm transition-all duration-300 hover:border-[#BB9B49]/50">
            <div className="mb-6 space-y-2">
              <h4 className="flex items-center gap-2 text-base font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Mobile Navigation (Mobile Menu)
              </h4>
              <p className="text-xs leading-relaxed text-[#1F2933]/60">
                Thanh menu trượt dọc từ cạnh trái thiết bị di động, cung cấp trải nghiệm điều hướng đầy đủ thông tin,
                cấu trúc rõ ràng.
              </p>
            </div>
            <div>
              <Drawer
                side="left"
                trigger={
                  <Button variant="outline" leftIcon={<Menu size={16} />} className="w-full">
                    Mở Menu Điều Hướng
                  </Button>
                }
                title="Hệ Thống WebCore"
                description="Menu ứng dụng doanh nghiệp"
                footer={
                  <div className="flex items-center justify-center gap-1 py-2 text-center text-[10px] text-[#1F2933]/40">
                    <Shield size={12} className="text-[#BB9B49]" /> Bản quyền © 2026 WebCore Global
                  </div>
                }
              >
                <div className="flex flex-col gap-6 pt-4">
                  {/* Quick Profile Section inside menu */}
                  <div className="flex items-center gap-3 rounded-xl border border-[#BB9B49]/15 bg-[#EBD197]/10 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#EBD197] to-[#BB9B49] text-sm font-bold text-[#1F2933] shadow-sm">
                      AD
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-[#1F2933]">Quản trị viên</h6>
                      <span className="text-[10px] text-[#1F2933]/60">admin@globalsafe.vn</span>
                    </div>
                  </div>

                  {/* Navigation List */}
                  <nav className="flex flex-col gap-1">
                    <DrawerClose asChild>
                      <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-xs font-bold text-[#1F2933] transition-all hover:bg-[#EBD197]/25">
                        <Compass size={16} className="text-[#BB9B49]" /> Khám Phá Component
                      </button>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-xs font-bold text-[#1F2933] transition-all hover:bg-[#EBD197]/25">
                        <BookOpen size={16} className="text-[#BB9B49]" /> Tài Liệu API
                      </button>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-xs font-bold text-[#1F2933] transition-all hover:bg-[#EBD197]/25">
                        <Settings size={16} className="text-[#BB9B49]" /> Cài Đặt Hệ Thống
                      </button>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-xs font-bold text-[#1F2933] transition-all hover:bg-[#EBD197]/25">
                        <PhoneCall size={16} className="text-[#BB9B49]" /> Liên Hệ Trợ Giúp
                      </button>
                    </DrawerClose>
                  </nav>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </section>

      {/* Nhóm 2: Các vị trí xuất hiện (Placements) */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#BB9B49] pl-4">
          <h3 className="text-xl font-bold tracking-tight">Vị Trí Xuất Hiện (Placements)</h3>
          <p className="mt-0.5 text-xs text-[#1F2933]/60">
            Hỗ trợ kéo trượt panel từ cả 4 hướng (Trái, Phải, Trên, Dưới) dựa vào cấu hình `side` prop.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Top side */}
          <Drawer
            side="top"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-5 text-center transition-all hover:bg-[#EBD197]/15">
                <span className="text-lg transition-transform group-hover:-translate-y-1">⬆️</span>
                <span className="text-xs font-bold">Top Sheet</span>
              </button>
            }
            title="Slide-over Top Drawer"
            description="Nội dung trượt xuống từ trên đỉnh màn hình."
            footer={
              <DrawerClose asChild>
                <Button size="sm" className="btn-primary">
                  Đồng Ý
                </Button>
              </DrawerClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Thích hợp để làm thanh thông báo khẩn cấp, banner tìm kiếm toàn bộ hệ thống hoặc bảng bộ lọc nhanh của
              trang danh mục sản phẩm.
            </div>
          </Drawer>

          {/* Right side */}
          <Drawer
            side="right"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-5 text-center transition-all hover:bg-[#EBD197]/15">
                <span className="text-lg transition-transform group-hover:translate-x-1">➡️</span>
                <span className="text-xs font-bold">Right Sheet</span>
              </button>
            }
            title="Slide-over Right Drawer"
            description="Nội dung trượt từ cạnh phải vào màn hình."
            footer={
              <DrawerClose asChild>
                <Button size="sm" className="btn-primary">
                  Lưu Thiết Lập
                </Button>
              </DrawerClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Vị trí phổ biến nhất cho giỏ hàng nhanh, xem thông tin chi tiết một user hoặc cấu hình thuộc tính của sản
              phẩm.
            </div>
          </Drawer>

          {/* Bottom side */}
          <Drawer
            side="bottom"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-5 text-center transition-all hover:bg-[#EBD197]/15">
                <span className="text-lg transition-transform group-hover:translate-y-1">⬇️</span>
                <span className="text-xs font-bold">Bottom Sheet</span>
              </button>
            }
            title="Slide-over Bottom Drawer"
            description="Nội dung trượt lên từ đáy màn hình."
            footer={
              <DrawerClose asChild>
                <Button size="sm" className="btn-primary">
                  Hoàn Thành
                </Button>
              </DrawerClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Thiết kế rất thân thiện với trải nghiệm ngón tay cái trên thiết bị di động. Rất được ưa chuộng để làm menu
              chia sẻ liên kết, hoặc chọn phương thức thanh toán.
            </div>
          </Drawer>

          {/* Left side */}
          <Drawer
            side="left"
            trigger={
              <button className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-[#BB9B49]/20 bg-[#F7F4ED] p-5 text-center transition-all hover:bg-[#EBD197]/15">
                <span className="text-lg transition-transform group-hover:-translate-x-1">⬅️</span>
                <span className="text-xs font-bold">Left Sheet</span>
              </button>
            }
            title="Slide-over Left Drawer"
            description="Nội dung trượt từ cạnh trái vào màn hình."
            footer={
              <DrawerClose asChild>
                <Button size="sm" className="btn-primary">
                  Đồng Ý
                </Button>
              </DrawerClose>
            }
          >
            <div className="text-xs text-[#1F2933]/70">
              Vị trí tối ưu cho sidebar ứng dụng, mobile menu điều hướng danh mục chính hoặc nhật ký hoạt động hệ thống.
            </div>
          </Drawer>
        </div>
      </section>
    </div>
  );
}
