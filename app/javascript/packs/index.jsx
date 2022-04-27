// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../components/App'
import Home from '../components/Home'
import Admin from '../components/Admin'
import Guest from '../components/Guest'
import 'antd/dist/antd.css';
import Logout from '../components/Logout';
import Signup from '../components/Signup'
import EditDrinkModal from '../components/EditDrinkModal';
import Dashboard from '../components/Dashboard';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
          <Route path="/guest" element={<Guest/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/update/:id" element={<EditDrinkModal/>}/>
          <Route path='/signup' render={()=><Signup user={this.props.user} />} element={<Signup/>} />
          <Route path="*" element={
            <div style={{pading: "1rem"}}>
              <p>There's nothing here!</p>
            </div>
          }/>
          
        </Route>
      </Routes>
    </Router>,
    document.getElementById('root')
  )
})
