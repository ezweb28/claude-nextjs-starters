---
description: 'Zustand 상태관리 모듈 생성 - 타입 안전성과 선택적 영속성 포함'
allowed-tools:
  [
    'Write',
    'Read',
    'Glob',
  ]
---

# Claude 명령어: Generate Store

Zustand 상태관리 스토어를 생성합니다. TypeScript 타입 안전성과 선택적 localStorage 영속성을 지원합니다.

## 사용법

```bash
/generate-store userPreferences --persist
/generate-store notifications
/generate-store appTheme --persist
```

## 파라미터

- **스토어명** (필수): 생성할 스토어의 이름 (camelCase 권장)
  - 예: `userPreferences`, `notifications`, `appTheme`
- **--persist** (선택): localStorage 영속성 활성화 플래그

## 생성되는 파일

- `src/stores/use-{storeName}-store.ts` - 스토어 정의 및 타입 포함

## 스토어 구조

### 기본 스토어 (영속성 없음)

```typescript
import { create } from 'zustand'

interface UserPreferencesState {
  // 상태 타입 정의
  theme: 'light' | 'dark'
  language: string
  // 액션 타입 정의
  setTheme: (theme: 'light' | 'dark') => void
  setLanguage: (language: string) => void
}

export const useUserPreferencesStore = create<UserPreferencesState>((set) => ({
  // 초기 상태
  theme: 'light',
  language: 'en',
  // 액션 정의
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}))
```

### 영속성 스토어 (--persist 옵션)

```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserPreferencesState {
  theme: 'light' | 'dark'
  language: string
  setTheme: (theme: 'light' | 'dark') => void
  setLanguage: (language: string) => void
}

export const useUserPreferencesStore = create<UserPreferencesState>(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'user-preferences-storage', // localStorage 키
    }
  )
)
```

## 사용 예제

### 컴포넌트에서 사용

```typescript
'use client'

import { useUserPreferencesStore } from '@/stores/use-user-preferences-store'

export function ThemeSelector() {
  const { theme, setTheme } = useUserPreferencesStore()

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      현재 테마: {theme}
    </button>
  )
}
```

### 여러 상태값 가져오기

```typescript
const { theme, language } = useUserPreferencesStore()

// 또는 선택적으로
const theme = useUserPreferencesStore((state) => state.theme)
```

## 프로세스

1. 스토어명 확인 (입력 없으면 사용자에게 요청)
2. `src/stores/` 디렉토리 확인 (없으면 생성)
3. --persist 플래그 확인
4. TypeScript 스토어 코드 생성
5. 파일 저장 및 완료 메시지 출력

## 주요 특징

- ✅ TypeScript 타입 안전성 (any 사용 금지)
- ✅ 선택적 localStorage 영속성
- ✅ 상태와 액션 인터페이스 분리
- ✅ 사용 예제 주석 포함
- ✅ 확장 가능한 구조

## 참고사항

- 스토어명은 `use{StoreName}Store` 형식으로 자동 변환됩니다
- 파일명은 자동으로 snake-case로 변환됩니다
- 기존 파일이 있으면 덮어쓰기 확인을 받습니다
- 생성 후 직접 편집하여 상태와 액션을 추가할 수 있습니다
