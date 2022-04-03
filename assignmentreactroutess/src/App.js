// import logo from './logo.svg';
// import './App.css';
// import { Routes,Route } from 'react-router-dom';
// // import {Hello} from "./Components/Hello";
// // import {About} from "./Components/About";
// // import {Navbar} from "./Components/Navbar";
// // import {ProductDetails} from "./Components/ProductDetails";
// // import { Users } from './Components/Users';
// // import { UserDetails } from './Components/UsersDetails';
// import {Home} from "./Commpo/Home";
// import {Products} from "./Commpo/Products";
// import {Navbar} from "./Commpo/Navbar";
// import { ProductDetail} from './Commpo/ProductDetail';

// // console.log(Users);
// function App() {                                   
//   return (
//     <div className="App"> 
//     <Navbar/>
//     {/* <Navbar/>                     
//       <Routes>
//         {/* here basically giving componets to specfic route */}
//       {/* <Route path='/' element={<Hello/>}/> */}
//       {/* <Route path="/about" element={<About/>}/> */}
//       {/* <Route path="/users" element={<Users/>}/> */}
//       {/* <Route path="/product/:id" element={<ProductDetails/>}/> */}
// {/* <Route path='/users/:id'element={<UserDetails/>}/> */} 
//       {/* </Routes> */}

//      <Routes>
       
//        <Route path='/' element={<Home/>}></Route>
//        <Route path="/product" element={<Products/>}></Route>
//        <Route path="/product/:id" element={<ProductDetail/>}></Route>
       
//      </Routes>



     
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Routes } from "./Componentst/Routes";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
