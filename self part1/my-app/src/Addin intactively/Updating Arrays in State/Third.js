import React, { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];
const Third = () => {
  const [item, setitem] = useState(initialShapes);
  const h = () => {
    // const g = item.map((i) => {
    //   if (i.type === "circle") {
    //     return { ...i, y: i.y + 100 };
    //   } else {
    //     return i;
    //   }
    // });
    // setitem(g);
    const nextShapes = item.map((shape) => {
      if (shape.type === "square") {
        // No change
        return shape;
      }
      // Return a new circle 50px below
      return {
        ...shape,
        y: shape.y + 50,
      };
    });
    // Re-render with the new array
    setitem(nextShapes);
  };
  return (
    <>
      <button onClick={h}>move is down</button>
      <div style={{ display: "flex" }}>
        {item.map((it, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "purple",
              width: "30px",
              height: "30px",
              margin: "30px",
              position: "absolute",
              top: it.y,
              left: it.x,
              borderRadius: it.type === "circle" ? "50%" : "",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Third;
