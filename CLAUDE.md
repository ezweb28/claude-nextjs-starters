# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 기반 모던 웹 스타터킷입니다. TypeScript, Tailwind CSS, shadcn/ui를 활용한 풀스택 웹 개발 템플릿으로, 인증 플로우, 대시보드 레이아웃, 폼 검증 등이 미리 구성되어 있습니다.

**기술 스택:**
- **프레임워크:** Next.js 16.1.6 (App Router)
- **언어:** TypeScript 5
- **스타일링:** Tailwind CSS 4, shadcn/ui
- **상태관리:** Zustand
- **폼 라이브러리:** React Hook Form + Zod (타입 안전 검증)
- **UI 컴포넌트:** Radix UI (shadcn/ui 기반)
- **테마:** next-themes (라이트/다크모드)
- **알림:** Sonner (토스트)

## 아키텍처

### 라우팅 구조 (Route Groups)

```
src/app/
├── (public)/           # 공개 페이지
│   ├── page.tsx       # 홈
│   └── about/page.tsx
├── (auth)/            # 인증 페이지 (로그인, 회원가입)
│   ├── login/page.tsx
│   └── register/page.tsx
└── (dashboard)/       # 보호된 대시보드 영역
    ├── dashboard/
    │   ├── page.tsx           # 메인 대시보드
    │   ├── users/page.tsx
    │   ├── analytics/page.tsx
    │   ├── docs/page.tsx
    │   └── settings/page.tsx
```

**라우트 그룹 활용:**
- `(public)`, `(auth)`, `(dashboard)` 등 괄호로 묶인 폴더는 URL에 포함되지 않음
- 각 그룹별로 서로 다른 레이아웃을 적용 가능
- 로그인 필요 여부에 따라 미들웨어로 보호 가능 (향후 구현)

### 레이아웃 계층 구조

```
RootLayout (src/app/layout.tsx)
  └─ Providers (테마, 토스트, 도구팁 등)
     ├─ (public) Layout
     ├─ (auth) Layout
     └─ (dashboard) Layout
        ├─ SidebarProvider (shadcn/ui)
        │  ├─ AppSidebar (네비게이션)
        │  └─ SidebarInset
        │     ├─ Topbar (헤더, 테마 토글)
        │     └─ main (콘텐츠)
```

### 컴포넌트 구조

```
src/components/
├── ui/              # shadcn/ui 컴포넌트 (버튼, 입력창, 모달 등)
├── layout/          # 공유 레이아웃 (헤더, 사이드바, 푸터)
│   ├── providers.tsx
│   ├── sidebar-nav.tsx
│   ├── topbar.tsx
│   ├── header.tsx
│   ├── footer.tsx
│   └── theme-toggle.tsx
├── common/          # 재사용 공통 컴포넌트
│   ├── page-header.tsx
│   ├── empty-state.tsx
│   └── loading-spinner.tsx
└── landing/         # 랜딩 페이지 섹션
    ├── hero-section.tsx
    ├── features-section.tsx
    └── cta-section.tsx
```

### 상태관리 (Zustand)

**파일:** `src/stores/use-app-store.ts`

```typescript
// 사용자 정보 및 UI 상태 관리
const { user, setUser } = useAppStore()
const { isSidebarOpen, toggleSidebar } = useAppStore()
```

**특징:**
- `persist` 미들웨어로 localStorage에 사용자 정보 자동 저장
- UI 상태(사이드바)는 영구 저장하지 않음

### 폼 & 검증 (React Hook Form + Zod)

**파일:** `src/lib/validations.ts`

정의된 스키마:
- `loginSchema` — 로그인 (이메일, 비밀번호)
- `registerSchema` — 회원가입 (이름, 이메일, 비밀번호 + 확인)
- `profileSchema` — 프로필 수정

**사용법:**
```typescript
import { loginSchema, LoginSchema } from "@/lib/validations"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const form = useForm<LoginSchema>({
  resolver: zodResolver(loginSchema),
  defaultValues: { email: "", password: "" },
})
```

## 공통 명령어

```bash
# 개발 서버 시작 (포트 4000)
npm run dev

# 빌드
npm build

# 프로덕션 시작 (포트 4000)
npm start

# 린트 체크
npm run lint
```

## 개발 가이드

### 새 페이지 추가

1. `src/app/(group)/path/page.tsx` 파일 생성
2. 필요시 `layout.tsx`로 그룹별 레이아웃 지정
3. 자동으로 라우팅됨

### 새 컴포넌트 추가

```typescript
// src/components/common/my-component.tsx
export function MyComponent() {
  return <div>콘텐츠</div>
}
```

**shadcn/ui 컴포넌트 추가:**
```bash
npx shadcn-cli@latest add button
```

### 폼 생성

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/lib/validations'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">제출</Button>
      </form>
    </Form>
  )
}
```

### 알림 표시

```typescript
import { toast } from 'sonner'

toast.success('성공했습니다!')
toast.error('오류 발생')
toast.loading('로딩 중...')
```

### 다크모드/라이트모드 전환

```typescript
import { useTheme } from 'next-themes'

function MyComponent() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>토글</button>
}
```

## 주요 패턴

### 경로 별칭

`tsconfig.json`에 정의된 `@/*` 별칭을 사용하여 절대 경로로 import:
```typescript
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/use-app-store'
```

### 메타데이터 자동 조합

Root layout에서 제목 템플릿 설정:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Next.js Starter Kit",
    template: "%s | Next.js Starter Kit",
  },
}
```

각 페이지에서 `export const metadata = { title: "About" }` 하면 "About | Next.js Starter Kit"으로 자동 조합됨

### Hydration 주의

`Providers` 컴포넌트가 `next-themes` 때문에 SSR/CSR 간 class 속성을 동적으로 변경하므로, Root layout에서 `suppressHydrationWarning` 사용

### 타입 안전성

- `any` 타입 사용 금지
- Zod로 폼 데이터 검증 후 타입 추출 (`z.infer<typeof schema>`)
- API 응답도 같은 방식으로 타입 정의

## 코딩 스타일

- **들여쓰기:** 2칸
- **CSS:** Tailwind CSS (인라인 클래스)
- **주석:** 한국어
- **변수/함수명:** 영어
- **반응형 필수:** `sm:`, `md:`, `lg:` 등 Tailwind 반응형 클래스 사용

## 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Zod 문서](https://zod.dev)
- [Zustand 문서](https://github.com/pmndrs/zustand)
