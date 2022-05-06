import { Form, Input, InputNumber, Button, Row } from 'antd';
import { Upload, message } from 'antd';
import { Component } from "react";
import React from "react";
import ProductCRUD from "../Models/Product";
import { Route, Link, Router, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';
import { useState, useEffect, SetStateAction } from "react";
import { useParams, useNavigate, useLocation, } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
let AddProduct = () => {
//let [loading,setloading]=useState(false);
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
  let getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}


 


  const onFinish = (values) => {
    console.log(values.product);
    let newObject = values.product;
  let image =  document.getElementById("img");
let imageBase64 = '';
            getBase64(image.files[0], (result) => {
                imageBase64 = result;
               newObject.image=imageBase64
            });
            setTimeout(()=>{
    ProductCRUD.addProduct({
      id: newObject.id,
      name: newObject.name,
      price: newObject.price,
      quantity: newObject.quantity,
      image:newObject.image
    })
  },1000);
    navigation("/product/display");
  };

  return (
    <div className="card text-dark  mb-3 mt-5 m-auto" style={{"max-width": "30rem","backgroundColor":"#CFE2FF"}}>
    <div className="card-header"><h1 style={{ color: '#DC3545' }}> Add Product</h1></div>
    <div className="card-body">
      <h5 className="card-title" style={{ color: '#DC3545' }} ></h5>
      <div className="card-text">
       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
       <Form.Item
          name={['product', 'image']}
          label="Image"
          rules={[
            {
              required: true,
            },
          ]}
        >
       
       <input id="img"  type={"file"} />
        </Form.Item>
     
      
        <Form.Item
          name={['product', 'id']}
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
          name={['product', 'name']}
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
          name={['product', 'price']}
          label="Price"
  
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['product', 'quantity']}
          label="Quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Row className='m-auto'>
          <div className='col-3 mx-5'>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            </Form.Item>
          </div>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" onClick={() => navigation("/product/display")} >
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




//render(<AddProduct />);


export default AddProduct;
