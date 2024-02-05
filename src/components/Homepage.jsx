import React from 'react'
import Login from './Login'
import { Route,useNavigate,Routes } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();

  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };
  return (
    <div>
        
        <h1>HomePage</h1>
        <button onClick={navigateLogin}>Login</button>
       
    </div>
  )
}

export default Homepage