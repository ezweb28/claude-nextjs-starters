import type { LucideIcon } from "lucide-react"
import { Inbox } from "lucide-react"
import { Button } from "@/components/ui/button"

type EmptyStateProps = {
  icon?: LucideIcon
  title: string
  description?: string
  // 액션 버튼 설정 (선택적)
  action?: {
    label: string
    onClick: () => void
  }
}

// 데이터가 없을 때 표시하는 빈 상태 컴포넌트
export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center">
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
        <Icon className="size-6 text-muted-foreground" />
      </div>
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      {description && (
        <p className="mb-4 max-w-xs text-sm text-muted-foreground">{description}</p>
      )}
      {action && (
        <Button size="sm" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  )
}
