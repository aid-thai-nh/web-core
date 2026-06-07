"use client";

import React, { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { useLoginMutation } from "../hooks/useLoginMutation";

export function LoginCard() {
  const [email, setEmail] = useState("");
  const { login, isPending } = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await login({ email });
      toast.success("Đăng nhập thành công! Chào mừng bạn quay trở lại.", {
        description: `Đã đăng nhập với email: ${email}`,
      });
    } catch (err: unknown) {
      // Errors propagate from hook and are caught here
      const error = err as Error;
      toast.error("Đăng nhập thất bại!", {
        description: error.message || "Tài khoản hoặc mật khẩu không chính xác.",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md transition-all hover:border-white/20">
      <div className="bg-primary/20 absolute -top-10 -right-10 h-24 w-24 rounded-full blur-xl"></div>
      <h3 className="text-xl font-bold tracking-tight text-white">Đăng Nhập Core</h3>
      <p className="mt-1 text-xs text-zinc-400">{"Thử dùng 'error@globalsafe.vn' để xem báo lỗi."}</p>

      <form onSubmit={handleLogin} className="mt-6 space-y-4">
        <div>
          <label className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Địa chỉ Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="focus:border-primary focus:ring-primary/20 mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:ring-2 focus:outline-none"
            placeholder="name@globalsafe.vn"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="from-primary w-full bg-gradient-to-r to-blue-600 font-medium text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {isPending ? "Đang xử lý..." : "Đăng Nhập Ngay"}
        </Button>
      </form>
    </div>
  );
}
