"use client";

import React, { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    toast.success("Đăng ký tài khoản thành công!", {
      description: "Hệ thống đã ghi nhận email đăng ký của bạn.",
    });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md transition-all hover:border-white/20">
      <h3 className="text-xl font-bold tracking-tight text-white">Đăng Ký Tài Khoản</h3>
      <p className="mt-1 text-xs text-zinc-400">Tạo tài khoản mới để nhận ưu đãi từ hệ thống.</p>

      <form onSubmit={handleRegister} className="mt-6 space-y-4">
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

        <div>
          <label className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="focus:border-primary focus:ring-primary/20 mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all focus:ring-2 focus:outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 font-medium text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Đăng Ký Tài Khoản
        </Button>
      </form>
    </div>
  );
}
