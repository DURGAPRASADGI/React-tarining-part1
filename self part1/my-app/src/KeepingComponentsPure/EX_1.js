// import React from "react";
// function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }
// const EX_1 = () => {
//   let cups = [];
//   for (let i = 1; i <= 12; i++) {
//     cups.push(<Cup key={i} guest={i} />);
//   }
//   return cups;
// };

// export default EX_1;

import React from 'react'
const C=({g})=>{
  return <h1>{g}</h1>
}

const EX_1 = () => {
  let a=[]
  for(var i=0;i<5;i++){
    a.push(<C key={i} g={i}/>)
  }
  return a
    
  
}

export default EX_1
