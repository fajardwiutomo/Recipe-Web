import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Home from "./pages/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Category from "./pages/category";
import Detail from "./pages/detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/category/:categoryName/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
