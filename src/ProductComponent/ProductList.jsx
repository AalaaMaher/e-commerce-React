import { Component } from "react";
import ProductCRUD from "../Models/Product";
import { Route, Link, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";

import React from 'react';
import ReactDOM from 'react-dom';
import DipalyProduct from './DisplayProduct';
import DetailsProduct from "./DetailsProduct";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { useParams, useNavigate, useLocation, } from "react-router-dom";

const ProductList = () => {
   

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h1>Products </h1>
                        <ul>
                            <li>
                                <Link to="/product/display" className="nav-link">
                                    ProductList
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/add" className="nav-link">
                                    AddProduct
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route element={<DipalyProduct />}  path="/display"  ></Route>

                            <Route path="/details" element={<DetailsProduct />}>
                            <Route path=":ProductId" element={<DetailsProduct />} />
                            </Route>
                        
                            <Route element={<AddProduct />} path="/add"></Route>

                            <Route path="/edit" element={<EditProduct />}>
                            <Route path=":ProductId" element={<EditProduct />} />
                            
                            </Route>

                        </Routes>





                    </div>
                </div>
            </div>


        </>)






}
export default ProductList;
