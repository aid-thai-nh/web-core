"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F4ED] p-4 text-center text-[#1F2933]">
            <div className="max-w-md rounded-2xl border border-red-500/20 bg-red-50 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-red-600">Đã xảy ra lỗi hệ thống</h2>
              <p className="mt-2 text-sm text-[#1F2933]/70">
                Ứng dụng gặp sự cố ngoài ý muốn. Vui lòng tải lại trang hoặc liên hệ quản trị viên.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-red-500 active:scale-[0.98]"
              >
                Tải lại trang
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
