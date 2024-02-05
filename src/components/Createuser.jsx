
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Createuser() {
    const[user,Setuser]=useState({
        username:"",
        password:"",
        email:"",
        confirmpassword:"",
        agree:false,
        roles:["user"]
    } ,[])



   const changeEventHandler=(e)=>{

    Setuser({...user,[e.target.id]: e.target.value })

   }
   
   const Createuser=  async()=>{
    //preventDefault();
    debugger
  try {

    console.log(user)
    

     if (user.password==user.confirmpassword){
        
          const response =   await axios.post("http://localhost:8080/api/auth/signup", user);
          
          console.log("Post created:" +response.data);
          if(response.status===200){

            const jwt=response.data
            localStorage.setItem("token",jwt)
                
                setLoginSuccess(true);
                navigate('/dashboard');
          }

          else{
            console.log("Post else created:", response.data);
            setLoginSuccess(false);
            

          }
     }
        
        
    
  

  } catch (error) {
    console.log("Post catch created:", error.response);
  }
}
    
  return (
    <div>
        <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4"  onSubmit={Createuser}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="username" value={user.username} className="form-control" onChange={changeEventHandler}/>
                      <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="email" value={user.email}  className="form-control" onChange={changeEventHandler}/>
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="password" value={user.password}  className="form-control" onChange={changeEventHandler}/>
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="confirmpassword" value={user.confirmpassword}  className="form-control" onChange={changeEventHandler}/>
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox"  value={user.agree} id="agree" onClick={changeEventHandler} />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg" onSubmit={Createuser}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

  )
}

export default Createuser