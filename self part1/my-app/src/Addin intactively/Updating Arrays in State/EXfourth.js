import React, { useState } from "react";

var g = [0, 0, 0];

const EXfourth = () => {
  const [car, setcar] = useState(g);
  const h = (i) => {
    const k = car.map((c, j) => {
      if (j === i) {
        return c + 1;
      }
      return c;
    });
    setcar(k);
  };
  return (
    <>
      {car.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => h(index)}>+1</button>
        </li>
      ))}
    </>
  );
};

export default EXfourth;
