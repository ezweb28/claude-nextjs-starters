"use client"

import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { NotificationList } from "@/components/notification-list"

// 애플리케이션 전체 프로바이더를 한 곳에서 관리
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        {children}
        {/* 토스트 알림 — 화면 우측 하단 */}
        <Toaster position="bottom-right" richColors />
        {/* Notification 알림 — 화면 우측 상단 */}
        <NotificationList />
      </TooltipProvider>
    </ThemeProvider>
  )
}
