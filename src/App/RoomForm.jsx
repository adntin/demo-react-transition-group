import React from "react";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

function RoomForm() {
  const navigate = useNavigate();
  const location = useLocation();
  let { id } = useParams();
  // console.log("RoomForm", location);

  return (
    <div className="room-form">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Room Form</h1>
      <div>
        <label>房间名称：</label>
        <input type="text" />
      </div>
      <br />
      <div>
        <label>房间图标：</label>
        <Link
          to="../Icon"
          // https://github.com/remix-run/react-router/blob/v6.3.0/examples/modal/src/App.tsx#L134
          // This is the trick! Set the `backgroundLocation` in location state
          // so that when we open the modal we still see the current page in
          // the background.
          // "location": 代表当前页面, 即要父组件要保持原来的渲染
          state={{ backgroundLocation: location }}
        >
          {"请选择图标"}
        </Link>
      </div>
      <br />
      <button>{id ? "Update Save" : "Insert Save"}</button>
    </div>
  );
}

export default RoomForm;
