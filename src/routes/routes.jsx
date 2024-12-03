import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
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
                  },
                  {
                        path: 'addcoffee',
                        element: <AddCoffee></AddCoffee>
                  }
            ]
      }
])
export default routes;