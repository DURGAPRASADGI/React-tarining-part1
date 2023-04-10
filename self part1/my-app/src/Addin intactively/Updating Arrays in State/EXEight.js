import React, { useState } from "react";

const H = [
  { id: 1, name: "Durga", seen: false },
  { id: 2, name: "prasad", seen: false },
];

const EXEight = () => {
  const [det, setdet] = useState(H);
  const [sing, setsing] = useState(H);

  const hand = (id, Ben) => {
    var D = [...det];
    const y = D.find((j) => j.id === id);
    y.seen = Ben;
    setdet(D);
  };

  const handclick = (num, click) => {
    var T = [...setsing];
    const r = T.find((k) => k.id === num);
    r.seen = click;
    setsing(T);
  };

  return (
    <>
      <h1>First List</h1>
      <F a={det} ontoggle={hand} />

      <h1>secound List</h1>
      <F a={sing} ontoggle={handclick} />
    </>
  );
};

export default EXEight;

const F = ({ a, ontoggle }) => {
  return (
    <>
      {a.map((i, index) => (
        <div style={{ display: "flex" }} key={index}>
          <input
            type="checkbox"
            checked={i.seen}
            onChange={(e) => ontoggle(i.id, e.target.checked)}
          />
          <li>{i.name}</li>
        </div>
      ))}
    </>
  );
};
