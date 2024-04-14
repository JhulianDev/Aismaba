import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useOrderStore = create(
  persist(
    (set) => ({
      orderId: null,
      setOrderId: (id) => {
        set({ orderId: id })
      },
      orderPreferenceId: null,
      setOrderPreferenceId: (id) => {
        set({ orderPreferenceId: id })
      },
    }),
    {
      name: 'order-storage'
    }
  )
);

export default useOrderStore;