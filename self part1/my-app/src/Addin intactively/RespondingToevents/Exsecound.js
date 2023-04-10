import React from 'react'

const Exsecound = () => {
  return (
    <>
      <F onClick={()=>alert("hi")}/>
      <D onClick={()=>alert("hello")}/>
    </>
  )
}

export default Exsecound

const F=({onClick})=>{
    return(
        <>
        <B onClick={onClick}>hii</B>
        
        
        </>
    )
}

const D=({onClick})=>{
    return(
        <>
                <B onClick={onClick}>buy</B>

        
        
        </>
    )
}

const B=({onClick,children})=>{
    return(
        <>
        <button onClick={onClick}>{children}</button>
        
        </>
    )
}
