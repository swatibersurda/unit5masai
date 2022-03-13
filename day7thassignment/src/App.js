import logo from './logo.svg';
import './App.css';
import { EmployInput } from './components/EmployInput';


import axios from 'axios';
import { useEffect, useState } from 'react';
import { ShowList } from './components/ShowList';
function App() {
  const [me,stateMe]=useState([]);

  
     function getData()
     {
    axios.get("http://localhost:8000/users").then((res)=>{
      stateMe(res.data)
     })
    }

    useEffect(()=>{
      getData();
    },[]);
   

  const takeData=(takeinput)=>{
    stateMe([...me,takeinput])


  }


  return(
    <div>
    <EmployInput takeinput={takeData} postdata={getData}/>

    {me.map(e=>
       <ShowList obj={e}/>
      )}
    {/* <ShowList obj={me}/> */}
    </div>
    
  )
  

  
  
}

export default App;
