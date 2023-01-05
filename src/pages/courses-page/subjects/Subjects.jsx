import React from 'react'
import "./Subjects.css"
import { chapters } from './chapters'
import { useState } from 'react';




function Subjects({itemCount}) {
   
    let count = 1;
    const [addToCart, setAddToCart] = useState(false)
    const [countItems,setCountItems]= useState(0)
    itemCount(countItems)

    const handleCart = (id)=>{
       

        chapters[id].added = ! chapters[id].added
        if(chapters[id].added){
             setCountItems(countItems + 1)
        }
        else{
            setCountItems(countItems - 1)
        }
       
              
    }
    
  return (
    <div className='subjects'>
        <div className="select-subject">
            <ul>
            <li>Maths</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Ict</li>
            <li>Ecomomics</li>
            <li>Business</li>     
        </ul>
        </div>
        <div className="all-chapters">
        {
            chapters.map((chapter)=>{
                return(
                      <div className="selected-courses">
                    <div className="image">
                        <img src="https://www.humbleisd.net/cms/lib/TX01001414/Centricity/Domain/33/Elementary%20Math%202022%20Logo2.png" alt="" />
                    </div>
                    <div className="chapter">
                        <h1>
                            {chapter.chpater}
                        </h1>
                        <p>{chapter.desc}</p>
                        <h3>{chapter.price}<a><span>{chapter.discount}</span> 0ff </a></h3> 
                        <button 
                        className='add_to_cart'
                        onClick={()=>{
                            handleCart(chapter.id)
                
                        }}
                        >{chapter.added ? `Remove cart `:"Add to Cart"}</button>
                    </div>
                
                </div>
                )
            })
        }
      </div>

        
    </div>
    
  )
}

export default Subjects