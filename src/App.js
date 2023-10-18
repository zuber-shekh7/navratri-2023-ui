import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
