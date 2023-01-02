import React from 'react'
import "./Promotion.css"
import { Link } from 'react-router-dom'
import student from "../../../assets/student2.jpg"
function Promotion() {
  return (
    <div className="promotion">
    <div className="description">
        <div>
        “<span> Live</span> as if you were to die tomorrow. <span> Learn</span> as if you were to live forever.” <div> ― Mahatma Gandhi</div>
        </div>
   
    <div>
        <Link to="/signup">
           <button className='btn enrolle'>enrolle now</button>
        </Link>     
    </div>
    </div>
    <div className="advert_image">
        <img src={student} alt="" />
    </div>
  </div>
  )
}

export default Promotion
