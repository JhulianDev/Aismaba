import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import "./assets/css/normalize.css"
import './assets/fonts/Fonts.css'
import { ShopProvider } from './context/ShopContext'
import { CartProvider } from './context/CartContext'
import { CurrencyProvider } from './context/CurrencyContext'
import { UserProvider } from './context/UserContext'
import { CurrencyProviderV2 } from './context/CurrencyContextV2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CurrencyProviderV2>
      <CurrencyProvider>
        <CartProvider>
          <ShopProvider>
            <RouterProvider router={Router} />
          </ShopProvider>
        </CartProvider>
      </CurrencyProvider>
    </CurrencyProviderV2>
  </UserProvider>
)
