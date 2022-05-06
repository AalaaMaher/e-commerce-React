import { Form, Input, InputNumber, Button, Row } from 'antd';
import react, {Component} from 'react';
import ProductCRUD from "../Models/Product";
import { Route, Link, Router,Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';
import { useState, useEffect,SetStateAction } from "react";
import {useParams,useNavigate,useLocation, } from "react-router-dom";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

let EditProduct =()=>{

    let params = useParams();
    let proid=params.ProductId
    let navigation = useNavigate();
   // console.log(proid);
   let [eproduct, setproduct] = useState(null);
   let loading=true;
   useEffect(() => { 
        ProductCRUD.getProductById(proid).then((data) => data.json())
  .then((res) => {
     
     console.log(eproduct);
    setproduct(res);
    loading=false;
    
      });
  //     },[]);
},[eproduct]);
//console.log(eproduct);
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
let changeimg=(e)=>{
  let imageBase64 ="";
  getBase64(e.files[0], (result) => {
    imageBase64 = result;
  
   eproduct.image=imageBase64;
});
}

  const onFinish = (values) => {
    console.log(values.product);
    let newObject=values.product;
   
    let image =  document.getElementById("img");
    let imageBase64 = '';
    console.log(image.files[0])
    if(image.files[0] == undefined)
    {
      console.log("no change image")
      setTimeout(()=>{
        ProductCRUD.editProduct(proid,{
          id: proid,
          name: newObject.name,
          price: newObject.price,
          quantity: newObject.quantity,
          image:eproduct.image
        })
      },1000);
    }
    else {
      console.log("change image")
                getBase64(image.files[0], (result) => {
                    imageBase64 = result;
                  
                   newObject.image=imageBase64
                });
                setTimeout(()=>{
        ProductCRUD.editProduct(proid,{
          id: proid,
          name: newObject.name,
          price: newObject.price,
          quantity: newObject.quantity,
          image:newObject.image
        })
      },1000);
    }
    navigation("/product/display");
  };
 
  if(eproduct==null)
  {
      return(
          <>
          <p>loading</p>
          </>
      )
  }
  else 
  {
   
  return (
    <div className="card text-dark  mb-3 mt-5 m-auto" style={{"max-width": "30rem","backgroundColor":"#CFE2FF"}}>
    <div className="card-header"><h1 style={{ color: '#DC3545' }}> Edit Product</h1></div>
    <div className="card-body">
      <h5 className="card-title" style={{ color: '#DC3545' }} >Product {eproduct.name}</h5>
      <div className="card-text">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} 
      initialValues={
        {
        product:
        {
        id:eproduct.id,
        name:eproduct.name,
        price:eproduct.price,
        quantity:eproduct.quantity,
      // image:eproduct.image
        }
      }
      
      }>
         <Form.Item
          name={['product', 'imgsrc']}
          label="Image"
          rules={[
            {
             // required: true,
            },
          ]}
        >
       
       <img src={eproduct.image} style={{width:170,height:100}} />
        </Form.Item>
           <Form.Item
          name={['product', 'image']}
          label="Image"
          rules={[
            {
            //  required: true,
            },
          ]}
        >
       
       <input id="img"  type={"file"} onChange={changeimg} />
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
       <Row className='m-auto mx-5'>
        <div className='col-3 mx-5'>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Edit Product
          </Button>
        </Form.Item>
        </div>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" onClick={()=>  navigation("/product/display")} >
            Back To List
          </Button>
        </Form.Item>
        </Row>
      </Form>
            </div>
    </div>
   
  </div>
    
  );
    
    }
  
};



      
// ReactDOM.render (<EditProduct />, document.getElementById('root'));


export default EditProduct ;
