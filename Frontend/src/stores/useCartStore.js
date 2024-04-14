import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (product) => {
        const state = get();
        const isProductInCart = state.cartItems.some((item) => item.id === product.id);
        if (!isProductInCart) {
          set({ cartItems: [...state.cartItems, product] });
        }
      },
      removeFromCart: (productId) => {
        const state = get();
        set({ cartItems: state.cartItems.filter((item) => item.id !== productId) });
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
      totalAmount: (currencySelected) => {
        const state = get();
        const total = state.cartItems.reduce((acc, item) => {
          return acc + parseFloat(item.price[currencySelected]);
        }, 0);
        return total;
      },
    }),
    {
      name: 'cart-storage'
    }
  )
);

export default useCartStore;