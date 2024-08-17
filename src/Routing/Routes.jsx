import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import { Products } from "../Pages/Products/Products";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Products />,
        loader: async () =>
          fetch("https://products-hub-server-navy.vercel.app/productsCount"),
      },
    ],
  },
]);
