import { Component } from "react";
import ProductCRUD from "../Models/Product";
import { Route, Link, Router, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';
import { useParams, useNavigate, useLocation, } from "react-router-dom";
import { useState, useEffect, SetStateAction } from "react";
import { Table, Button, Space } from 'antd';
import DetailsProduct from "./DetailsProduct";
import { render } from "@testing-library/react";
import { confirmAlert } from 'react-confirm-alert'; 
const DipalyProduct = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();

    let DeleteProduct = (id) => {
        console.log(id);
        let text="Are you sure you want to delete ";
 
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () =>  ProductCRUD.deleteProductById(id)
              },
              {
                label: 'No',
               // onClick: () => alert('Click No')
              }
            ]
          });

    };
    let [prolist, setArray] = useState([]);
    let [sortedInfo, setstoreInfo] = useState(null);
    useEffect(() => {
        ProductCRUD.getAll().then((data) => data.json())
            .then((res) => {
                setArray(res);
               
                console.log(prolist);
            });
            setstoreInfo();
   // }, [sortedInfo]);
    },[prolist]);
    const data = prolist;
    //  console.log(data);
    let handleChange = (sorter) => {

        setstoreInfo(sorter);

        console.log("onchange", sortedInfo);


    };
    let clearAll = () => {
        console.log("clearall")

        setstoreInfo(null);
        console.log("clear", sortedInfo);

    };


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
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
           // sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,

        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name - b.name,


        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,

        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.quantity - b.quantity,

        },

        {
            title: 'Action',
            key: 'action',

            render: (text, record) => (
                <Space size="middle">
                    <Link className="btn btn-warning" navigate to={`../edit/${record.id}`}>
                        <i className="fa-solid fa-pen-to-square"></i>

                    </Link>
                    <button className="btn btn-danger"
                        onClick={() => DeleteProduct(record.id)}>
                        <i class="fas fa-trash" ></i>   </button>
                    <Link className="btn btn-info" navigate to={`../details/${record.id}`}>
                        <i className="fas fa-info"></i>

                    </Link>
                </Space>
            ),
        },
    ]

    // ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));
  if (!prolist.length>0)
  {
      return(
          <>
          <h1>loading</h1>
          </>
      )
  }
  else {
    return (

        <>
         
            <Space style={{ marginBottom: 20 }}>

              {/* <Button onClick={clearAll}>Clear sorters</Button>  */}
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />

        </>
    )
  }

}

export default DipalyProduct