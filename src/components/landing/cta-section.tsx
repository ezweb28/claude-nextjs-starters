import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* CTA 카드 영역
            라이트 모드: 브랜드 색상 살짝 띤 연한 카드 → 페이지에 자연스럽게 어울림
            다크 모드:  동일한 브랜드 틴트 + 테두리로 배경과 구분 */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-8 py-16 text-center dark:border-primary/15 dark:bg-primary/10 md:px-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto mb-10 max-w-md leading-relaxed text-muted-foreground">
            이 스타터킷을 Fork하고 다음 프로젝트를 시작하세요.
            설정에 시간을 낭비하지 말고 개발에 집중하세요.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* shadcn 기본 variant 사용 — CSS 변수가 라이트/다크 자동 대응 */}
            <Button size="lg" asChild>
              <Link href="/dashboard">
                대시보드 둘러보기
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
        </div>
      </div>
    </section>
  )
}
