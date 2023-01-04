import React from "react";
import { useNavigate, Link } from "react-router-dom";

function RoomList() {
  const navigate = useNavigate();

  return (
    <div className="room-list">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Room List</h1>
      <ul>
        <li>
          <Link to="1">Living Room</Link>
        </li>
        <li>
          <Link to="2">Bedroom</Link>
        </li>
        <li>
          <Link to="3">Kitchen</Link>
        </li>
        <li>
          <Link to="4">Washroom</Link>
        </li>
      </ul>
      <Link to="0">Add Room</Link>
    </div>
  );
}

export default RoomList;
