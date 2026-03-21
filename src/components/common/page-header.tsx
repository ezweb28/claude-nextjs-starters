// 페이지 제목 + 설명을 표시하는 범용 헤더 컴포넌트
type PageHeaderProps = {
  title: string
  description?: string
  // 우측에 액션 버튼 등을 배치할 수 있는 슬롯
  action?: React.ReactNode
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
