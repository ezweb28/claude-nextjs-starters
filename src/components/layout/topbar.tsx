"use client"

import { useRouter, usePathname } from "next/navigation"
import { LogOut } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { useAppStore } from "@/stores/use-app-store"

// 경로를 한국어 레이블로 변환하는 맵
const PATH_LABELS: Record<string, string> = {
  dashboard: "대시보드",
  settings: "설정",
  users: "사용자",
  analytics: "분석",
  docs: "문서",
}

// 현재 경로를 Breadcrumb 아이템으로 파싱
function useBreadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return segments.map((segment, index) => ({
    label: PATH_LABELS[segment] ?? segment,
    href: "/" + segments.slice(0, index + 1).join("/"),
    isLast: index === segments.length - 1,
  }))
}

// 대시보드 상단 바: 사이드바 토글 + Breadcrumb + 테마 토글 + 로그아웃
export function Topbar() {
  const router = useRouter()
  const breadcrumbs = useBreadcrumbs()
  const { setUser } = useAppStore()

  const handleLogout = () => {
    setUser(null)
    router.push('/')
  }

  return (
    <header className="flex h-14 items-center gap-4 border-b px-4">
      {/* 사이드바 토글 버튼 */}
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="h-4" />

      {/* Breadcrumb 네비게이션 */}
      <Breadcrumb className="flex-1">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center">
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {crumb.isLast ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* 테마 토글 */}
      <ThemeToggle />

      {/* 로그아웃 버튼 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLogout}
        title="로그아웃"
      >
        <LogOut className="size-4" />
      </Button>
    </header>
  )
}
