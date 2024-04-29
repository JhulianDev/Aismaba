import { create } from "zustand"
import { persist } from "zustand/middleware"

const useCurrencyStore = create(
  persist(
    (set) => ({
      currencySelected: "USD",
      handleCurrency: (currency) => {
        set({ currencySelected: currency })
      }
    }),
    {
      name: "currency-storage"
    }
  )
)

export default useCurrencyStore;