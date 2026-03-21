import type { Metadata } from "next"
import { BookOpen, Code2, Lightbulb, Rocket, Shield, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/common/page-header"

export const metadata: Metadata = {
  title: "문서",
}

// 문서 카테고리 타입
type DocCategory = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  articles: string[]
}

const DOC_CATEGORIES: DocCategory[] = [
  {
    title: "시작하기",
    description: "프로젝트 설치 및 기본 설정 방법을 안내합니다.",
    icon: Rocket,
    badge: "추천",
    articles: ["설치 가이드", "환경 설정", "첫 번째 프로젝트"],
  },
  {
    title: "API 레퍼런스",
    description: "모든 API 엔드포인트와 파라미터를 확인하세요.",
    icon: Code2,
    articles: ["인증 API", "사용자 API", "데이터 API"],
  },
  {
    title: "보안",
    description: "인증, 권한 관리, 보안 모범 사례를 다룹니다.",
    icon: Shield,
    articles: ["JWT 인증", "역할 기반 접근 제어", "데이터 암호화"],
  },
  {
    title: "예시 & 튜토리얼",
    description: "실제 사용 사례와 단계별 튜토리얼입니다.",
    icon: Lightbulb,
    articles: ["CRUD 구현하기", "실시간 알림", "파일 업로드"],
  },
  {
    title: "컴포넌트",
    description: "재사용 가능한 UI 컴포넌트 사용법입니다.",
    icon: BookOpen,
    articles: ["Button", "Form & Validation", "Table & Pagination"],
  },
  {
    title: "배포 & 운영",
    description: "프로덕션 배포 및 모니터링 방법을 안내합니다.",
    icon: Wrench,
    articles: ["Vercel 배포", "환경 변수 관리", "성능 최적화"],
  },
]

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="문서" description="개발에 필요한 가이드와 레퍼런스를 확인하세요." />

      {/* 문서 카테고리 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {DOC_CATEGORIES.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-base">{category.title}</CardTitle>
                  </div>
                  {category.badge && (
                    <Badge variant="default" className="text-xs">
                      {category.badge}
                    </Badge>
                  )}
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {category.articles.map((article) => (
                    <li
                      key={article}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      · {article}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
