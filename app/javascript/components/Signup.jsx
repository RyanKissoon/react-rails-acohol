import React, { useState } from 'react'
import Home from './Home';
// import useAuth from './useAuth';
// import useToken from './useToken'


const  Signup = () => {
  // const token = useAuth()
  
  
  // const { token, setToken } = useToken();
  // if(!localStorage.getItem('token')) {
  //   return <Home/>
  // }
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass, cpass } = document.forms[0];
    // console.log(uname.value, pass.value, cpass.value);
    // Find user login info
    if (pass.value != cpass.value) {
      return;
    }else if(uname.value ==""){
      return ;
    }
    const url = 'api/v1/users/create';
    const  values = {name: uname.value, password: pass.value}
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then((data) => {
      if(data.ok){
        return data.json()
      }
      throw new Error("Network error")
    }).then(() => {
      
    }).catch((err) => {
      console.error("Error: " + err);
    })
    setIsSubmitted(true);
    setErrorMessages(false)
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
        <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="cpass" required />
          {renderErrorMessage("cpass")}
        </div>
        <div className="button-container">
          <input type="submit" value="SignUp" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="signup">
      <div className="signup-form">
        {/* <div className="title">Sign In</div> */}
        {isSubmitted ? <div>User is successfully Registered in <Home/></div> : renderForm}
      </div>
    </div>
  )
}

export default Signup;