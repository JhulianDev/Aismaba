import { createBrowserRouter } from "react-router-dom";
import { coloresV2 } from "../assets/css/Colors";
import Header from "../components/general/header/Header";
import Error404 from "../components/pages/Error404/Error404";
import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import CreacionDeContenido from "../components/pages/contenido/CreacionDeContenido";
import Instakit from "../components/pages/instakit/Instakit";
import WebDesign from "../components/pages/WebDesign/WebDesign";
import Checkout from "../components/pages/checkout/Checkout";
import Gracias from "../components/pages/gracias/Gracias";
import MisCompras from "../components/pages/misCompras/MisCompras";
import Login from "../components/pages/login/Login";
import SignUp from "../components/pages/signUp/SignUp";
import Shop from "../components/pages/Shop/Shop";
import ProductV1 from "../components/pages/Product/ProductV1/ProductV1";
import CartV1 from "../components/pages/CartV1/CartV1";
import PlantillasGratuitas from "../components/pages/PlantillasGratuitas/PlantillasGratuitas";
import Proximamente from "../components/pages/Proximamente/Proximamente";
import Admin from "../components/pages/Admin/Admin";

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
        path: "/admin",
        element: <Admin />
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
        element: <Proximamente />
      },
      {
        path: "/tienda/plantilla/:id",
        element: <ProductV1 />
      },
      {
        path: "/carrito",
        element: <CartV1 />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/compra-realizada",
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
      },
      {
        path: "/plantillas-gratuitas",
        element: <PlantillasGratuitas />
      }
    ]
  }
])

export default Router