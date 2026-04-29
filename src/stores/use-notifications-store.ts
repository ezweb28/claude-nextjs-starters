import { create } from 'zustand'

interface Notification {
  id: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  timestamp: number
}

interface NotificationsState {
  // 상태
  notifications: Notification[]
  // 액션
  addNotification: (message: string, type: Notification['type']) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export const useNotificationsStore = create<NotificationsState>((set) => ({
  // 초기 상태
  notifications: [],

  // 액션 정의
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: `${Date.now()}-${Math.random()}`,
          message,
          type,
          timestamp: Date.now(),
        },
      ],
    })),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  clearNotifications: () => set({ notifications: [] }),
}))
