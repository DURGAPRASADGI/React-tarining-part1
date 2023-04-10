import React from "react";

const Example = () => {
  return (
    <>
      <R ispacked={true} name={"iam"} />
    </>
  );
};

export default Example;
export const R = ({ ispacked, name }) => {
  let list = name;
  return (
    <>
      <li>{ispacked ? <h1>{list + "%"}</h1> : <h1>list</h1>}</li>
    </>
  );
};
