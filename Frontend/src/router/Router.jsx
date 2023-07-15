import { createBrowserRouter } from "react-router-dom";
import HeaderTemplate from "../components/templates/HeaderTemplate";
import Home from "../components/pages/Home";
import Error404 from "../components/pages/Error404/Error404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderTemplate />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

export default Router