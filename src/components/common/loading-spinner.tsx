import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type LoadingSpinnerProps = {
  // 전체 화면 중앙 정렬 여부
  fullScreen?: boolean
  className?: string
}

// 로딩 상태를 표시하는 스피너 컴포넌트
export function LoadingSpinner({ fullScreen = false, className }: LoadingSpinnerProps) {
  if (fullScreen) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className={cn("size-6 animate-spin text-muted-foreground", className)} />
      </div>
    )
  }

  return (
    <Loader2 className={cn("size-4 animate-spin text-muted-foreground", className)} />
  )
}
