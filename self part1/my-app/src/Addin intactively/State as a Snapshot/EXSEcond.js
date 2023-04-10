import React, { useState } from "react";

const EXSEcond = () => {
  const [render, setrender] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setrender((prev) => {
            return prev + 5;
          });
          setTimeout(() => {
            alert("button working");
          }, [3000]);
        }}
      >
        Click
      </button>
      {render}
    </>
  );
};

export default EXSEcond;
