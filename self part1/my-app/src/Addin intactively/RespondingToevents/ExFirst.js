import React from 'react'

const ExFirst = () => {
  return (
    <>
      <H msg={"hii"}/>
      <G/>
    </>
  )
}

export default ExFirst

const H=({msg})=>{
    const hand1=()=>{
        alert("from hii")
    }
    return(
        <>
        <U onClick={hand1}>
            play'{msg}'

        </U>
        
        </>
    )
}

const G=()=>{
    const hand2=()=>{
        alert("hello")
    }
    return(
        <>
        <U onClick={hand2}>
            hello
        </U>
        
        </>
    )
}

const U=({onClick,children})=>{
    return(
        <>
        <button onClick={onClick}>{children}</button>
        
        </>
    )
}