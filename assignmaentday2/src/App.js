import logo from './logo.svg';
import './App.css';

function App() {
  const mobile=[
     {heading:"Mobile Oprating System",lista:["Android","Blackberry","iPhone","Windows Phone"]},
     {heading:"Mobile Manufrature",lista:["Samsung","HTC","Micromax","Apple"]}
];
  // return <div>{mobile.map((user)=>MobileDataComponent(user))}</div>;
  return(
    <>
      {mobile.map((user)=>(<MobileDataComponent heading={user.heading} lista={user.lista}/>
      ))}
    </>
  );

}


// component
function MobileDataComponent({heading,lista})
{
  return(
    <> 
    <h1>{heading}</h1>
    {lista.map(e=>ListComponent(e))}
    </>
   

  );
}

function ListComponent(e)
{
  return(
    



    <li>{e}</li>
   
  )
}
  
    
      
//       const arr=[ 
//                   {nameo:"swati",age:24},
//                   {nameo:"deeksha",age:45}

//       ];
//         return <div>{arr.map((user)=>User(user))}</div>;

// }


// function User({nameo,age}){
//   return(
//     <div>
//       <h1>your name is:{nameo}</h1>
//       <p>your age is:{age}</p>
//     </div>
//   );
// }








export default App;
