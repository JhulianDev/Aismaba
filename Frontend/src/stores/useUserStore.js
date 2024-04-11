import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set, get) => ({
      userData: {},
      requiresLogin: false,
      setUserData: (data) => {
        set({ userData: data })
      },
      setRequiresLogin: (isLoginRequired) => {
        set({ requiresLogin: isLoginRequired })
      }
    }),
    {
      name: 'user-storage'
    }
  )
);

export default useUserStore;