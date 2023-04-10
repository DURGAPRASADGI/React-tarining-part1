import React, { useState } from "react";

const ExFRIST = () => {
  const [move, setmove] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      onPointerMove={(e) =>
        setmove((prev) => {
          return { ...prev, x: e.clientX, y: e.clientY };
        })
      }
    >
      <div
        style={{
          backgroundColor: "red",
          width: "20px",
          height: "30px",
          transform: `translate(${move.x}px,${move.y}px`,
        }}
      ></div>
    </div>
  );
};

export default ExFRIST;
