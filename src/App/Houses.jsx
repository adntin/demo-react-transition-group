import React from "react";
import { Routes, Route } from "react-router-dom";
import HouseList from "./HouseList";
import HouseForm from "./HouseForm";
import HouseIcon from "./HouseIcon";

function Houses() {
  return (
    <Routes>
      <Route index element={<HouseList />} />
      <Route path=":id" element={<HouseForm />}>
        <Route path="Icon" element={<HouseIcon />} />
      </Route>
    </Routes>
  );
}

export default Houses;
