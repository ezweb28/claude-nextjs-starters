import Link from "next/link"
import { Zap } from "lucide-react"

// 인증 페이지 레이아웃: 중앙 정렬, 상단 로고, 배경 패턴
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center px-4 py-12">
      {/* 배경: 미묘한 도트 패턴 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-sm">
        {/* 상단 로고 */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <Zap className="size-6 text-primary" />
          <span className="text-xl font-semibold">Starter Kit</span>
        </Link>

        {children}
      </div>
    </div>
  )
}
