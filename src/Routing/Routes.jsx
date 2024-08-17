import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import { Products } from "../Pages/Products/Products";
import { PrivateRoute } from "../Pages/PrivateRoute/PrivateRoute";
import { Login } from "../Pages/Login/Login";
import { Registration } from "../Pages/Registration/Registration";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
        loader: async () =>
          fetch("https://products-hub-server-navy.vercel.app/productsCount"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
    ],
  },
]);
