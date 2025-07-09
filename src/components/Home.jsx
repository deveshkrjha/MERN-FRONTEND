// export default function Home({ age }) {
//   let name = "John";
//   if(age>18)return <h2>Welcome</h2>;
//   else return <h2>Not allowed</h2>;
// }

// export default function Home({ age }) {
//   const handleClick=()=>{
//     alert("Hello");
//   };
//   const handleSubmit=(name)=>{
//     alert(`Hello ${name}`);
//   };
// return(
//   <>
//   <h2>Hello World</h2>
//   <button onClick={handleClick}>Click</button>
//   <button onClick={()=>handleSubmit("John")}>Submit</button>
//   </>
// );
// }

import { useState } from "react";
export default function Home() {
  const [score,setScore]=useState(0);
  const increment=()=>{
    setScore(score+1);
  };
return(
  <>
  <p>{score}</p>
  <button onClick={increment}>Increment Score</button>
  </>
);
}