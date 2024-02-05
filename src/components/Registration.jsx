import React, { useState } from 'react'
import Login from './Login';
// import { Link } from 'react-router-dom';

export default function Registration(props) {
    const [data, setData] = useState({
        usermail:'',
        username: '',
        password: '',
        confirmpassword:''
    })

    let { props:usermail,props:username, props:password, props:confirmpassword } = data;

    const changeEventHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
     var localData ='';
    const SubmitEventHandler = (e) => {
        e.preventDefault();
        if(password === confirmpassword){
        console.log(data);
         var localData = data;
         localStorage.setItem("data", JSON.stringify(localData));
        }
        else{
            alert("Password Missmatch:  " +confirmpassword);
            console.log("Password mismatch");
        }
    }
    console.log(localData);
    
    return (
        <>
            <center>
                {/* <div className='container'>
                <div className='userName'>
                    <label>User Name</label><br />
                    <input id='email' type='email' placeholder='Enter Register Mail' />
                </div>
                <div className='password'>
                    <lable>Password</lable><br />
                    <input id='password' type='password' placeholder='Enter Strong Password' />
                </div>
                <button>Login</button>
                <a href='./Registration' className='registerButton' >Register Here</a>
            </div> */}
                <form onSubmit={SubmitEventHandler}>
                    <input type='text' placeholder='User Name' name='username' value={username} onChange={changeEventHandler} /><br />
                    <input type='text' placeholder='User Gmail' name='usermail' value={usermail} onChange={changeEventHandler} /><br />
                    <input type='password' placeholder='Password' name='password' value={password} onChange={changeEventHandler} /><br />
                    <input type='password' placeholder='Confirm Password' name='confirmpassword' value={confirmpassword} onChange={changeEventHandler} /><br />
                    <input type='submit' name='submit' />
                </form>
            </center><br/>
            <Login {...localData} />
           {/* {console.log(k)} */}
        </>
    )
}
