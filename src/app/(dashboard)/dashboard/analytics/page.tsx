import type { Metadata } from "next"
import { Eye, MousePointerClick, TrendingDown, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/common/page-header"

export const metadata: Metadata = {
  title: "분석",
}

// 통계 카드 타입
type AnalyticStat = {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ComponentType<{ className?: string }>
}

const ANALYTIC_STATS: AnalyticStat[] = [
  {
    title: "총 방문자",
    value: "48,291",
    change: "+18.3%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "전환율",
    value: "3.42%",
    change: "+0.8%",
    trend: "up",
    icon: MousePointerClick,
  },
  {
    title: "이탈률",
    value: "42.1%",
    change: "-2.4%",
    trend: "down",
    icon: TrendingDown,
  },
  {
    title: "평균 체류 시간",
    value: "4분 32초",
    change: "+0:23",
    trend: "up",
    icon: Clock,
  },
]

// 페이지별 방문 데이터
const PAGE_STATS = [
  { page: "/dashboard", views: 12840, bounce: "28%" },
  { page: "/dashboard/users", views: 5230, bounce: "35%" },
  { page: "/dashboard/analytics", views: 4110, bounce: "31%" },
  { page: "/dashboard/settings", views: 3890, bounce: "40%" },
  { page: "/dashboard/docs", views: 2760, bounce: "22%" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="분석" description="서비스 트래픽과 사용자 행동 데이터를 분석하세요." />

      {/* 통계 카드 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ANALYTIC_STATS.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <Badge
                  variant={stat.trend === "up" ? "default" : "destructive"}
                  className="mt-1 text-xs"
                >
                  {stat.change} 지난달 대비
                </Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 페이지별 방문 통계 */}
      <Card>
        <CardHeader>
          <CardTitle>페이지별 방문 통계</CardTitle>
          <CardDescription>최근 30일 기준 페이지 방문 수와 이탈률입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {PAGE_STATS.map((item) => (
              <div key={item.page} className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{item.page}</p>
                </div>
                <div className="ml-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{item.views.toLocaleString("ko-KR")} 회</span>
                  <span className="w-12 text-right">이탈 {item.bounce}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
