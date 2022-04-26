import React, { Component } from 'react'
import { Button, Form, Input, Modal, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const {Option} = Select

export default class AddDrinkModal extends Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  formRef = React.createRef();
  onFinish = (values) => {
    const url = "api/v1/drinks/create";
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
    }).then(() => {
      this.props.reloadDrinks();
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
        <Button type='primary' onClick={this.showModal}>
          Create New + 
        </Button>      
        <Modal title="Add New" visible={this.state.visible}
         onCancel={this.handleCancel} footer={null}>
           <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
            <Form.Item name="brand" label="Brand" rules={[{required: true, message: "Please input your brand!"}]}>
              <Input placeholder='Input your brand' />
            </Form.Item>
            <Form.Item name="style" label="Style" rules={[{ required: true, message: "Please input your style!" }]}>
              <Input placeholder="Input your style" />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please input the country of the medicine!",
                },
              ]}
            >
              <Select showSearch placeholder="Select your country" optionFilterProp="children" style={{ width: "100%" }}>
                <Option value="Japan">Japan</Option>
                <Option value="Germany">Germany</Option>
                <Option value="Netherlands">Netherlands</Option>
                <Option value="UK">UK</Option>
                <Option value="USA">USA</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the quantity!" }]}>
              <Input type="number" placeholder="How many do you desire?" />
            </Form.Item>
            <Form.Item name="description" label="Description" rules={[{ required: true, message: "Please input the description!" }]}>
              <TextArea placeholder='Input your description' />
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
