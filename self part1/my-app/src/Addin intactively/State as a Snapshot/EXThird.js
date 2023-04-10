import React, { useState } from "react";

const EXThird = () => {
  const [item, setitem] = useState("");
  const [msg, setmsg] = useState("");
  const[show,setshow]=useState(false)
  const f = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`your item is ${item} and your select item is ${msg}`);
    }, [3000]);
  };
  const ch=()=>{
    setshow(prevv=>{
        return !prevv
    })
  }
  return (
    <>
      <form onSubmit={f}>
        <label>To</label>
        <select
          onChange={(e) =>
            setmsg((pr) => {
              return e.target.value;
            })
          }
        >
          <option value={"hii"}>Hii</option>
          <option value={"hello"}>Hello</option>
        </select>
        <textarea
          placeholder="hiii"
          onChange={(e) =>
            setitem((cur) => {
              return e.target.value;
            })
          }
        />
        <button>call</button>
      </form>
      <hr></hr>
      <button onClick={ch}>changes to {show?'walk':'stop'}</button>
      <h1 style={{color:show?'green':'purple'}}>{show?'walk':'stop'}</h1>
    </>
  );
};

export default EXThird;
