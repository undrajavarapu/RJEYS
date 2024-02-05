//import logo from './logo.svg';
import './App.css';
import Createuser from './components/Createuser';
import Dashboard from './components/Dashboard';
import Counter from './components/Counter';
/* import ChangeBg from './components/ChangeBg';

import FunCounter from './components/FunCounter';
import Input from './components/Input';
import Product from './components/Product';
import ProductLists from './components/ProductLists';
import "rsuite/dist/rsuite.min.css";  
import Todo from './components/Todo';
import Effect from './components/Effect'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Sample from './components/Sample';
import Logout from './components/Logout';
import Homepage from './components/Homepage';
import Content from './components/content/Content';
import { Route, Router, Routes,useRoutes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login1 from './components/Login1';
import Registration from './components/Registration';
import { useEffect, useState } from 'react';
import Navib from './components/content/Navib';
import ProtectedRoute from './utils/ProtectedRoute';
import { element } from 'prop-types';
import Tspage from './components/timesheet/Tspage';


 

function App() {

  const [isLoggedIn, setIsLoggedIn]=useState(null)
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Sets isLoggedIn to true if token exists, false otherwise
  });


//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       event.preventDefault();
//       // Custom logic to handle the refresh
//       // Display a confirmation message or perform necessary actions
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);
// let [isOpen,Setopen]=useState(false)
// let [toggle,Settoggle]=useState()

  //const data=localStorage.getItem('token')

  //console.log(data)
 /* let prod1={
    id:'1',
    name:'dani',
    salary:12000
  }
   const[currentuser,Setcurrentuser]=useState({
    name:""

  })
  */

  // toggle = () => {
  //   Settoggle(Setopen({ isOpen: !isOpen }));
  // }
 let element = useRoutes([
    {path: '/', element:  <Login/>},
    {path: '/dashboard/*', element:<ProtectedRoute isLoggedIn={isLoggedIn}>
      <Dashboard data={localStorage.getItem('token')}  ></Dashboard>
    </ProtectedRoute>},
    
    {path: '/logout', element: <Logout/>},
    {path: '/ok', element: <Counter/>},
    {path: '/timesheet', element:<ProtectedRoute isLoggedIn={isLoggedIn}><Tspage data={localStorage.getItem('token')} isLoggedIn={isLoggedIn}/>
    </ProtectedRoute>},
    {path: '/signup', element: <Createuser/>},
  ]);

  

  return element
 

  
  // return (

  //   <div className="App wrapper">
        
      


      
      
   
  //     {/*

  //     <Routes>
  //     <Route path="/" element={<Homepage/>}/>
  //     <Route path="/login" element={<Login/>}/>
  //     <Route path="/dashboard" element={<Dashboard/> }/>
  //     </Routes>
  //     <Navb></Navb>
    
  //     <Effect></Effect>
     
  //     <Createuser></Createuser>

  //     <Dashboard></Dashboard>
  //     <Createuser></Createuser>
      
  //     */
  //     }
 
      
    
      
  //   </div>
  // );
}

export default App;


