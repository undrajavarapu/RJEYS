import React, { useContext } from 'react'
import UserContext from '../context/userContext';

function Logout() {
    
//const token=localStorage.getItem(token);
let user=useContext(UserContext)


const message=

    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            localStorage.removeItem('token')
          );
        }, 300);
      });
    

  return (
    <UserContext.Consumer>
    <div >
      
        <button onClick={ ()=>
               message.then(
                alert(user.email) 
               )
               .then(window.location='/')
          }>Logout</button>
    </div>
    </UserContext.Consumer>
  )
}

export default Logout