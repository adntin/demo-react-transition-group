import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link, Outlet } from "react-router-dom";

function HouseForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [iconId, setIconId] = useState(id || "1"); // 用家庭ID模拟

  useEffect(() => {
    return () => {
      setIconId(""); // 页面卸载时, 清除"icon"选择
    };
  }, [setIconId]);

  return (
    <div className="house-form">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>House Form</h1>
      <div>
        <label>家庭名称：</label>
        <input type="text" />
      </div>
      <br />
      <div>
        <label>家庭图标：</label>
        <Link to="Icon">{iconId}</Link>
      </div>
      <br />
      <button>{id !== "0" ? "Update Save" : "Insert Save"}</button>
      <Outlet context={[iconId, setIconId]} />
    </div>
  );
}

export default HouseForm;
