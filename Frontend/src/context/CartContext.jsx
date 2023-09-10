import { createContext, useReducer, useState } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const initialState = {
    cart:[]
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)
  const [requireLogin, setRequireLogin] = useState(false)
  const [order, setOrder] = useState()


  return (
    <CartContext.Provider value={{ state, dispatch, requireLogin, setRequireLogin, order, setOrder }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }