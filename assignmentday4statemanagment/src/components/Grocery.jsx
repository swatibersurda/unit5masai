import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { useState } from "react";
import {nanoid} from "nanoid";
export const Grocery =()=>{
    const [items,setItem]=useState([]);

    

   const addGroccery=(takevalue)=>{
   const kt = {
      id:nanoid(),
       title:takevalue,
       status:false

   };

setItem([...items,kt])

   };

const deleteGrocery=(ex)=>{
    console.log(ex);
//     const items = ['a', 'b', 'c', 'd', 'e', 'f']
// const valueToRemove = 'c'
const filteredItems = items.filter(item => item.id!== ex)
setItem(filteredItems)
}  




 return(
 <div>
     <GroceryInput addGroccery={addGroccery}/>
     {items.map((e)=> 
        //  <GroceryList value={e} toggleButton={toggleButton}/>
        <GroceryList value={e} key={e.id} deleteGrocery={ deleteGrocery}/>
     )}

 </div>

 
 );
     
};
