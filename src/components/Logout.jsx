import React from 'react'

function Logout() {
    
//const token=localStorage.getItem(token);
const message=

    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            localStorage.removeItem('token')
          );
        }, 300);
      });
    

  return (
    <div>
        <button onClick={ ()=>
               message.then(
                alert("Hello")
               )
               .then(window.location='/')
          }>Logout</button>
    </div>
  )
}

export default Logout