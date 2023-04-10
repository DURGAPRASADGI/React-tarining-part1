import React from 'react'

const EXample1 = () => {
    const d=[
        {
            id:1,
            name:'durga'
        },
        {
            id:2,
            name:'prasad'
        }
    ]
  return (
    <>
    {d.map((i,index)=>(
        <li key={index}>
            {i.name}
        </li>
    ))}
      
    </>
  )
}

export default EXample1
