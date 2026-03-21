import { z } from "zod"

// 로그인 스키마
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .email("올바른 이메일 형식이 아닙니다"),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다"),
})

// 회원가입 스키마 (로그인 스키마 확장)
export const registerSchema = loginSchema
  .extend({
    name: z
      .string()
      .min(2, "이름은 2자 이상이어야 합니다")
      .max(50, "이름은 50자 이하여야 합니다"),
    confirmPassword: z.string().min(1, "비밀번호 확인을 입력해주세요"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  })

// 프로필 수정 스키마
export const profileSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 2자 이상이어야 합니다")
    .max(50, "이름은 50자 이하여야 합니다"),
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
  bio: z.string().max(200, "소개는 200자 이하여야 합니다").optional(),
})

// 타입 추출 — 폼 컴포넌트에서 import하여 사용
export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
export type ProfileSchema = z.infer<typeof profileSchema>
