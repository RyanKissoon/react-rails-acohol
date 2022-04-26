import React, { Component } from 'react'
import { Button, Form, Input, Modal, Select } from 'antd';
const {Option} = Select

export default class EditDrinkModal extends Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  formRef = React.createRef();
  onFinish = (values) => {
    const url = "api/v1/drinks/update";
    fetch(url, {
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
    }).catch((err) => {
      console.error("Error: " + err)
    })  
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
  }


  render() {
    return (
      <>
        <Modal title="Add New Drink ..." visible={this.state.visible}
         onCancel={this.handleCancel} footer={null}>
           <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="brand" label="Brand" rules={[{required: true, message: "Please input your drink brand!"}]}>
              <Input placeholder='Input your drink brand' />
            </Form.Item>
            <Form.Item name="style" label="Style" rules={[{ required: true, message: "Please input your beer style!" }]}>
              <Input placeholder="Input your beer style" />
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
              <Select showSearch placeholder="Select your beer country" optionFilterProp="children" style={{ width: "100%" }}>
                <Option value="Finland">Finland</Option>
                <Option value="Germany">Germany</Option>
                <Option value="Netherlands">Netherlands</Option>
                <Option value="UK">UK</Option>
                <Option value="USA">USA</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the quantity!" }]}>
              <Input type="number" placeholder="How many beers you desire?" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
           </Form>
        </Modal>  
      </>
    )
  }
}
