
import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import {TodoInput} from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo =()=> {
    const [todos,setTodos]=useState([]);
    const [page,setPage]=useState(1);

const addTodo=(taketodata)=>{
    const data={
       
        id: nanoid(),
        title:taketodata,
        status:false

    }
    console.log(todos);

    setTodos([...todos,data])

}



// delete button
const deletebuttontodos=(ex)=>{
 const filteredDataAfterDeletion=todos.filter(e=>e.id!==ex)
 setTodos(...[filteredDataAfterDeletion]);

}

// common function getdata for get request
// http://localhost:3000/todoskey?_limit=2&_page=2

function getdata()
{
    axios.get(`http://localhost:8000/todoskey?_limit=2&_page=${page}`).then((res)=>{
         setTodos(res.data);

    })
};

  useEffect(()=>{
      getdata();
  },[page]);


    return (
<div>
    <TodoInput  addTodo={addTodo} getdata={getdata}/>
    {todos.map((e)=>
        <TodoList value={e} deletebuttontodos={deletebuttontodos}/>
    )}   
      <button onClick={()=>{
        setPage(page-1)
      }}>previuos</button>  
      <button onClick={()=>{
          setPage(page+1)
      }}>next</button>   
</div>
    )
    
}