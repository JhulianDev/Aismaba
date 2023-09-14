import { createBrowserRouter } from "react-router-dom";
import Header from "../components/general/header/Header";
import Error404 from "../components/pages/Error404/Error404";
import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import Branding from "../components/pages/branding/Branding";
import { colores } from "../assets/css/Colors";
import CreacionContenido from "../components/pages/contenido/CreacionContenido";
import Contacto from "../components/pages/contacto/Contacto";
import Gracias from "../components/pages/gracias/Gracias";
import Tienda from "../components/pages/tienda/Tienda";
import Plantilla from "../components/pages/producto/plantilla/Plantilla";
import Marca from "../components/pages/producto/marca/Marca";
import Cart from "../components/pages/carrito/Cart";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import Checkout from "../components/pages/checkout/Checkout";
import MisCompras from "../components/pages/misCompras/MisCompras";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Header color={colores.colorPrincipal} />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/servicios",
        element: <Servicios />
      },
      {
        path: "/contacto",
        element: <Contacto />
      },
      {
        path: "/gracias-compra",
        element: <Gracias />
      },
      {
        path: "/plantilla/:nombrePlantilla",
        element: <Plantilla />
      },
      {
        path: "/marca/:id",
        element: <Marca />
      },
      {
        path: "/carrito",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/mis-compras",
        element: <MisCompras />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
  },
  {
    element: <Header color={"transparent"} />,
    children: [
      {
        path: "/branding",
        element: <Branding />
      },
      {
        path: "/creacion-contenido",
        element: <CreacionContenido />
      },
      {
        path: "/tienda",
        element: <Tienda />
      }
    ]
  }
])

export default Router