import { useState } from "react"
import axios from "axios";

export const TodoInput=({addTodo,getdata})=>{
    const [text,setText]=useState("");
   return (
       <div>
       
       <input type="text" onChange={(e)=>{
           setText(e.target.value)
           console.log(e.target.value)
       }} />

       <button onClick={()=>{
          
    //   applying postmethod here when use do click on save todo data got added in db.json
       
    axios.post("http://localhost:8000/todoskey",{
        title: text,
        done: false
      }).then(()=> {
          getdata();

   });
      addTodo(text);



       }}> SAVE TO DO</button>
       
       
       </div>
   )

  


   
  
   
}