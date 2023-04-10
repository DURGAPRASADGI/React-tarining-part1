import React from "react";
// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li className="item">{name} ✔</li>;
//   }
//   return <li className="item">{name}</li>;
// }

// export default function First(){
//     return(
//         <>
//         <Item isPacked={true} name={"durga"}/>

//         </>
//     )
// }
const Item =({isPacked,name})=>{
    if (isPacked) {
            return <li className="item">{name} ✔</li>;
          }
           return <li className="item">{name}</li>;
        }
        


const First = () => {
  return (
    <>
      <Item isPacked={true} name={"durga"} />
    </>
  );
};

export default First;
