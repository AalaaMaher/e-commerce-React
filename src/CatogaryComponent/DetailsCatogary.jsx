import { render } from "@testing-library/react";
import { Component } from "react";
import { Route, Link } from "react-router-dom";
import {useParams,useNavigate,useLocation, } from "react-router-dom";
import { useState, useEffect } from "react";
import CatogaryCRUD from "../Models/catogary";
const DetailsCatogary =()=>{
    let params = useParams();
    let proid=params.catogaryId
   
   // console.log(proid);
   let [catogary, setcatogary] = useState({});
   useEffect(() => { 
       CatogaryCRUD.getCatogaryById(proid).then((data) => data.json())
  .then((res) => {
     
    //  console.log(catogary);
    setcatogary(res);
      });
//    },[]);
},[catogary]);
    return (

      <>
      <div className="card text-dark  mb-3 mt-5 m-auto" style={{"max-width": "25rem","backgroundColor":"#F7D6E6"}}>
  <div className="card-header"><h1 style={{ color: '#084298' }}> Details catogary</h1></div>
  <div className="card-body">
    <h5 className="card-title text-center" style={{ color: '#084298' }} >catogary {catogary.name}</h5>
    <div className="card-text text-center">
    <strong> <p>ID</p></strong>
          <span>{catogary.id}</span>
          <strong> <p>Name</p> </strong>
          <span>{catogary.name}</span>
          <strong>  <p>Description</p></strong>
          <span>{catogary.description}</span>
        
          </div>
  </div>
  <Link to={"/catogary/display"} className="btn btn-info m-auto my-2 " style={{ backgroundColor: '#1890FF' }}>  BackToList </Link>  
</div>
  
      </>
    )

  }

export default DetailsCatogary;