import React from 'react'

const Second = () => {
  return (
    <>
      <Items ispacked={true} name={'prasad'}/>
    </>
  )
}

export default Second

 export const Items=({ispacked,name})=>{
    return(
        <>
        <li>
            {ispacked?name+"@":name}
        </li>
        </>
    )
}