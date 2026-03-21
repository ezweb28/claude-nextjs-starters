import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// 기술 스택 뱃지 목록
const TECH_STACK = [
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "Zustand",
  "Zod",
] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 배경: 미묘한 그리드 패턴 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* 출시 뱃지 */}
          <Badge variant="secondary" className="mb-6 gap-1.5">
            <span className="size-1.5 rounded-full bg-primary" />
            v1.0 출시 — 지금 바로 시작하세요
          </Badge>

          {/* 메인 헤드라인 */}
          <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            현대적인{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Next.js
            </span>{" "}
            스타터킷
          </h1>

          {/* 서브 헤드라인 */}
          <p className="mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            개발 시작을 위한 완벽한 기반. TypeScript, Tailwind CSS v4, shadcn/ui가
            이미 구성되어 있습니다. Fork하고 바로 개발하세요.
          </p>

          {/* CTA 버튼 그룹 */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                시작하기
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" />
                GitHub에서 보기
              </Link>
            </Button>
          </div>

          {/* 기술 스택 뱃지 목록 */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
