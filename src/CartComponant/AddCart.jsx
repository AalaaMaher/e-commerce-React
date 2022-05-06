import { Component } from "react";
import CartCRUD from "../Models/cart";
import { Route, Link, Router, Routes, Outlet } from "react-router-dom";
import { BrowserRouter,  Switch } from 'react-router-dom';
import { useParams, useNavigate, useLocation,HistoryRouterProps} from "react-router-dom";
import { useState, useEffect, SetStateAction } from "react";
import { Table, Button, Space,InputNumber, Row } from 'antd';
import { render } from "@testing-library/react";
import ProductCRUD from "../Models/Product";
import Login from "../login";
import { createBrowserHistory, History } from "history";
const AddCart = () => {
  
    let [prolist, setArray] = useState([]);
    let [sortedInfo, setstoreInfo] = useState({});
    let cartproduct=[];
    useEffect(() => {
        ProductCRUD.getAll().then((data) => data.json())
            .then((res) => {
                setArray(res);
              
             //   console.log("effect", setstoreInfo);
             //   console.log(prolist);
            
            }   );
            
            setstoreInfo();
          }, [setstoreInfo]);
  //  }, [prolist]);
    const data = prolist;
    //  console.log(data);
    let handleChange = (sorter) => {

        setstoreInfo(sorter);

        console.log("onchange", sortedInfo);


    };
    function onChange(value) {
        console.log('changed', value);
    }
    let navigation = useNavigate();
    const [token, setToken] = useState();
    function addorder()
    {
        console.log(token);
    //      if(!token) {
    //       console.log("log in")
    //     return (<Login setToken={setToken} />)
    //   }

        console.log(cartproduct);
        if(!(cartproduct.length>0))
        {
            alert("plz choose product first ")
        }
        else{
      
        let totalprice=0  ;
        cartproduct.forEach(element => {
            totalprice+=(element.price*element.count)
    
            
        });
        console.log(totalprice);
  
        
      navigation("../order",{state:{pro:cartproduct,total:totalprice}});
  
    }}
   let pro;
 
    let columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text,record) => (
              <div>
              <img src={record.image} style={{width:50,height:50,borderRadius:30}}/>
              </div>
                )

        },
        {
            title: 'ProductID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            // sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,

        },
        {
            title: 'ProductName',
            dataIndex: 'name',
            key: 'name',
            //render: text => <a>{text}</a>,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name - b.name,


        },
        {
            title: 'ProductPrice ',
            dataIndex: 'price',
            key: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,

        },
        {
            title: 'Quantity',
            key: 'count',

            render: (text, record) => (
       console.log(record),
                <Space size="middle">
                    <InputNumber
                        style={{
                            width: 70,
                        }}
                        defaultValue="1"
                        min="0"
                        max="10"
                        step="1"
                        id={`count${record.id}`}
                        onChange={onChange}
                        stringMode
                    />,</Space>
            )
        },


        {
            title: 'Action',
            key: 'action',

            render: (text, record) => (
               // console.log(text),
                <Space size="middle">
                <Button type="primary"  id={record.id}
               
                     onClick={e => {console.log( record.name,record.price )
                        let c= document.getElementById(`count${record.id}`).value 
                      console.log( c)  
                      cartproduct.push({
                          "name":record.name,
                          "price":record.price,
                          "count":c
                      }) 
                      alert("added"); }}> 
                    <i class="fa-solid fa-cart-plus"></i> Add To Cart
                    </Button>
                </Space>
           ),
        },
    ]
  
    return (

        <>
            
    
                
            <Button  type="primary" onClick={addorder} className=" m-3 " style={{float:"right",height:"30",width:"120",backgroundColor:"#DC3545",fontWeight:"bold"}}> 
            {/* <Link to={{pathname:"/cart/order" , state:{cartproduct}}}>order</Link>  */}
             Order Now    </Button>
      
            <Space style={{ marginBottom: 20 }}>

                {/* <Button onClick={clearAll}>Clear sorters</Button> */}
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />

        </>
    )

}
export default AddCart;