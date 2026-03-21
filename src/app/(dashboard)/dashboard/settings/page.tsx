"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/common/page-header"
import { profileSchema, type ProfileSchema } from "@/lib/validations"

export default function SettingsPage() {
  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "홍길동",
      email: "hong@example.com",
      bio: "",
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(data: ProfileSchema) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      console.log("설정 저장:", data)
      toast.success("설정이 저장되었습니다.")
    } catch {
      toast.error("저장 실패", { description: "잠시 후 다시 시도해주세요." })
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader title="설정" description="계정 및 알림 설정을 관리하세요." />

      {/* 프로필 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>프로필 설정</CardTitle>
          <CardDescription>공개 프로필 정보를 수정합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>소개 (선택)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="간단한 자기 소개를 입력하세요"
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>최대 200자</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
                  저장하기
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Separator />

      {/* 알림 설정 (Switch 예시) */}
      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>이메일 및 푸시 알림을 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "이메일 알림", description: "새 메시지 수신 시 이메일로 알림", defaultChecked: true },
            { label: "마케팅 이메일", description: "새 기능 및 프로모션 소식", defaultChecked: false },
            { label: "보안 알림", description: "계정 로그인 및 비밀번호 변경 알림", defaultChecked: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
