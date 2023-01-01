import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from "../../../assets/logo.png"
import "./NavBar.css"

import { Navigate, useNavigate, Link } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate()
  return (
    <div className="nav">
    <div className="logo">
     <img src={logo} alt="" />
    </div>
    <div className="search">
        <span>Courses</span>
        <input type="text" />
    </div>
    <div className="header_options">
      <ul>
        <Link to = "/">
        <li>Home</li>
        </Link>
        
        <li>option 2</li>
        <li>option 3</li>
        <li>option 4</li>
        <li>option 5</li>
      </ul>
    </div>
    <div className="other_options">
    <button className="btn signup" onClick={()=>navigate("/signup")}>
            Signup
        </button>
        <div>
          <AccountCircleOutlinedIcon className='login'  style={{color:"gray", fontSize : "40px"}}/>
       
        </div>       
    </div>
    <div className="get_started">
         Get Start
    </div>
  </div>
  )
}

export default NavBar
