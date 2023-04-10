import React, { useState } from 'react'

const EXfirst = () => {
    const[open,setopen]=useState(false)
    if(open){
        return <h1>hii iam call</h1>
    }
  return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault();
        setopen(prec=>{
            return !prec
        })

    }} >
        <input type='text'/>
        <button>Send</button>
    </form>
      
    </>
  )
}

export default EXfirst
