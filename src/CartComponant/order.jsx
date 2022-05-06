import { Component } from "react";
import CartCRUD from "../Models/cart";
import { Route, Link, Router, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { useParams, useNavigate, useLocation, } from "react-router-dom";
import { useState, useEffect, SetStateAction } from "react";
import { Table, Button, Space,InputNumber } from 'antd';
import { render } from "@testing-library/react";
import ProductCRUD from "../Models/Product";




const Order =()=>{
let location = useLocation();
let navigation = useNavigate();
//console.log(location);
let productlist=[];
 productlist=location.state.pro;
// let [productlist, setArray] = useState([]);
// useEffect(() => {
//     setArray(location.state.pro)
// },[])
let totalprice=location.state.total;
console.log(productlist);
console.log(totalprice);
let cartlist=[];
let id;
CartCRUD.getAll().then((data) => data.json())
.then((res) => {
    cartlist=res
    console.log(cartlist);
 id = cartlist.length+1;

});


function addorder(){
console.log(id);
CartCRUD.addCart({
    id:id,
    products:productlist,
    totalprice:totalprice
    
})
alert("order added");
navigation("/cart/add");

}
return (
    <>

    <div className="card text-dark  mb-3 mt-5 m-auto" style={{"max-width": "30rem","backgroundColor":"#CFE2FF"}}>
    <div className="card-header"><h1 style={{ color: '#DC3545' }}> Order Details</h1></div>
    <div className="card-body">
      <h5 className="card-title" style={{ color: '#DC3545' }} ></h5>
      <div className="card-text">
   <div>
    <ul>
          {productlist.map((item) => {
            return <li> {item.name}-- Price: {item.price}-- Quantity :{item.count}</li>;
          })}
        </ul>
        <h4 >Total Price {totalprice}</h4> <br></br>
        </div>
        </div>
        <Button type="primary" onClick={addorder} style={{float:"right",backgroundColor:"#DC3545",fontWeight:"bold"}}>Verify Order</Button>
   
    </div>
   
  </div>
    </>
  )



}



export default Order;