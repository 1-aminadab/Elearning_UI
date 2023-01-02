import React ,{useState}from 'react'
import "./Body.css"

import {data} from '../courses'
import { answers } from './answer';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Body() {
    const [answer, setAnswer] = useState(0)
    
    
    const  newData =  data.filter((datas)=>{
      return datas.id < 4
     })   
    const getAnswer = (id)=>{
        if(id == answer){
            setAnswer(0)
        }
        else{
             setAnswer(id)
        }
       
     }   
  return (
    <div className="body">
    <h2>Choose from courses in your Grade</h2>
      <div className="grade">
      
      <div className='disc'>
      {
        data.map((datas)=>{
          return(
            <div className="courses">
              <img  src={datas.image} alt="" />
              <h3>{datas.name}</h3>
              <p>{datas.description}</p>
              <div className="foot">
                <small>{datas.footer}</small>
              </div>
            </div>
          )
        })
      } 

      </div>
      </div>

      {/* POPULAR COURSES */}
       <h2>Popular courses</h2>
      <div className="popular_courses">
      <div className='popular_disc'>
      {
        data.map((datas)=>{
          return(
            <div className="courses">
              <div className="c1">
                 <SchoolOutlinedIcon className='school' />
              <h2 >{datas.description}</h2>
              <h3 className='price'>{datas.price}</h3>
              </div>
             
              <div className="review">
                <ul>
                    <li>24 view</li>
                <li>1.5k review</li>
                </ul>
              </div>
              <div className="join">
                <button className="btn join_now">
                  Join Now
                </button>
              </div>
            </div>
          )
        })
      } 

      </div>
      </div>
      {/* nEW COURSES */}
      <h2>New Courses</h2>
      <div className="future_courses">
        <div className="new_disc">
        {  data.map((datas)=>{
          return(
            <div className="new_courses">
              <div className="image">
                <img src={datas.image} alt="" />
              </div>
              

              <div className="desc">
                <h2>{datas.name}</h2>
                <p>{datas.description}</p>
              </div>
            </div>
          )
        })}
        </div>
      </div>
      <h2>Mostely asked Quations</h2>
      <div  className="FAQ">
        {
          data.map((datas)=>{
            return (
              <div key={datas.id} className='all_quations'>
              <div className="quations">
                <div className="quiation">
                  {datas.description}
                </div>
                <button className="answer_btn" onClick={()=> {getAnswer(datas.id)}}>
                  answer <span style={( answer == datas.id ) ?{rotate:"90deg"}:{rotate:"0deg"}}><ArrowRightIcon fontSize='large'/></span>
            
                </button>
              </div>
              {
              ( answer == datas.id ) ? <div className='answer'>{answers[answer-1]}</div> : <div></div>
              }
              
              </div>
              
            )
          })
        }
      </div>
         <h2>What Students Think About Courses</h2>
      <div className="testimonials">
        {
          newData.map((datas)=>{
            return (
              <div className="testimony">
                <div className="stu_image">
                  <img src={datas.image} alt="" />
                  </div>
                  <h2 className="name">
                    {datas.name}
                  </h2>
                  <h5 className="stu_testimony">
                    {datas.description}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut velit pariatur hic unde excepturi magni nulla saepe, magnam nostrum!
                  </h5>
                  <p className="status">
                    _student
                  </p>
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Body