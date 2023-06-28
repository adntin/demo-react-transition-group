import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import TransitionView from "./TransitionView";
import NoFound from "./NoFound";
import Rooms from "./Rooms";
import Houses from "./Houses";
import LayoutTabBar from "./LayoutTabBar";

function HomeIndex() {
  return (
    <div className="home">
      <h1>Home Index</h1>
      <div>
        <NavLink to="Houses">Houses Manage</NavLink>
        <NavLink to="Rooms">Room Manage</NavLink>
      </div>
    </div>
  );
}

function Home() {
  const location = useLocation();
  // console.log("Home", location);
  return (
    // <TransitionView>
    <>
      {/* 注意: "TransitionView"的子节点"Routes"必须加"location"属性, 因为需要保留两个页面元素 */}
      <Routes location={location}>
        <Route element={<LayoutTabBar />}>
          <Route index element={<HomeIndex />} />
        </Route>
        <Route path="Houses/*" element={<Houses />} />
        <Route path="Rooms/*" element={<Rooms />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </>
    // </TransitionView>
  );
}

export default Home;
