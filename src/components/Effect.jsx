import React, {  useState } from 'react'
import UseDocumentTitle from '../hooks/UseDocumentTitle'


function Effect() {
const [count,Setcount]=useState(0)
const [name,Setname]=useState('')
    UseDocumentTitle(`${name} has clicked ${count} times`)

  return (
    <div>
        <input onChange={(e)=>{
           return Setname(e.target.value) 
        }}></input>
<img onDoubleClick={()=>{
    Setcount(count+1) 
}} onMouseOver={()=>{"hi"}} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height={"92"} width={"272"}/>
<h1>{name} has clicked {count} times</h1>
    </div>
  )
}

export default Effect