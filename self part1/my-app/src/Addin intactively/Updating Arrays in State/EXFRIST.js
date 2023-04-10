import React, { useState } from "react";

const EXFRIST = () => {
  const [Item, setItem] = useState([]);
  const [next, setnext] = useState(0);
  const [lot, setlot] = useState({
    name: "",
    pass: "",
  });

  const g = (e) => {
    setlot((prc) => {
      return { ...prc, [e.target.name]: e.target.value };
    });
  };

  const A = (e) => {
    e.preventDefault();
    setnext((cur) => {
      return cur + 1;
    });
    setItem((before) => {
      return [...before, { id: next, ...lot }];
    });
    console.log(Item);
  };
  const del = (id) => {
    setItem((pre) => {
      return pre.filter((itm) => id !== itm.id);
    });
  };
  return (
    <>
      <form onSubmit={A}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={lot.name}
          onChange={g}
        />
        <input
          type="password"
          placeholder="enter your password"
          name="pass"
          value={lot.pass}
          onChange={g}
        />
        <button>Submit</button>
      </form>
      {Item.map((ite, index) => (
        <div key={index}>
          <h1>{ite.name}</h1>
          <h1>{ite.pass}</h1>
          <button onClick={() => del(ite.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default EXFRIST;
