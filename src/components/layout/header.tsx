"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Zap, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { useAppStore } from "@/stores/use-app-store"
import { cn } from "@/lib/utils"

// 네비게이션 메뉴 항목 정의
const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "기능", href: "/#features" },
  { label: "About", href: "/about" },
] as const

type NavItem = (typeof NAV_ITEMS)[number]

// 데스크톱 네비게이션 링크 컴포넌트
function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const pathname = usePathname()
  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground",
        isActive ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {item.label}
    </Link>
  )
}

// 모바일 햄버거 메뉴 (Sheet 기반 드로어)
function MobileNav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { user, setUser } = useAppStore()

  const handleLogout = () => {
    setUser(null)
    setOpen(false)
    router.push('/')
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="메뉴 열기" className="md:hidden">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        {/* 모바일 메뉴 헤더 */}
        <div className="flex items-center gap-2 mb-6">
          <Zap className="size-5 text-primary" />
          <span className="font-semibold">Starter Kit</span>
        </div>
        <Separator className="mb-6" />

        {/* 모바일 메뉴 링크 목록 */}
        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} onClick={() => setOpen(false)} />
          ))}
        </nav>

        <Separator className="my-6" />

        {/* 모바일 인증 버튼 */}
        <div className="flex flex-col gap-2">
          {user ? (
            <>
              <div className="mb-4 px-2 py-2 rounded-md bg-muted">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <Button variant="outline" className="w-full" onClick={handleLogout}>
                <LogOut className="mr-2 size-4" />
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">로그인</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/register">회원가입</Link>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

// 공개 페이지용 상단 헤더
export function Header() {
  const router = useRouter()
  const { user, setUser } = useAppStore()

  const handleLogout = () => {
    setUser(null)
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <Zap className="size-5 text-primary" />
          <span className="font-semibold">Starter Kit</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* 우측 액션 영역 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* 데스크톱: 인증 버튼 */}
          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 size-4" />
                  로그아웃
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/login">로그인</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/register">회원가입</Link>
                </Button>
              </>
            )}
          </div>

          {/* 모바일: 햄버거 메뉴 */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
