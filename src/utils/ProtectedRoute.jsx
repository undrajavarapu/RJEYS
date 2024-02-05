import React from 'react'
import {useRoutes} from "react-router-dom"
import Login from '../components/Login';


const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
      return useRoutes([
        {path: '/', element:  <Login/>}])
    }
    return children;
  };

export default ProtectedRoute;