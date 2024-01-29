//import logo from './logo.svg';
import './App.css';
import Createuser from './components/Createuser';
import Dashboard from './components/Dashboard';
/* import ChangeBg from './components/ChangeBg';
import Counter from './components/Counter';
import FunCounter from './components/FunCounter';
import Input from './components/Input';
import Product from './components/Product';
import ProductLists from './components/ProductLists';
import "rsuite/dist/rsuite.min.css";  
import Todo from './components/Todo';
import Effect from './components/Effect'; */
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './components/Sample';
import { useState } from 'react';
import Logout from './components/Logout';
import Homepage from './components/Homepage';
import Navb from './components/Navb';

 

function App() {
 /* let prod1={
    id:'1',
    name:'dani',
    salary:12000
  }
   const[currentuser,Setcurrentuser]=useState({
    name:""

  })
  */
 
  
  
  
  
  
  return (

    <div className="App" >
      <Homepage></Homepage>
      <Dashboard></Dashboard>
      <Createuser></Createuser>
   
      {/*
      <Navb></Navb>
    
      <Effect></Effect>
     
      <Createuser></Createuser>
      
      */
      }
 
      
    
      
    </div>
  );
}

export default App;
