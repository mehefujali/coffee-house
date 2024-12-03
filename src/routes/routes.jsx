import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
const routes = createBrowserRouter([
      {
            path : '/',
            element: <Root></Root>,
            children : [
                  {
                        path: '/',
                        element: <Navigate to={'/home'} replace></Navigate>
                  },
                  {
                        path : 'home',
                        element : <Home></Home>
                  }
            ]
      }
])
export default routes;