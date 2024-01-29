import React, { useState } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'

function Todo() {

    const [todo,Settodo]=useState('')
const [task,Settask]=useState([{
    id:1,
    taskname:'Lunch'
    
},{
    id:2,
    taskname:'Breakfast'
}])

let nextid=task.length
//console.log(nextid)

const saveTask = ()=>{
    

        if(todo===""){
            alert("Add something")
        }
        else{
            Settask([...task,{
                id:++nextid,
                taskname:todo
            }]
            
            )
            Settodo('')
        }
    
    
} 

{/*task.filter(
        (x)=>{
           return console.log(x.id!==id)
        }
    ) */} 
const deltask=(id)=>{
  

    Settask(task.filter((x) => x.id !== id));
}
  return (
    <div>
        <h1>TODO APP</h1>
        <input type="text"  onChange={(e)=>{ let td=e.target.value 
            Settodo(td)}} value={todo}/>
        <button onClick={saveTask} >Save</button>
       <div>
       <ul className="list-group">
          {task.map(
            (too)=>
            {
            
               return <li key={too.id} className="list-group-item">{too.taskname}
               <button type="button" className="btn btn-close btn-sm " onClick={()=>deltask(too.id) } aria-label="Close" >close</button>
               
               </li>
            
          })
        }
        </ul>
       </div>
    </div>
  )
}

export default Todo