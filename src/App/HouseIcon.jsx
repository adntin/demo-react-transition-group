import React, { useCallback } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function HouseIcon() {
  const navigate = useNavigate();
  const [iconId, setIconId] = useOutletContext(); // 来自父组件的上下文

  const select = useCallback(
    (id) => {
      return () => {
        setIconId(id);
        navigate(-1);
      };
    },
    [navigate, setIconId]
  );

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>House Icon</h1>
      <p>当前选择: {iconId}</p>
      <button onClick={select(1)}>第1个图标</button>
      <button onClick={select(2)}>第2个图标</button>
      <button onClick={select(3)}>第3个图标</button>
    </>
  );
}

export default HouseIcon;
