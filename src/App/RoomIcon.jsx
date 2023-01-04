import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function RoomIcon() {
  const navigate = useNavigate();

  const select = useCallback(
    (id) => {
      return () => {
        // TODO: 更新表单的数据
        console.log("您选择图标为:", id);
        navigate(-1);
      };
    },
    [navigate]
  );

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Room Icon</h1>
      <button onClick={select(1)}>第1个图标</button>
      <button onClick={select(2)}>第2个图标</button>
      <button onClick={select(3)}>第3个图标</button>
    </>
  );
}

export default RoomIcon;
