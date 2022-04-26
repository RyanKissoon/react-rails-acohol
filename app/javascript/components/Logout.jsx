import React, { Component } from 'react'

export default class Logout extends Component {
  componentDidMount = () => {
    localStorage.setItem('user', '')
    localStorage.setItem('pass', '');
    localStorage.clear()
  }
  
  render() {
    
    return (
      <div>
        Cleaning......
      </div>
    )
  }
}
