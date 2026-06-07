import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { Providers } from "@/components/common/Providers";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  openGraph: {
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
          <Providers>
            <div className="bg-champagne-page text-foreground relative flex min-h-screen flex-col overflow-x-hidden font-sans selection:bg-[#1F2933]/10 selection:text-[#1F2933]">
              <Header />
              <main className="flex-1 pt-20">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
