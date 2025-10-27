// import { createBrowserRouter } from "react-router";

// import MainLayout from "../Layouts/MainLayout";
// import Home from "../Pages/Home/Home";
// import Apps from "../Pages/Apps/Apps";
// import Installation from "../Pages/Installation/Installation";
// import ErrorPage from "../Pages/Err/ErrorPage";
// import ProductDetails from "../Pages/ProductDetailsPage/ProductDetailsPage";
// import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
// import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: MainLayout,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         Component: Home,
//       },
//       {
//         path: "apps",
//         Component: Apps,
//       },
//       {
//         path: "installation",
//         Component: Installation,
//       },
//       {
//         path: "productDetails/:id",
//         Component: ProductDetailsPage,
//       },
//       {
//         path: "PrivacyPolicy",
//         Component: PrivacyPolicy,
//       },
//     ],
//   },
// ]);

// export default router;


// import { createBrowserRouter } from "react-router-dom"; // ✅ Fixed import

// import MainLayout from "../Layouts/MainLayout";
// import Home from "../Pages/Home/Home";
// import Apps from "../Pages/Apps/Apps";
// import Installation from "../Pages/Installation/Installation";
// import ErrorPage from "../Pages/Err/ErrorPage";
// import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
// import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: MainLayout,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         Component: Home,
//       },
//       {
//         path: "apps",
//         Component: Apps,
//       },
//       {
//         path: "installation",
//         Component: Installation,
//       },
//       {
//         path: "productDetails/:id",
//         Component: ProductDetailsPage,
//       },
//       {
//         path: "PrivacyPolicy",
//         Component: PrivacyPolicy,
//       },
//     ],
//   },
// ]);

// export default router;
// src/Routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/Err/ErrorPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

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
        path: "apps/:id",  // ✅ URL path parameter add করুন
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
      {
        path: "PrivacyPolicy",
        Component: PrivacyPolicy,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;