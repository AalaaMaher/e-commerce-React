import { Component } from "react";
import catogaryCRUD from "../Models/catogary";
import { Route, Link, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";

import React from 'react';
import ReactDOM from 'react-dom';
import DipalyCatogary from './DisplayCatogary';
import DetailsCatogary from "./DetailsCatogary";
import AddCatogary from "./AddCatogary";
import EditCatogary from "./EditCatogaty";
import { useParams, useNavigate, useLocation, } from "react-router-dom";

const CatogaryList = () => {
   

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h1>catogarys </h1>
                        <ul>
                            <li>
                                <Link to="/catogary/display" className="nav-link">
                                    catogaryList
                                </Link>
                            </li>
                            <li>
                                <Link to="/catogary/add" className="nav-link">
                                    Addcatogary
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route element={<DipalyCatogary />}  path="/display"  ></Route>

                            <Route path="/details" element={<DetailsCatogary />}>
                            <Route path=":catogaryId" element={<DetailsCatogary />} />
                            </Route>
                        
                            <Route element={<AddCatogary />} path="/add"></Route>

                            <Route path="/edit" element={<EditCatogary />}>
                            <Route path=":catogaryId" element={<EditCatogary />} />
                            
                            </Route>

                        </Routes>





                    </div>
                </div>
            </div>


        </>)






}
export default CatogaryList;
