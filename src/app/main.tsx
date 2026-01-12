import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import HomePage from "./homepage/homePage.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Category from "./category/category.tsx";
import PaymentPage from "./concertPage/payment/page.tsx";
import DetailConcert from "./concertPage/detailConcern/page.tsx";
import ConcertPage from "./concertPage/layout.tsx";
import SchedulePage from "./schedulePage/schedule.tsx";

const rootApp = document.getElementById("root");

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/concertPage",
    element: <ConcertPage />,
    children: [
      {
        index: true,
        element: <DetailConcert />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "/scheduleConcert",
    element: <SchedulePage />,
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
