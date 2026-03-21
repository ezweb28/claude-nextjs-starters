import { create } from "zustand"
import { persist } from "zustand/middleware"

// 사용자 타입 정의
type User = {
  id: string
  name: string
  email: string
}

// 앱 전역 상태 타입 정의
type AppState = {
  // 사용자 정보
  user: User | null
  setUser: (user: User | null) => void

  // 사이드바 열림/닫힘 상태 (UI 상태)
  isSidebarOpen: boolean
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

// Zustand 스토어 생성
// persist 미들웨어로 localStorage에 일부 상태 영구 저장
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // 초기 사용자 상태
      user: null,
      setUser: (user) => set({ user }),

      // 초기 사이드바 상태
      isSidebarOpen: true,
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      setSidebarOpen: (open) => set({ isSidebarOpen: open }),
    }),
    {
      name: "app-storage",      // localStorage 키 이름
      partialize: (state) => ({ // user만 영구 저장, UI 상태는 제외
        user: state.user,
      }),
    }
  )
)
