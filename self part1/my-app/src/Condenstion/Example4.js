import React from 'react'

const Example4 = () => {
  return (
    <>
      <H ispacked={true} name={'Raju'}/>
    </>
  )
}

export default Example4

export const H=({ispacked,name})=>{
    let itemlist=name
    if(ispacked){
        itemlist=name+'?'
    }
    return(
        <>
        {itemlist}
        </>
    )
}
