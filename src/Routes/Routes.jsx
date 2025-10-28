
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/Err/ErrorPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "apps/:id",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "productDetails/:id",
        Component: ProductDetailsPage,
      },
     
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;