import React, { useState } from "react";

const D = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 3,
    name: "B",
  },
  {
    id: 2,
    name: "C",
  },
];

const EXSIX = () => {
  const [op, setop] = useState(D);
  const h = () => {
    const s = [...op];
    setop(s.reverse());
  };

  return (
    <>
      <button onClick={h}>reverse</button>
      {op.map((i, index) => (
        <li key={index}>{i.name}</li>
      ))}
    </>
  );
};

export default EXSIX;
