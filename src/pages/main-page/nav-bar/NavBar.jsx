// packages
import React ,{useState} from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';

//files 
import logo from "../../../assets/logo2.png"
import "./NavBar.css"

// Icons 
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';



function NavBar({options}) {
  
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [styleIt,setStyleIt] = useState({})

  window.addEventListener("scroll",()=>{
    const scrollPostion = window.scrollY

    if(scrollPostion > 100){
      setStyleIt({background:"rgba(255, 255, 255,0.7 )", position:'fixed',animation:"anime 0.5s forwards"})
    }
    else{
      setStyleIt({background:"rgba(255, 255, 255, )"})
    }
   })
   
  return (
    <div style={styleIt} className="nav">
      <div className="logo">
      <img src={logo} alt="" />
      </div>
      <div className="search">
          <span>Courses</span>
          <input type="text" />
      </div>
    <div style={open ? {right:"0%"}: {right:"100%"}} className={`header_options  active-header`}>
      <ul>
        {
          options.map((option)=>{
            return (
               <Link to = {option.link}>
          <li>{option.option}</li>
        </Link>
            )
          })
        }
       
        {/* <Link to = "/signup">
          <li>option 2</li>
        </Link>
        <Link to = "/">
          <li>option 3</li>
        </Link>
        <Link to = "/">
          <li>option 4</li>
        </Link>
        <Link to = "/">
          <li>option 5</li>
        </Link> */}
        
      </ul>
    </div>
    <div className="other_options">
      <button className="btn signup" onClick={()=>navigate("/signup")}>
        Signup
      </button>
      <div>
        <Link to='/login'>
          <AccountCircleOutlinedIcon className='login'   style={{color:"gray", fontSize : "40px"}}/>       
        </Link>
        
      </div>       
    </div>
    <div className="get_started">
         Get Start
    </div>
    <div  className="menu" onClick={()=> setOpen(!open)}>
      {
         open ?  <CloseIcon className='menu-icon' fontSize='larger' />: <SegmentIcon className='menu-icon' fontSize='larger' /> 
      }
     
      
    </div>
    
  </div>
  )
}

export default NavBar
