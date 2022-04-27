import React, { Component , useState} from 'react'
import { Button, Form, Input, Modal, Select} from 'antd';
import Dashboard from './Dashboard';
const {Option} = Select
import axios from 'axios'
export default class EditDrinkModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      drink: {
        brand: '',
        style: '',
        country: '',
        quantity: '',
        description: ''
      },
      isSubmitted: false,
    }
   
  }
  
    
  // renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  formRef = React.createRef();
  
  onFinish = (values) => {
    let str = '';
    str = window.location.pathname;
    str = str.split('/')
    const id = str[str.length-1]
    const url = `/api/v1/drinks/${id}`;
    axios.delete(url).then((res) => {
     console.log(res); 
    })
    const url1 = '/api/v1/drinks/create';
    fetch(url1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then((data) => {
      if(data.ok){
        this.handleCancel();
        return data.json()
      }
      throw new Error("Network error")
    }).then(() => {
      this.setState({
        isSubmitted:true,
        visible: false
      })
    }).catch((err) => {
      console.error("Error: " + err)
    })  
    // window.location.pathname = "/";
    {isSubmitted? <Dashboard/>: ''}

  }
  
  showDrink = (id) => {
    const url = `/api/v1/drinks/${id}`;
    axios.get(url).then((res) => {
      this.setState({
        drink:res.data
      });
    })
  }
  
  componentDidMount = () => {
    let str = '';
    str = window.location.pathname;
    str = str.split('/')
    this.setState({
      visible: true,
    });
    this.showDrink(str[str.length-1]);
  }
    

  showModal = () => {
    this.setState({
      visible: true
    });  
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })  
    {<Dashboard/> }
  }


  render() {
    const {isSubmitted, visible, drink} = this.state;
    console.log(this.state);
    return (
      <>
        {isSubmitted && !visible ? <Dashboard/> :
        <Modal title="Update  Drink ..." visible={visible}
         onCancel={this.handleCancel}
         footer={null}>
           <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="brand" label="Brand" rules={[{required: true, message: "Please input your drink brand!"}]}>
              <Input placeholder={drink.brand} />
            </Form.Item>
            <Form.Item name="style" label="Style" rules={[{ required: true, message: "Please input your beer style!" }]}>
              <Input placeholder={drink.style} />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please input the country of the beer!",
                },
              ]}
            >
              <Select showSearch name="country" placeholder={drink.country} optionFilterProp="children" style={{ width: "100%" }}>
                <Option value="Finland">Finland</Option>
                <Option value="Germany">Germany</Option>
                <Option value="Netherlands">Netherlands</Option>
                <Option value="UK">UK</Option>
                <Option value="USA">USA</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the quantity!" }]}>
              <Input type="number"  placeholder={drink.quantity} />
            </Form.Item>
            <Form.Item name="description" label="Description" rules={[{ required: true, message: "Please input the description!" }]}>
              <Input  placeholder={drink.description} type="text" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
           </Form>
        </Modal>  
  }
      </>
    )
  }
}
