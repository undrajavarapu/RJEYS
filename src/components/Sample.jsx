import React, { useContext } from 'react'
import UserContext from '../context/userContext'
import Logout from './Logout'
import Navib from './content/Navib'



export default function Sample() {
    let user=useContext(UserContext)
  return (
    <UserContext.Consumer >
     { UserContext=>
     <>
    <Navib></Navib>
    <Logout></Logout>
    </>
    }  

    </UserContext.Consumer>
  )
}

   