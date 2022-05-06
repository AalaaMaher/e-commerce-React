import { Form, Input, InputNumber, Button, Row } from 'antd';
import { Component } from "react";
import React from "react";
import CatogaryCRUD from "../Models/catogary";
import { Route, Link, Router, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import catogaryList from './CatogaryList';
import { useState, useEffect, SetStateAction } from "react";
import { useParams, useNavigate, useLocation, } from "react-router-dom";

let AddCatogary = () => {

  let navigation = useNavigate();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: '${label} is required!',

  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values.catogary);
    let newObject = values.catogary;
    CatogaryCRUD.addCatogary({
      id: newObject.id,
      name: newObject.name,
      description: newObject.description,
     
    })
    navigation("/catogary/display");
  };

  return (
    <div className="card text-dark  mb-3 mt-5 m-auto" style={{"max-width": "30rem","backgroundColor":"#F7D6E6"}}>
    <div className="card-header"><h1 style={{ color: '#084298' }}> Add catogary</h1></div>
    <div className="card-body">
      <h5 className="card-title" style={{ color: '#084298' }} ></h5>
      <div className="card-text">
       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['catogary', 'id']}
          label="ID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={['catogary', 'name']}
          label="Name"
          rules={[
  
            {
              required: true
  
            }
  
          ]}
  
  
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['catogary', 'description']}
          label="description"
  
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
   
        <Row className='m-auto'>
          <div className='col-3 mx-5'>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Add Catogary
              </Button>
            </Form.Item>
          </div>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" onClick={() => navigation("/catogary/display")} >
              Back To List
            </Button>
          </Form.Item>
        </Row>
      </Form>
            </div>
    </div>
   
  </div>
    
  );
};




//render(<Addcatogary />);


export default AddCatogary;
