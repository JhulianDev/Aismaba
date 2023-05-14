import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404"
import MainHeaderTemplate from "../components/templates/MainHeaderTemplate"
const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainHeaderTemplate />,
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