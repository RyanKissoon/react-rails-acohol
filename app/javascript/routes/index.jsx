import React  from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import AuthProvider from '../components/AuthProvider'
import Navigation from '../components/Navigation'
import ProtectedRoute from "../components/ProtectedRoute"
const App = ()=> {
  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
  };
  const handleLogout = () => {
    setToken(null);
  };
  return (
    <Router>
      <h1>React Router</h1>
      <Navigation/>
      <Routes>
        <Route index element={<Home/> } />
        {/* <Route path="home" element={<Home/>} />
        <Route path="dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      </Router>
  )
};

export default App;