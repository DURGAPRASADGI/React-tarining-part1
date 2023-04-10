import React from 'react'


const Exthird = () => {
  return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault();
        alert("iam ok")


    }}>
        <input type='text'/>
        <button>send</button>
    </form>
      
    </>
  )
}

export default Exthird


