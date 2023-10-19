import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/common/Home";
import About from "./pages/common/About";
import NotFound from "./pages/common/NotFound";
import Login from "./pages/common/Login";
import Events from "./pages/common/Events";
import Dashboard from "./pages/common/Dashboard";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/events/",
        element: <Events />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
