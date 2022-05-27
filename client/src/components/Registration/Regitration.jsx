import React, { useState } from 'react'
import "./Registration.css"
import IMG1 from "../../assets/Register.jfif"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Regitration = () => {



  ///////////////////initializing data

  const [user , setUser ]= useState({
    username:"",
    email:"",
    number:"",
    password:"",
    work:"",
  })
////////////////////handleUser
 let navigate = useNavigate();
const handleSignup = (e)=>{
  e.preventDefault();

  axios
      .post("/register", user)
      .then((res) => {
        alert(res.data.message)
        navigate("/login");
      })
      .catch((err ,res) => {
        alert(res.data.message)
      });
}

  return (
    <>
    <div className="container-fluid nav-bg" >
        <div className="row"  >
            <div className="col-10 mx-auto">
            <div className="row main-Register">

              <h2>Sign up</h2>
              {/* left */}
            
            <div className="col-md-6 col-sm-12 mx-auto left-Register">
    <form onSubmit={handleSignup}>
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
    <input type="email" 
    className="form-control"
    aria-describedby="emailHelp" 
    placeholder='email'
    value={user.email}
    onChange={(e)=>{
      setUser({...user , email :e.target.value})
    }}
    />
  </div>
  <div className="mb-4">
    <input type="number" 
    className="form-control"
    placeholder='enter Your Number'
    value={user.number}
    onChange={(e)=>{
      setUser({...user ,  number:e.target.value})
    }}
    />
  </div>
  <div className="mb-4">
    <input type="text" 
    className="form-control"
    placeholder='enter Your Work'
    value={user.work}
    onChange={(e)=>{
      setUser({...user , work :e.target.value})
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

  <button type="submit" className="btn btn-outline-success">Sign up</button>
  <br />
  <br />
  <button className="btn btn-outline-danger" onClick={() => navigate("/login")}>
    Already have an Account</button>
</form>
  </div>
  
 {/* Right */}
            
            
            <div className="col-md-6 col-sm-6 mx-auto right-Register">
              <img src={IMG1} alt="register image" />
            </div>
            </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Regitration