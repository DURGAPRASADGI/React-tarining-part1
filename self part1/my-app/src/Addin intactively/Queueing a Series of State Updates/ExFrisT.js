import React, { useState } from "react";

const ExFrisT = () => {
  const [number, setnumber] = useState(0);
  const [close, setclose] = useState(0);
  const hand = async () => {
    setnumber(number + 1);
    await delay(3000);
    setnumber(number - 1);
    setclose(close + 1);
  };
  return (
    <>
      <button onClick={hand}>Call</button>
      <h1>{number}</h1>

      <h1> {close}</h1>
    </>
  );
};

const delay = (msg) => {
  return new Promise((resolve) => {
    setTimeout(resolve, msg);
  });
};
export default ExFrisT;
