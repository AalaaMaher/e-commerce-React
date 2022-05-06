import { Component } from "react";

import { Route, Link, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";

import React from 'react';
import ReactDOM from 'react-dom';

import { useParams, useNavigate, useLocation, } from "react-router-dom";
import AddCart from "./AddCart";
import Order from "./order";
const CartList = () => {
   

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h1>carts </h1>
                        <ul>
                         
                            <li>
                                <Link to="/cart/add" className="btn btn-success">
                                    Addcart
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <Routes>
                      
                        
                            <Route element={<AddCart />} path="/add"></Route>
                            <Route path="/order" element={<Order />}></Route>
                        

                        </Routes>





                    </div>
                </div>
            </div>


        </>)






}
export default CartList;
