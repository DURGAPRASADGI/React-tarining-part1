import React from "react";

const Third = () => {
  return (
    <>
      <D ispacked={true} name="React" />
    </>
  );
};

export default Third;

const D = ({ ispacked, name }) => {
  return (
    <>
      <h1>{ispacked && <h2>{name}</h2>}</h1>
    </>
  );
};
