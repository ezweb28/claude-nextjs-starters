import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About",
  description: "Next.js Starter Kit 소개 및 사용 방법",
}

// 기술 스택 목록
const STACK_ITEMS = [
  { category: "프레임워크", items: ["Next.js 16", "React 19", "TypeScript 5"] },
  { category: "스타일링", items: ["Tailwind CSS v4", "shadcn/ui", "lucide-react"] },
  { category: "상태 관리", items: ["Zustand", "React Hook Form", "Zod"] },
  { category: "유틸리티", items: ["next-themes", "sonner", "date-fns", "usehooks-ts"] },
] as const

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      {/* 페이지 헤더 */}
      <div className="mb-12">
        <Badge variant="outline" className="mb-4">About</Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          이 스타터킷에 대하여
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          반복되는 초기 설정 작업을 줄이고 비즈니스 로직 개발에 집중할 수 있도록
          만들어진 프로덕션 준비 스타터킷입니다.
        </p>
      </div>

      <Separator className="mb-12" />

      {/* 기술 스택 */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">기술 스택</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {STACK_ITEMS.map(({ category, items }) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* 설계 철학 */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">설계 철학</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary translate-y-2" />
            <span><strong className="text-foreground">바퀴를 재발명하지 마라</strong> — 검증된 라이브러리를 활용하고 직접 구현은 최소화합니다.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary translate-y-2" />
            <span><strong className="text-foreground">타입 안전성</strong> — any 타입 사용 금지, strict 모드로 런타임 에러를 사전에 방지합니다.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary translate-y-2" />
            <span><strong className="text-foreground">컴포넌트 계층 분리</strong> — Providers → Layout → Section → Common → Primitives 구조.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary translate-y-2" />
            <span><strong className="text-foreground">Route Groups</strong> — 공개/인증/대시보드 레이아웃을 완전히 분리합니다.</span>
          </li>
        </ul>
      </section>

      <Separator className="mb-12" />

      {/* 시작 방법 */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">시작 방법</h2>
        <div className="rounded-lg bg-muted p-5 font-mono text-sm leading-7">
          <p className="text-muted-foreground"># 레포지토리 클론</p>
          <p>git clone https://github.com/your-repo/starter-kit</p>
          <p className="mt-2 text-muted-foreground"># 의존성 설치</p>
          <p>npm install</p>
          <p className="mt-2 text-muted-foreground"># 개발 서버 시작</p>
          <p>npm run dev</p>
        </div>
      </section>

      {/* CTA */}
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">
            홈으로 돌아가기
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard">대시보드 보기</Link>
        </Button>
      </div>
    </div>
  )
}
