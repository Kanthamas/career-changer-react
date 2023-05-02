import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/style/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page2 from "./Page_2";
import Navbar from "./Nav";
import James from "./James";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/page-2",
    element: (
      <>
        <Navbar />
        <Page2 />
      </>
    ),
  },
  {
    path: "/james",
    element: (
      <>
        <Navbar />
        <James />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
