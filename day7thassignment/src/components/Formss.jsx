import axios from "axios";
import { useEffect, useState } from "react"
import { DisplayList } from "./DisplayList";

export const Formss=()=> {
    const[formData,setFromData]=useState({
        name:"",
        age:"",
        address:"",
        department:"",
        // isMarried:{married:"false",unmarried:"false",non:"false"}

    })


    const[checkdata,setChekData]=useState({
        married:"false",
        unmarried:"false"
    })

    const[final,setFinal]=useState({});
   

     const handleChange=(e)=>{
       
    //    console.log(e.target.id)
        const {id,value}=e.target

         if(e.target.type=="checkbox")
         {
             setChekData({...checkdata,[id]:value})
         }


        



          setFromData({...formData,
         [id]: value
        })


        setFinal({...final,
            name:formData.name,
            age:formData.age,
            address:formData.age,
            department:formData.department,
            salary:formData.salary,
            maritalstuus:checkdata
    
        })
     }
    
    console.log(final);
     

    //  submitform

     const datasubmit=(e)=>{
         e.preventDefault();
        

        axios.post(" http://localhost:8000/users",final).then((res)=>{

            // setFinal({
            //     name:formData.name,
            //     age:formData.age,
            //     address:formData.age,
            //     department:formData.department,
            //     salary:formData.salary,
            //     maritalstuus:checkdata
       
            // })
        })
      
     }

     
console.log(final)
    //  handlesubmit

function getData()
{
    axios.get(" http://localhost:8000/users",final).then((res)=>{
        setFinal(res.data)
})
}

useEffect(()=>{
    getData();
},[])



    return(
        <form onSubmit={datasubmit}> 
      <input type="text" id="name" placeholder="enter your name" onChange={handleChange}/>
      <input type="number" id="age" placeholder="enter your age" onChange={handleChange}/>
      <input type="text" id="address" placeholder="enter your address" onChange={handleChange}/>
      <br></br>
      <label>DEPARTMENT</label>
      <select id="department" onChange={handleChange}>
     <option value="tech">tech</option>
     <option value="ac">Accounts</option>
     </select>
     <input type="checkbox"  id="  married" value="Married" onChange={handleChange} />
     <input type="checkbox"  id="unmarried" value="unMarried" onChange={handleChange} />
    <input type="submit"/> 
           

        </form>
      
       
    );
    <>{final.map((e)=>
    
        <DisplayList val={e}/>
    
        
            )} </>
       
}
    