import React from "react";
import { useNavigate, Link } from "react-router-dom";

function HouseList() {
  const navigate = useNavigate();

  return (
    <div className="house-list">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>House List</h1>
      <ul>
        <li>
          <Link to="1">House 1</Link>
        </li>
        <li>
          <Link to="2">House 2</Link>
        </li>
        <li>
          <Link to="3">House 3</Link>
        </li>
        <li>
          <Link to="4">House 4</Link>
        </li>
      </ul>
      <Link to="0">Add House</Link>
    </div>
  );
}

export default HouseList;
