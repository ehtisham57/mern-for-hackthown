import React, { useContext, useState } from 'react'
import "./Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IMG from "../../assets/Register.jfif"

const Login = () => {
    ///////////////////initializing data
    const [user , setUser ]= useState({
      email:"",
      password:"",
    })
let navigate = useNavigate();
    ///////////////////handleLogin
 const handleLogin = (e)=>{
   e.preventDefault();

   axios
   .post("/login", user)
   .then((res) => {
    alert(res.data.message)
     navigate("/");
  
     
   })
   .catch((err,res) => {
    alert(res.data.message)
   });
 }
 

  return (
    <>
    <div className="container-fluid nav-bg" >
    <div className="row"  >
        <div className="col-10 mx-auto">
        <div className="row main-Login">

          <h2>Login</h2>
          {/* left */}
        
        <div className="col-md-6 col-sm-12 mx-auto left-Login">
        <form onSubmit={handleLogin}>

        <div className="mb-4">
    <input type="text" 
    className="form-control"
    placeholder='username'
    value={user.username}
    onChange={(e)=>{
      setUser({...user , username :e.target.value})
    }}
    />
  </div>
<div className="mb-4">
    <input 
    type="password" 
    className="form-control"
    placeholder='password'
    value={user.password}
    onChange={(e)=>{
    setUser({...user , password :e.target.value})
    }}
    />
  </div>
<button type="submit" className="btn btn-outline-success">Login</button>
<br />
  <br />
  <button className="btn btn-outline-danger" onClick={() => navigate("/register")}>
    Don't have an Account</button>
</form>
</div>

{/* Right */}
        
        
        <div className="col-md-6 col-sm-6 mx-auto right-Login">
          <img src={IMG} alt="register image" />
        </div>
        </div>

        </div>
    </div>
</div>

</>

  )
}

export default Login