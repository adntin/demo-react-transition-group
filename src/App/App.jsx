import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import Me from "./Me";
import NoFound from "./NoFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Me/*" element={<Me />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
