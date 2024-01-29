import React from 'react'

function Product({id,name}) {
    
   
  return (
    <div>
        <h1>Prop Drilling</h1>
        <h2>{id}</h2>
        <h2>{name}</h2>
    </div>
  )
}

export default Product