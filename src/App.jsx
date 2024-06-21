import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/style.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/error-404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error-404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;