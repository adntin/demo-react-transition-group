import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function LayoutTabBar() {
  return (
    <>
      <div className="main">
        <Outlet />
      </div>
      <div className="tab-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Me">Me</NavLink>
      </div>
    </>
  );
}

export default LayoutTabBar;
