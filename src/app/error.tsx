"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

// 글로벌 에러 바운더리 — "use client" 필수 (React Error Boundary)
// 예상치 못한 렌더링 오류 발생 시 표시됨
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // 에러 로깅 서비스(Sentry 등)로 전송
    console.error("렌더링 에러:", error)
  }, [error])

  return (
    <div className="flex min-h-[calc(100svh-14rem)] flex-col items-center justify-center px-4 text-center">
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="size-7 text-destructive" />
      </div>

      <h1 className="text-2xl font-bold">오류가 발생했습니다</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        예상치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
      </p>

      {/* 개발 환경에서만 에러 메시지 노출 */}
      {process.env.NODE_ENV === "development" && (
        <code className="mt-4 max-w-md rounded bg-muted px-3 py-2 text-xs text-muted-foreground">
          {error.message}
        </code>
      )}

      <Button className="mt-8" onClick={reset}>
        <RefreshCw className="mr-2 size-4" />
        다시 시도
      </Button>
    </div>
  )
}
