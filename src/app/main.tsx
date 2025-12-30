import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import HomePage from "./homepage/homePage.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Category from "./category/category.tsx";
import Konser from "./konser/konser.tsx";

const rootApp = document.getElementById("root");

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/konser",
    element: <Konser />,
  },
  {
    path: "/category/:idProd",
    element: <Category />,
  },
]);

createRoot(rootApp!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
