import { useState } from "react";

function Task(){
  let [count,setCount]=useState(true)
  
  function increment(){
    setCount(!count)
  }
  console.log(count);
  
  return(
    <>
    <button  onClick={increment} style={count?{backgroundColor:"green"}:{backgroundColor:"red"}}>count</button>
    </>
  )
}
export default Task