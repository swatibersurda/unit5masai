import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const[oneProduct,setoneProduct]=useState({})
  const params=useParams();
  const {id}=params;
  useEffect(()=>{
    axios.get(`http://localhost:8080/product/${id}`).then((res)=>{
      setoneProduct({...res.data})
    })
    
  })
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={oneProduct.img} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{oneProduct.name}</h2>
            <h5 className="productPrice">Price : {oneProduct.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
          </div>
        </div>
      </div>
    </>
  );
};
