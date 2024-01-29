import React, { useState } from 'react'

function FunCounter() {
  const [count,Setcount] =useState(0)  //hook
const IncrementFive=()=>{
    for(let i=0;i<5;i++){
        Setcount(count+5)
    }
}

  return (
    <div>
        <h1>{count}</h1>
<button onClick={()=>Setcount(count+1)}>+1</button>
<button onClick={()=>Setcount(count+5)}>+5</button>
<button onClick={IncrementFive}>+5</button>
    </div>
  )
}

export default FunCounter