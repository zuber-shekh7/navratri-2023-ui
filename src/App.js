import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
    </>
  );
};

export default App;
