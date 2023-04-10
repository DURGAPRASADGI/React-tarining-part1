import React, { useState } from "react";
const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

const EX_1 = () => {
  const [item, setitem] = useState(initialProducts);
  const h = (id) => {
    setitem(
      item.map((j) => {
        if (j.id === id) {
          return { ...j, count: j.count + 1 };
        } else {
          return j;
        }
      })
    );
  };
  const del = (id) => {
    setitem(item.filter((k) => k.id !== id));
  };

  return (
    <>
      {item.map((i, index) => (
        <div key={index}>
          <li>
            {i.name}({i.count}) <button onClick={() => h(i.id)}>+</button>
            <button onClick={() => del(i.id)}>-</button>
          </li>
        </div>
      ))}
    </>
  );
};

export default EX_1;
