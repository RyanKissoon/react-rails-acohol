import React, { Component } from 'react'
import {Layout} from 'antd'
import Drinks from './Drinks';
const {Content, Footer} = Layout
const  Dashboard = ()=> {
    return (
      <Layout className='layout'>
        <Content style={{padding: "0 50px"}}>
          <div className='site-layout-content' style={{margin: "100px auto"}}>
            <h1>alcohol</h1>
             <Drinks />
          </div>
        </Content>
        <Footer style={{textAlign: "center"}}>
          &copy; 
        </Footer>
      </Layout>
    )
}
export default Dashboard;