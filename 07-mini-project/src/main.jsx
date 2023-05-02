import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";
import "./assets/style/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./UserContext";
import Signup from "./Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
<<<<<<< HEAD
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
=======
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])
>>>>>>> 845cd43769fe56d973c77c0f9a098ed7aa431436

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
);
