import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import "./assets/css/normalize.css"
import { ShopProvider } from './context/ShopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopProvider>
    <RouterProvider router={Router} />
  </ShopProvider>
)
