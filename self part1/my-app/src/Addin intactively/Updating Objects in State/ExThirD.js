import React, { useState } from "react";

const ExThirD = () => {
  const [list, setlist] = useState({
    name: "durga",
    pass: "1122",
    sc: 0,
  });
  const g = () => {
    setlist((ptr) => {
      return { ...ptr, sc: ptr.sc + 1 };
    });
  };
  const g1 = (e) => {
    setlist((curr) => {
      return { ...curr, name: e.target.value };
    });
  };

  const g2 = (e) => {
    setlist((curr) => {
      return { ...curr, pass: e.target.value };
    });
  };
  return (
    <div>
      <button onClick={g}>+1</button>
      <input
        type="text"
        placeholder=""
        name="name"
        value={list.name}
        onChange={g1}
      />
      <input
        type="password"
        placeholder=""
        name="pass"
        value={list.pass}
        onChange={g2}
      />
      {JSON.stringify(list)}
    </div>
  );
};

export default ExThirD;
