import React, { useState } from "react";
let a = [
  { id: 0, name: "durga" },
  { id: 1, name: "prasad" },
  { id: 2, name: "potu" },
  { id: 3, name: "meena" },
];
var f = 3;
const EXFIVE = () => {
  const [Art, setArt] = useState(a);
  const [name, setname] = useState("");
  const hand = () => {
    let ga = [...Art.slice(0, 1), { id: f=f+1, name: name }, ...Art.slice(1)];
    setArt(ga);
    console.log(ga);
    setname("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={hand}>Send</button>
      {Art.map((itr, index) => (
        <li key={index}>{itr.name}</li>
      ))}
    </>
  );
};

export default EXFIVE;
