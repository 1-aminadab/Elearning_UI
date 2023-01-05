// packages
import React ,{useState} from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';

//files 
import logo from "../../../assets/logo2.png"
import "./NavBar.css"

// Icons 
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
import { chapters } from '../../courses-page/subjects/chapters';


function NavBar({options,cart,addedItems}) {  
  let count = 0
   const newChapter = chapters.filter((chapter)=>{
    return chapter.added == true
   })
   addedItems = newChapter.length
  

  const [active,setActive] = useState(false)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [styleIt,setStyleIt] = useState({})
  const setActiveIt= (id)=>{
    setActive(id)
  }

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
          <li onClick={()=>setActiveIt(option.id)} className={active == option.id ?"active":""}>{option.option}</li>
        </Link>
            )
          })
        }
              
      </ul>
    </div>
    <div className="other_options">
      <button className="btn signup" onClick={()=>navigate("/signup")}>
        Signup
      </button>
      <div>
        <Link to='/login'>
          <span >
            <AccountCircleOutlinedIcon className='login'   style={{color:"gray", fontSize : "40px"}}/>      
          </span>
           
        </Link>
       
      </div>
        <Link to='/cart' style={{color:"gray",marginLeft:'15px'}}>
          
          <div  className='cart'onClick={()=>navigate("/signup")}>
            <span style={addedItems >0 ? {left:"100%",display:"flex"}:  {left:"50%"}}>{addedItems}</span>
            <AddShoppingCartIcon fontSize='large'/>
          </div>
         
        </Link>       
    </div>
    <div className="get_started">
      <a href="signup">
        Get Start
      </a>
         
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
