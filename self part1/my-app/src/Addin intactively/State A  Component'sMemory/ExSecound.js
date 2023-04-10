import React, { useState } from 'react'
import { datalist } from './data'

const ExSecound = () => {
    const[show,setshow]=useState(false)
    const[detail,setdetail]=useState(0)
    const  handclick=()=>{
        setdetail(curr=>{
            return curr+1
        })
    }

    const g=()=>{
        setshow(p=>{
            return !p
        })

    }
    var item=datalist[detail]
  return (
    <>
    <button onClick={handclick}>Next</button>
    <h1>{item.name}</h1>
    <h1>{detail}</h1>
    <button onClick={g}>{show?'hide':'show'}details</button>
      {show&&(
        <p>{item.description}</p>
      )}
      <img src={item.url} alt={item.alt}/>
    </>
  )
}

export default ExSecound
