import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/layout/providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// 페이지별 title은 template을 통해 자동 조합됨
// 예: "About | Next.js Starter Kit"
export const metadata: Metadata = {
  title: {
    default: "Next.js Starter Kit",
    template: "%s | Next.js Starter Kit",
  },
  description: "Next.js + TypeScript + Tailwind CSS + shadcn/ui 기반 모던 웹 스타터킷",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning: next-themes가 SSR/CSR 간 class 속성을 동적으로 변경하므로 필요
    <html lang="ko" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
