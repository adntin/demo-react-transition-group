import React from "react";
import { Outlet } from "react-router-dom";

function LayoutSafeTop() {
  return (
    <>
      <div className="safe-top"></div>
      <Outlet />
    </>
  );
}

export default LayoutSafeTop;
