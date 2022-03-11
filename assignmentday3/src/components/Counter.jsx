import { useState } from "react";
export function Counter(props)
{ 
//    return <div>props:{props.counter}</div> 

const x=props.counter;
console.log(x);
const [counter,setCounter]=useState(x);

const handelChange=(value)=>
{
   setCounter(counter+value);
};
const handleChangeMultiply=(value)=>
{
   setCounter(counter*value);
};



return <>
  <h1>counter:{counter}</h1>
  <button className="colorfull" onClick={()=>{handelChange(1)}}>Add</button>
  <button className="colorfull" onClick={()=>{handelChange(-1)}}>DEC</button>
  <button className="colorfull" onClick={()=>{handleChangeMultiply(2)}}>Multiply</button>


</>



    
}