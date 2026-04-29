"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { loginSchema, type LoginSchema } from "@/lib/validations"
import { useAppStore } from "@/stores/use-app-store"
import { useNotificationsStore } from "@/stores/use-notifications-store"

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useAppStore()
  const { addNotification } = useNotificationsStore()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  const { isSubmitting } = form.formState

  // 실제 구현시 API 호출로 교체
  async function onSubmit(data: LoginSchema) {
    try {
      // 예시: await signIn(data.email, data.password)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("로그인 데이터:", data)

      // 사용자 정보 저장 (실제 구현시 API 응답에서 가져옴)
      setUser({
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name: "홍길동",
        email: data.email,
      })

      addNotification("로그인 성공했습니다!", "success")
      toast.success("로그인 성공!", { description: "대시보드로 이동합니다." })
      router.push('/dashboard')
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "알 수 없는 오류"
      console.error("로그인 에러:", errorMessage)
      addNotification("로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.", "error")
      toast.error("로그인 실패", { description: "이메일 또는 비밀번호를 확인해주세요." })
    }
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>로그인</CardTitle>
        <CardDescription>계정에 로그인하세요</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* 이메일 필드 */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 비밀번호 필드 */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>비밀번호</FormLabel>
                    <Link
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      비밀번호 찾기
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
              로그인
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link href="/register" className="font-medium text-foreground hover:underline">
            회원가입
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
