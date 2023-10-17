import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/common/Home";
import About from "./pages/common/About";
import NotFound from "./pages/common/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
