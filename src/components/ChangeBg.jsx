import React, { useState } from 'react'
import { Button } from "rsuite"; 

function ChangeBg() {
const [colors,Setcolors]=useState({
color:'black'
})  
    
  return (
    <div>
<button  onClick={()=>{ Setcolors({color:'red'})}}  color={colors.color} appearance="primary">COLOR</button>

    </div>
  )
}

export default ChangeBg

//onClick={()=>{ Setcolor({color:'red'})}}