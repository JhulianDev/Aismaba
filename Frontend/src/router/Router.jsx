import { createBrowserRouter } from "react-router-dom";
import Header from "../components/general/header/Header";
import Error404 from "../components/pages/Error404/Error404";
import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import Branding from "../components/pages/branding/Branding";
import { colores } from "../assets/css/Colors";
import CreacionContenido from "../components/pages/contenido/CreacionContenido";

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
      }
    ]
  }
])

export default Router