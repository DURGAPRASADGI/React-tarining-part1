import React, { useState } from 'react'
import { datalist } from './data';

const Exfirst = () => {
  const[index,setindex]=useState(0);
  const handlier=()=>{
    setindex(prev=>{
      return prev+1
    })
  }
let data=datalist[index]
  return (
    <>
      <button onClick={handlier}>Next</button>
      <h2>{data.name}</h2>
      <img src={data.url} alt={data.alt}/>
      <h1>{data.artist}</h1>
      <p>{data.description}</p>
     
    </>
  )
}

export default Exfirst
