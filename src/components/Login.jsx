import axios from 'axios';
import React, {  useState } from 'react'
import Createuser from './Createuser';
import UserContext from '../context/userContext';
import Sample from './Sample';
import { useNavigate ,useHistory} from 'react-router-dom';
import Dashboard from './Dashboard';


function Login(props) {
  const navigate = useNavigate();
    const[user,Setuser]=useState({
        email:"",
        password:""
    } )
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [visibility, setvisibility] = useState();
    const styles = {
        color: "red",
        background: "#0f0",
        fontSize: "32px",
        backgroundColor: "#eee",
        width: "185px"
    };
  
    const handleLogin = async () => {
       debugger
        try {
           // const {data} = user;
            const response =   await axios.post("http://localhost:8080/api/auth/signin", user);
            
            if (response.status===200) {
                const jwt=response.data
              //console.log(response.data)
                // Update state if login is successful
                localStorage.setItem("token",jwt)
                
                setLoginSuccess(true);
                navigate('/dashboard');
                //setvisibility(false);

            } else {
                setLoginSuccess(false);
            }
        } catch (ex) {
            if(ex.response){
                const errors={...user.ex};
                errors.email=ex.response.errors;
                Setuser({errors})
            }
        }
    };
    function toggleShow() {
      setvisibility(!visibility);
    }
   // handleLogin();
    
   
  return (
    <UserContext.Provider value={user}>

<div  >

       {
<section className="h-100 gradient-form" style={{styles}.backgroundColor} >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center"> {/*https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp*/}
                  <img src="https://www.rjeys.com/wp-content/uploads/2021/04/rjeys-text-logo.png"
                     style={{width:"185px",backgroundColor:"red"}} alt="logo"/>
                  <h4 className="mt-1 mb-5 pb-1">We are The FOCUS Team</h4>
                </div>

                <form>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example11" className="form-control"
                      placeholder="Phone number or email address" onChange={(e)=>
                        {Setuser({...user,email:e.target.value})}}  value={user.email}/>
                    <label className="form-label" htmlFor="form2Example11">Username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22" className="form-control" onChange={(e)=>
    {Setuser({...user,password:e.target.value})}}
       value={user.password} />
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={
    ()=>{
        handleLogin()
    }
 }>Log
                      in</button>
                    <a className="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger" onClick={()=>{
                        (navigate('/signup')) 
                    }} >Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="small mb-0">RJEYS is an outsourced services provider that delivers Professional Services, Customer Success Management Solutions on behalf of enterprises worldwide.

A data enthusiasts with more than 13 years of IT experience in turning data to insights with telemetric integrations, reporting analysis on various business intelligence technologies

</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>}
    </div>
   
    </UserContext.Provider>
  )
}

export default Login