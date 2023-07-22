import { createBrowserRouter } from "react-router-dom";
import HeaderTemplate from "../components/templates/HeaderTemplate";
import Error404 from "../components/pages/Error404/Error404";
import Home from "../components/pages/home/Home";
import Servicios from "../components/pages/servicios/Servicios";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderTemplate />,
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
  }
])

export default Router