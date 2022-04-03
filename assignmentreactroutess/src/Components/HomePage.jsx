import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const HomePage = () => {
  const[products,setProduct]=useState([])
   useEffect(()=>{
     axios.get("http://localhost:8080/product").then((res)=>{
       setProduct([...products])
     })
   })

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {products.map((product) => {
          return <Link to={``}>{product.image}
          {product.name}
          </Link>;
        })}
      </div>
    </>
  );
};
