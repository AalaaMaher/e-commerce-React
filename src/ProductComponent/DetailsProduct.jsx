import { render } from "@testing-library/react";
import { Component } from "react";
import { Route, Link } from "react-router-dom";
import {useParams,useNavigate,useLocation, } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCRUD from "../Models/Product";
const DetailsProduct =()=>{
    let params = useParams();
    let proid=params.ProductId
   
   // console.log(proid);
   let [product, setproduct] = useState({});
   useEffect(() => { 
        ProductCRUD.getProductById(proid).then((data) => data.json())
  .then((res) => {
     
    //  console.log(product);
    setproduct(res);
      });
//    },[]);
},[product]);
    return (

      <>
      <div className="card text-dark  mb-3 mt-5 m-auto" style={{"max-width": "25rem","backgroundColor":"#CFE2FF"}}>
  <div className="card-header"><h1 style={{ color: '#DC3545' }}> Details Product</h1></div>
  <div className="card-body">
    <h5 className="card-title text-center" style={{ color: '#DC3545' }} >Product {product.name}</h5>
    <div className="card-text text-center">
      <img src={product.image} style={{width:170,height:100}}></img>
    <strong>  <p>ID</p></strong>
          <span>{product.id}</span>
          <strong> <p>Name</p> </strong>
          <span>{product.name}</span>
          <strong>  <p>Price</p></strong>
          <span>{product.price}</span>
          <strong>  <p>Quantity</p></strong>
          <span>{product.quantity}</span>
        
          </div>
  </div>
  <Link to={"/product/display"} className="btn btn-danger m-auto my-2 " style={{ backgroundColor: '#DC3545' }}>  BackToList</Link>  
</div>
  
      </>
    )

  }

export default DetailsProduct;