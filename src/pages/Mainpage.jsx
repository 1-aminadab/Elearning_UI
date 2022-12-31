import React from 'react'
import "./mainPage.css"
import logo from "../assets/logo.png"
import student from "../assets/student2.jpg"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function mainpage() {

  return (
    <div className='mainPage'>
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
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
            <li>option 4</li>
            <li>option 5</li>
          </ul>
        </div>
        <div className="other_options">
        <button className="btn signup">
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
      <div className="promotion">
        <div className="description">
            <div>
            “<span> Live</span> as if you were to die tomorrow. <span> Learn</span> as if you were to live forever.” <div> ― Mahatma Gandhi</div>
            </div>
       
        <div>
            <button className='btn enrolle'>enrolle now</button>
        </div>
        </div>
        <div className="advert_image">
            <img src={student} alt="" />
          
        </div>
      </div>
    </div>
  )
}

export default mainpage
