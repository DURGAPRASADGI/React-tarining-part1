import React from 'react'

const Example3 = () => {
  return (
    <>
          <It isPacked={true} name={"durga"} />

      
    </>
  )
}

export default Example3

export const It=({isPacked,name})=>{
    return(
        <>
    <li>
        {isPacked?(
            <del>
                {name}
            </del>
        ):name}


    </li>
        
        
        </>
    )
}
