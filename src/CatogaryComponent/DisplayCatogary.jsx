import { Component } from "react";
import CatogaryCRUD from "../Models/catogary";
import { Route, Link, Router, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import CatogaryList from './CatogaryList';
import { useParams, useNavigate, useLocation, } from "react-router-dom";
import { useState, useEffect, SetStateAction } from "react";
import { Table, Button, Space } from 'antd';
import DetailsCatogary from "./DetailsCatogary";
import { render } from "@testing-library/react";
import { confirmAlert } from 'react-confirm-alert'; 
const DipalyCatogary = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();

    let Deletecatogary = (id) => {
        console.log(id);
        let text="Are you sure you want to delete ";
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () =>  CatogaryCRUD.deleteCatogaryById(id)
              },
              {
                label: 'No',
               // onClick: () => alert('Click No')
              }
            ]
          });
       

    };
    let [prolist, setArray] = useState([]);
    let [sortedInfo, setstoreInfo] = useState({});
    useEffect(() => {
        CatogaryCRUD.getAll().then((data) => data.json())
            .then((res) => {
                setArray(res);
                setstoreInfo();
                console.log("effect", setstoreInfo);
                console.log(prolist);
            }, [sortedInfo]);

  //  }, [setstoreInfo]);
    },[prolist]);
    const data = prolist;
    //  console.log(data);
    let handleChange = (sorter) => {

        setstoreInfo(sorter);

        console.log("onchange", sortedInfo);


    };
    let clearAll = () => {
        console.log("clearall")

        setstoreInfo({});
        console.log("clear", sortedInfo);

    };


    let columns = [
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
            //render: text => <a>{text}</a>,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.name - b.name,


        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.description - b.description,

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
                        onClick={() => Deletecatogary(record.id)}>
                        <i class="fas fa-trash" ></i>   </button>
                    <Link className="btn btn-info" navigate to={`../details/${record.id}`}>
                        <i className="fas fa-info"></i>

                    </Link>
                </Space>
            ),
        },
    ]

    // ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));

    return (

        <>
        
            <Space style={{ marginBottom: 20 }}>

                {/* <Button onClick={clearAll}>Clear sorters</Button> */}
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />

        </>
    )

}

export default DipalyCatogary