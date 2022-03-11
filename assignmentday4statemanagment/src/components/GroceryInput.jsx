import {useState} from "react";
export const GroceryInput=({addGroccery})=>{

    const [listadd,setListadd]=useState("");

return(
    
<div>

    <input type="text" onChange={(e)=>{
        setListadd(e.target.value);
    }
    }></input>
    <button onClick={()=>{
        addGroccery(listadd)


    }}>ADD list</button>




</div>

);



};