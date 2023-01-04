import React from "react";
import { Link } from "react-router-dom";

function NoFound() {
  return (
    <div className="about">
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoFound;