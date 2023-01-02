import React from 'react'
import "./SignUp.css"
import SingUpImage from "../../assets/signup-image.jpg"
import NavBar from '../main-page/nav-bar/NavBar'
import { useNavigate, Link } from 'react-router-dom'
function SignUp() {
    const navigate = useNavigate()
  return (
    <div className='signup'>
      <div className="sinup-form">
        <div className="header">
            <h1>Hey, hello <span> 👋🏻 </span> </h1>
            <span>enter the information , you'll enter while you resister</span>
        </div>
        <form id='form' action="" method="post">
            <div>
                <span>first name</span>
                <input type="text" required="required" />
            </div>
            <div>
                <span>Last name</span>
                <input type="text" required />
            </div>
            <div>
                <span>Email</span>
                <input type="email" required/>
            </div>
            <div>
                <span>phone Number</span>
                <input type="text" required = "required"/>
            </div>
            <div>
                <span>Password</span>
                <input type="password" required />
            </div>
            <div>
                <span>Confirm Password</span>
                <input type="password" required/>
            </div>
            <span className="other-options">
                <h4>rememner me</h4>
                <h3>have an account? <span> <a onClick={()=> {navigate('/login')}}>Login</a> </span></h3>
            </span>
            <button type="submit">sign up</button>
        </form>
        
      </div>  
      <div className="signup-promo">
        <div className='desc'>
           <h1>Digital Platform For <span>Online</span>  Learning</h1> 
           <span>you will never know every thing <div>but you will know</div></span>
        </div>
      </div>
    </div>
  )
}

export default SignUp
