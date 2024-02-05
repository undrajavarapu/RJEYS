import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import Side from './sidebar/Side'
import Content from './content/Content'




function Dashboard() {
  let user=useContext(UserContext)
 // let data=isopen;
const[isopen,Setopen]=useState(true)
const toggle=()=>{
  Setopen(!isopen)
}

  return (
   
    <div className= 'App Wrapper' >
      <Side  toggle={toggle} isOpen={isopen} ></Side> 
     <Content  toggle={toggle} isOpen={isopen}>
     
     </Content>

   
      </div>

  )
}

export default Dashboard