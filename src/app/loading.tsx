import { Skeleton } from "@/components/ui/skeleton"

// 글로벌 로딩 페이지 — Next.js App Router Suspense 자동 연동
// 페이지 전환 중 표시되는 스켈레톤 UI
export default function LoadingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 md:px-6">
      {/* 페이지 헤더 스켈레톤 */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72" />
      </div>

      {/* 카드 그리드 스켈레톤 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3 rounded-lg border p-5">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>

      {/* 콘텐츠 영역 스켈레톤 */}
      <div className="space-y-3 rounded-lg border p-5">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}
