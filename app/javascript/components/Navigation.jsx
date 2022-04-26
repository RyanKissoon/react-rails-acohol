import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Navigation = () => {

  return (
    <div>
      <nav  style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        
        <Link to="/">Home{"  "}</Link>
        <Link to="/guest">Guest { "  "}</Link>
        <Link to="/admin">Admin {"  "} </Link>
        <Link to="/logout">{" "} Logout </Link>
        <Link to="/signup">{" "} Sign Up </Link>
        {/* <Link to="/dashboard">Dashboard</Link> */}
        {/* <Link to="/edit/:id"></Link> */}
      </nav>
      <Outlet/>
    </div>
  );
};

export default Navigation;