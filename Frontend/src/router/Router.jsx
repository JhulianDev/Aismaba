import { createBrowserRouter } from "react-router-dom";
import Header from "../components/general/header/Header";
import Error404 from "../components/pages/Error404/Error404";
import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";
import Branding from "../components/pages/branding/Branding";
import { colores } from "../assets/css/Colors";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Header backgroundColor={colores.colorPrincipal} />,
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
    element: <Header backgroundColor={"transparent"} />,
    children: [
      {
        path: "/branding",
        element: <Branding />
      }
    ]
  }
])

export default Router