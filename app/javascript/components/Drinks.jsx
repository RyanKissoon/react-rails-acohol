import { Form, Modal, Popconfirm, Table, Input} from 'antd';
import React, { Component } from 'react'
import AddDrinkModal from './AddDrinkModal';
import EditDrinkModal from './EditDrinkModal';
import {Link} from 'react-router-dom'
export default class Drinks extends Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      drink: {}
    }
  }
  columns = [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Style",
      dataIndex: "style",
      key: "style",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
    title: "",
    key: "action1",
    render: (_text, record) => (
      <Popconfirm title="Are you sure to delete this drink?" onConfirm={() => this.deleteDrink(record.id)} okText="Yes" cancelText="No">
        <a href="#" type="danger">
          Delete{" "}
        </a>
      </Popconfirm>
      
    )
   }
  ,
  {
    title: "",
    key: "action2",
    render: (_text, record) => (
      
      // <Popconfirm title="Are you sure to show this drink?" onConfirm={() => this.showDrink(record.id)} okText="Yes" cancelText="No">
      //   <a href="#" type="primary">
      //     Description Add{" "}
      //   </a>
      // </Popconfirm>
      
      <div>
        <Link to={ `/update/${record.id}`}>
          Edit{" "}
        </Link>
      </div>
      
    ),
  }
]


  
  loadDrinks = () => {
    const url = "/api/v1/drinks/index";
    fetch(url)
      .then((data)=>{
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.")
      }).then((data)=>{
        data.forEach((drink) => {
          const newEl = {
            key: drink.id,
            id: drink.id,
            brand: drink.brand,
            style: drink.style,
            country: drink.country,
            quantity: drink.quantity,
            description: drink.description
          };
          this.setState((preState)=>({
            drinks: [...preState.drinks, newEl]
          }))
        });
      }).catch(err=>console.error("Error: " + err));  
  }
  
  deleteDrink = (id) => {
    const url = `api/v1/drinks/${id}`;
    fetch(url, {
      method: "delete"
    }).then((data) => {
      if(data.ok){
        this.reloadDrinks();
        return data.json()
      }
      throw new Error("Network error.")
    }).catch((err) => {
      console.error(err)
    })
  }
  


  reloadDrinks = () => {
    this.setState({drinks: []});
    this.loadDrinks();  
  }
  componentDidMount = () => {
    this.loadDrinks();
  }
  
  render() {
    return (
      <>
        <Table className="table-striped-rows" dataSource={this.state.drinks} columns={this.columns} pagination={{pagesize: 5}} />
        <AddDrinkModal reloadDrinks={this.reloadDrinks} />
      </>
    )
  }
}
