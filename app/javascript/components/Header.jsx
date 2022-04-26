import React from 'react'
import { Layout, Menu } from 'antd'


const Header = () => {
  const {Header} = Layout;
  return (
    <Header>
      <div className='logo'>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Our Services</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
        </Menu>
      </div>
    </Header>
  )
}

export default Header
