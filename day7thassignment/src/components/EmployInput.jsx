import axios from "axios"
import { useState } from "react"
export const EmployInput=({takeinput,getdata})=>{

    const [state,setstate]=useState({
    name:"",
    age:"",
    email:"",
    department:"",
    married:false,
    unmarried:false
     
    })

    const handleChange=(e)=>{
        const {id,value}=e.target
        setstate({...state,
         [id]:value

        })

    }

    // const handleChangem=(e)=>{
    //     const {id,value}=e.target
    //     if(e.target.type=="checkedbox")
    //     {
    //          setstate({...state,
    //             [value]:true})
    //     }
    //     setstate({...state,
    //         [value]:false})
    // }

const submitme=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/users",state).then((res)=>{
        takeinput(state)
              
    }).then((res)=>{
        getdata();
    })

}



    return (
        
        <form onSubmit={submitme}>

     <input type="text" id ="name" placeholder="enter your name" onChange={handleChange}/>
     <input type="number" id ="age" placeholder="enter your age" onChange={handleChange}/>
     <input type="text" id="email" placeholder="enter your email" onChange={handleChange} />
     <select id="department" onChange={handleChange}>
     <option value="tech">tech</option>
     <option value="account">account</option>
      </select>
     <input type="checkbox" id="unmaried" onChange={handleChange} value="unmaried"/> 
     <input type="checkbox" id="maried" onChange={handleChange} value="married"/>  
     <input type="submit"></input>   

        </form>
        
    )

}