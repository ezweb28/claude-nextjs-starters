import type { LucideIcon } from "lucide-react"
import {
  Zap,
  Shield,
  Palette,
  Layout,
  Layers,
  Rocket,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// 기능 카드 타입 정의
type Feature = {
  icon: LucideIcon
  title: string
  description: string
  badge: string
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "빠른 시작",
    description:
      "설정 없이 즉시 개발을 시작하세요. 모든 도구가 미리 구성되어 있어 바로 기능 개발에 집중할 수 있습니다.",
    badge: "DX",
  },
  {
    icon: Shield,
    title: "TypeScript 완전 지원",
    description:
      "strict 모드로 타입 안전성을 보장합니다. any 타입 없는 코드베이스로 런타임 에러를 사전에 방지합니다.",
    badge: "타입 안전",
  },
  {
    icon: Palette,
    title: "다크 모드",
    description:
      "next-themes와 CSS 변수 기반의 완벽한 다크/라이트 모드 지원. 시스템 설정도 자동으로 감지합니다.",
    badge: "테마",
  },
  {
    icon: Layout,
    title: "3가지 레이아웃 패턴",
    description:
      "공개 페이지, 인증 페이지, 대시보드 레이아웃을 Route Groups로 완벽 분리. 즉시 확장 가능합니다.",
    badge: "반응형",
  },
  {
    icon: Layers,
    title: "shadcn/ui 컴포넌트",
    description:
      "New York 스타일의 아름다운 UI 컴포넌트 25종 이상 사전 설치. 폼, 테이블, 다이얼로그 모두 준비됨.",
    badge: "UI",
  },
  {
    icon: Rocket,
    title: "프로덕션 준비",
    description:
      "react-hook-form + zod 폼 검증, zustand 상태관리, sonner 토스트까지. 검증된 라이브러리로 구성.",
    badge: "배포",
  },
]

export function FeaturesSection() {
  return (
    // id 앵커: 헤더 nav의 "/#features" 링크와 연결
    <section id="features" className="bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* 섹션 헤더 */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            기능
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            개발에 필요한 모든 것이 준비되어 있습니다
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            검증된 라이브러리와 패턴으로 구성된 스타터킷으로 반복 작업을 줄이고
            비즈니스 로직에 집중하세요.
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  {/* 아이콘 컨테이너 */}
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
