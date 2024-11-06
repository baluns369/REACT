import { useState } from "react";

function Task(){
    let [val,setVal]=useState({
        name:"",
        age:"",
        mark:0
    })
    const handleChange=(e)=>{
        console.log(e.target.value);
        console.log(e.target.name);
        setVal((pre)=>{
            return{...pre,[e.target.name]:e.target.value}
        })
        
        
    }
    return(
        <>
        <input type="text" onChange={handleChange} name="name" placeholder="name"/>
        <input type="text" onChange={handleChange} name="age" placeholder="age"/>
        <input type="text" onChange={handleChange} name="mark" placeholder="mark"/>
        <button onClick={()=>console.log(val)}>CLICK</button>
        </>
    )
}
export default Task