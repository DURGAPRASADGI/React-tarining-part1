import React, { useState } from "react";

const S = [
  {
    id: 1,
    name: "durga",
    seen: false,
  },
  {
    id: 2,
    name: "prasad",
    seen: false,
  },
];
const ExSeven = () => {
  const [see, setsee] = useState(S);
  const h = (id, B) => {
    setsee(
      see.map((j) => {
        if (j.id === id) {
          return { ...j, seen: B };
        }
        return j;
      })
    );
  };

  return (
    <>
      {see.map((i, index) => (
        <div style={{ display: "flex" }} key={index}>
          <input
            type="checkbox"
            checked={i.seen}
            onClick={(e) => h(i.id, e.target.checked)}
          />
          <li>{i.name}</li>
        </div>
      ))}
    </>
  );
};

export default ExSeven;
