import { Route } from "react-router";
import { Navbar } from "./Navbar";
import {HomePage } from "./HomePage"
import { ProductsPage } from "./ProductsPage";
import { NotFoundPage } from "./NotFoundPage";
export const Routes = () => {
  return (
    <>
      <Navbar />
      <Routes>
     <Route path="/" elements={<HomePage/>}></Route>
     <Route path="/product" elements={<ProductsPage/>}></Route>
     <Route path="/product/:id" elements={<ProductsPage/>}> 

     </Route>


      </Routes>
      {/* Add Routes here */}
    </>
  );
};
