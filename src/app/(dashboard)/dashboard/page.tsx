import type { Metadata } from "next"
import { Users, TrendingUp, ShoppingCart, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/common/page-header"

export const metadata: Metadata = {
  title: "대시보드",
}

// 통계 카드 타입 정의
type StatCard = {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ComponentType<{ className?: string }>
}

const STAT_CARDS: StatCard[] = [
  {
    title: "총 사용자",
    value: "12,345",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "월간 매출",
    value: "₩8,450,000",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "신규 주문",
    value: "432",
    change: "-3.1%",
    trend: "down",
    icon: ShoppingCart,
  },
  {
    title: "성장률",
    value: "24.8%",
    change: "+4.6%",
    trend: "up",
    icon: TrendingUp,
  },
]

// 최근 활동 예시 데이터
const RECENT_ACTIVITY = [
  { user: "김민준", action: "새 계정 등록", time: "2분 전" },
  { user: "이서연", action: "주문 완료 (#1042)", time: "15분 전" },
  { user: "박지호", action: "프로필 업데이트", time: "1시간 전" },
  { user: "최수아", action: "결제 완료", time: "2시간 전" },
  { user: "정도현", action: "문의 남김", time: "3시간 전" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="대시보드"
        description="서비스 현황과 주요 지표를 한눈에 확인하세요."
      />

      {/* 통계 카드 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STAT_CARDS.map((stat) => {
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

      {/* 최근 활동 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>최근 발생한 주요 이벤트 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {RECENT_ACTIVITY.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* 사용자 아바타 이니셜 */}
                  <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {activity.user[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
