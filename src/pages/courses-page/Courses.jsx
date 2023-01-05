import React,{useState} from 'react'
import "./Courses.css"
import { grades } from './grades'
import NavBar from '../main-page/nav-bar/NavBar'
import Subjects from './subjects/Subjects.jsx';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Courses() {
  const itemCount=(item)=>{
    setAddedItems(item)
  }
  const [addedItems, setAddedItems] = useState(0)
 
  return (
    <div className='courses'>

        <NavBar options = {grades} />
        <Subjects itemCount = {itemCount} />
        
    </div>
  )
}

export default Courses