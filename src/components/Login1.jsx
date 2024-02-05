import React, {useState} from 'react'
// import './Login.css';
//  import Registration from './Registration';



function Login1(props) {
    const [data1,setdata1] = useState({
        username:'',
        password:''
    })
    
    const {username,password} = data1;

    const changeEventHandler = (e)=>{
        setdata1({...data1,[e.target.name]:e.target.value})
    }
    
    const SubmitEventHandler = (e)=>{
        e.preventDefault();
        console.log(props);
        if (data1.username === props.username && data1.password === props.password) {
            // console.log(data1);
            // console.log("Success");
        } else {
            // console.log(props);
        }
    }

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
                <input type='text' placeholder='User Name' name='username' value={username} onChange={changeEventHandler}/><br/>
                <input type='password' placeholder='Password' name='password' value={password} onChange={changeEventHandler}/><br/>
                <input type='submit' name='submit' />
            </form>
            </center>
        </>
    )
}

export default  Login1