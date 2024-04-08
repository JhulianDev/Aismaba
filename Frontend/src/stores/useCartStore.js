import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  cartItems: [],
  addToCart: (productId) => {
    const state = get();
    const isProductInCart = state.cartItems.some((item) => item.id === productId);
    if (isProductInCart) {
      return;
    } else {
      set({ cartItems: [...state.cartItems, productId] });
    }
  }
}))

export default useCartStore;