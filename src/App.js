import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./components/common/Header";

// pages
import Home from "../src/pages/common/Home";
import Login from "../src/pages/common/Login";
import Dashboard from "../src/pages/common/Dashboard";
import Events from "../src/pages/common/Events";
import NotFound from "../src/pages/common/NotFound";
import About from "../src/pages/common/About";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
