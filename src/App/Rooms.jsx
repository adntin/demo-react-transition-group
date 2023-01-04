import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import RoomList from "./RoomList";
import RoomForm from "./RoomForm";
import RoomIcon from "./RoomIcon";

function Rooms() {
  // https://github.com/remix-run/react-router/blob/v6.3.0/examples/modal/src/App.tsx#L22
  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  // "backgroundLocation": 代表父组件
  const location = useLocation();
  console.log("Rooms", location);

  return (
    <>
      {/* "location.state?.backgroundLocation": 父组件继续保持原来的渲染, "location": 正常渲染 */}
      <Routes location={location.state?.backgroundLocation || location}>
        <Route index element={<RoomList />} />
        <Route path=":id" element={<RoomForm />} />
      </Routes>
      {/* 注意: 此处是渲染子组件, 另外子组件必须要跟父组件同级, 因为父组件保持原来的渲染, 并不会渲染子组件 */}
      {location.state?.backgroundLocation && (
        <Routes>
          <Route path="Icon" element={<RoomIcon />} />
        </Routes>
      )}
    </>
  );
}

export default Rooms;
