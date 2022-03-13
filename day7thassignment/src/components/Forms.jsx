import axios from "axios";
import { useState } from "react";

export  const Forms = ()=>{

    const [formData,setFormsData]=useState({
        username: "",
        age: "",
        email :""
    })
    // console.log(formData); 

    const handleChange=(e)=>{
        // console.log(e.target);will tell which one inputbox coming 
        // console.log(e.target.id);will tell the id of input box 
        console.log(e.target.value);
        const {id,value}=e.target;
        setFormsData({...formData,[id]:value
            
        })
    
    };

    // handlesubmit will be call by fornm synthetiic event onSubmit take forms got clicked via input type submit and should submit on db.json database

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/users",formData).then.res(()=>{
            alert("usercreatedsusefully");
            setFormsData({
                username: " ",
                age: " ",
                email :" "
            })
        })
   
    }

    return(
        <form onSubmit={handleSubmit}>
       
       <input type="text" value={formData.username} id="username" onChange={handleChange} placeholder="enter your name here"/>
       <input type="number" value={formData.age} id="age" onChange={handleChange} placeholder="enter your age" />  
       <input type="text" value={formData.email} id="email" onChange={handleChange} placeholder="enter your email"/>    
       <input type="submit"/>

       
        </form>
        
        
        
        
        
    );

}