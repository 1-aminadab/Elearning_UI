import React from 'react'
import "./Login.css"
import { Navigate, useNavigate } from 'react-router-dom'
import SingUpImage from "../../assets/signup-image.jpg"
function Login() {
    const navigate = useNavigate()
  return (
    <div className='signup'>
      <div className="sinup-form">
        <div className="header">
            <h1>Wellcome Again <span> 👋🏻 </span> </h1>
            <span style={{color:"gray"}}>enter email and password, stay connected</span>
        </div>
        <form style={{marginTop:"5rem"}} id='form' action="" method="post">
           
            <div>
                <span>Email</span>
                <input type="email" required/>
            </div>
            
            <div>
                <span>Password</span>
                <input type="password" required />
            </div>
           
            <span style={{marginTop:"30px",marginBottom:"20px"}} className="other-options">
                
                <h3>Create account <span> <a onClick={()=>{navigate("signup")}}>Sign Up</a> </span></h3>
            </span>
            <button type="submit">Login</button>
        </form>
        
      </div>  
      <div className="signup-promo login-promo">
        <div className='desc'>
           <h1>Digital Platform For <span>Online</span>  Learning</h1> 
           <span>you will never know every thing <div>but you will know</div></span>
        </div>
      </div>
    </div>
  )
}
export default Login
