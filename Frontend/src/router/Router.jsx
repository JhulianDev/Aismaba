import { createBrowserRouter } from "react-router-dom";
import { coloresV2 } from "../assets/css/Colors";
import Header from "../components/general/header/Header";
import Error404 from "../components/pages/Error404/Error404";
import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import CreacionDeContenido from "../components/pages/contenido/CreacionDeContenido";
import Instakit from "../components/pages/instakit/Instakit";
import WebDesign from "../components/pages/WebDesign/WebDesign";
import Tienda from "../components/pages/tienda/Tienda";
import Plantilla from "../components/pages/producto/plantilla/Plantilla";
import Marca from "../components/pages/producto/marca/Marca";
import Cart from "../components/pages/carrito/Cart";
import Checkout from "../components/pages/checkout/Checkout";
import Gracias from "../components/pages/gracias/Gracias";
import MisCompras from "../components/pages/misCompras/MisCompras";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import Shop from "../components/pages/Shop/Shop";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Header color={coloresV2.colorPrincipal} />,
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
        path: "/creacion-de-contenido",
        element: <CreacionDeContenido />
      },
      {
        path: "/instakit",
        element: <Instakit />
      },
      {
        path: "/diseno-web",
        element: <WebDesign />
      },
      {
        path: "/tienda",
        element: <Shop />
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
        path: "/gracias-compra",
        element: <Gracias />
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
  }
])

export default Router