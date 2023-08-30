const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // return { ...state, cart: [...state.cart, action.payload]};
      const isProductInCart = state.cart.some((item) => item.nombre === action.payload.nombre);
      if (isProductInCart) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case "REMOVE_FROM_CART":
      return { ...state, cart: [...state.cart.filter((c) => c.nombre !== action.payload.nombre)] }

    case "CLEAR_CART":
      return { cart: [] }

    default:
      return state
  }
}

export default CartReducer;