import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import "./assets/css/normalize.css"
import './assets/fonts/Fonts.css'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CartProvider>
      <RouterProvider router={Router} />
    </CartProvider>
  </UserProvider>
)
