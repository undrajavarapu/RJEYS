import React, { useContext } from 'react'
import UserContext from '../context/userContext'
import Logout from './Logout'
import Navb from './Navb'



export default function Sample() {
    let user=useContext(UserContext)
  return (
    <UserContext.Consumer>
     { UserContext=>
     <>
    <Navb></Navb>
    <Logout></Logout>
    </>
    }  

    </UserContext.Consumer>
  )
}

   