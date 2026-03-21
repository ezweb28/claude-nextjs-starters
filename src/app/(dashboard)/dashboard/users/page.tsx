import type { Metadata } from "next"
import { UserCheck, UserX } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PageHeader } from "@/components/common/page-header"
import type { User } from "@/types"

export const metadata: Metadata = {
  title: "사용자 관리",
}

// 샘플 사용자 데이터
const SAMPLE_USERS: User[] = [
  {
    id: "1",
    name: "김민준",
    email: "minjun@example.com",
    role: "admin",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "2",
    name: "이서연",
    email: "seoyeon@example.com",
    role: "user",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-03-02"),
  },
  {
    id: "3",
    name: "박지호",
    email: "jiho@example.com",
    role: "user",
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-03-01"),
  },
  {
    id: "4",
    name: "최수아",
    email: "sua@example.com",
    role: "user",
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-03"),
  },
  {
    id: "5",
    name: "정도현",
    email: "dohyun@example.com",
    role: "admin",
    createdAt: new Date("2023-12-05"),
    updatedAt: new Date("2024-02-28"),
  },
]

export default function UsersPage() {
  const adminCount = SAMPLE_USERS.filter((u) => u.role === "admin").length
  const userCount = SAMPLE_USERS.filter((u) => u.role === "user").length

  return (
    <div className="space-y-8">
      <PageHeader title="사용자 관리" description="등록된 사용자 목록을 확인하고 관리하세요." />

      {/* 요약 카드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">전체 사용자</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{SAMPLE_USERS.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">관리자</CardTitle>
            <UserCheck className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{adminCount}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">일반 사용자</CardTitle>
            <UserX className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{userCount}</p>
          </CardContent>
        </Card>
      </div>

      {/* 사용자 목록 테이블 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>등록된 모든 사용자를 확인합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>역할</TableHead>
                <TableHead className="hidden sm:table-cell">가입일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SAMPLE_USERS.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {/* 아바타 이니셜 */}
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                        {user.name[0]}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                      {user.role === "admin" ? "관리자" : "일반"}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {user.createdAt.toLocaleDateString("ko-KR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
