import React, { useState } from 'react'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
// import useAuth from './useAuth';
// import useToken from './useToken'


const  Home = () => {
  // const token = useAuth()
  
  
  // const { token, setToken } = useToken();
  // if(!localStorage.getItem('token')) {
  //   return <Home/>
  // }
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {
      username: "user3",
      password: "pass3"
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        localStorage.setItem('token', "!!"+uname.value+"!!" + pass.value + "!!");
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderForm = (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
        <div>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </form>
    </div>
  );
  return (
    <div className="home">
      <div className="login-form">
        {/* <div className="title">Sign In</div> */}
        {isSubmitted ? <div>User is successfully logged in<Dashboard/></div> : renderForm}
      </div>
    </div>
  )
}

export default Home;