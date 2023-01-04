import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import LayoutTabBar from "./LayoutTabBar";
import About from "./About";
import Contact from "./Contact";

function MeIndex() {
  return (
    <div className="me">
      <h1>Me Index</h1>
      <NavLink to="About">About</NavLink>
      <NavLink to="Contact">Contact</NavLink>
    </div>
  );
}

function Me() {
  return (
    <Routes>
      <Route element={<LayoutTabBar />}>
        <Route index element={<MeIndex />} />
      </Route>
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
}

export default Me;
