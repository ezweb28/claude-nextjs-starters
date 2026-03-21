import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// 글로벌 404 페이지 — Next.js App Router 규칙
// notFound() 함수 호출 시 또는 매칭되는 경로가 없을 때 렌더링됨
export default function NotFoundPage() {
  return (
    // Header/Footer 높이(약 14rem)를 제외한 영역에서 중앙 정렬
    <div className="flex min-h-[calc(100svh-14rem)] flex-col items-center justify-center px-4 text-center">
      {/* 큰 404 숫자 */}
      <p className="select-none text-[8rem] font-extrabold leading-none text-muted-foreground/20 md:text-[12rem]">
        404
      </p>

      <h1 className="mt-4 text-2xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        요청하신 페이지가 존재하지 않거나 이동 또는 삭제되었습니다.
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            홈으로 돌아가기
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard">대시보드</Link>
        </Button>
      </div>
    </div>
  )
}
