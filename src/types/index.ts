// ==========================================
// 공통 타입 정의
// ==========================================

// API 응답 공통 래퍼 타입
export type ApiResponse<T> = {
  data: T
  message: string
  success: boolean
}

// 페이지네이션 메타 타입
export type PaginationMeta = {
  page: number
  pageSize: number
  total: number
  totalPages: number
}

// 페이지네이션이 포함된 목록 응답 타입
export type PaginatedResponse<T> = ApiResponse<T[]> & {
  meta: PaginationMeta
}

// 정렬 방향 타입
export type SortOrder = "asc" | "desc"

// 공통 엔티티 기반 타입 (DB의 공통 필드)
export type BaseEntity = {
  id: string
  createdAt: Date
  updatedAt: Date
}

// 사용자 타입
export type User = BaseEntity & {
  name: string
  email: string
  role: "admin" | "user"
  avatarUrl?: string
}

// 내비게이션 링크 타입
export type NavLink = {
  label: string
  href: string
  external?: boolean
}
