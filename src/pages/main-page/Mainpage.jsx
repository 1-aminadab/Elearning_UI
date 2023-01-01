import React from 'react'
import "./mainPage.css"

import student from "../../assets/student2.jpg"

import {data} from './courses'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import {useState} from "react"

import { Navigate, useNavigate } from 'react-router-dom';
// Componens
import NavBar from './nav-bar/NavBar';
function Mainpage() {
  const [answer, setAnswer] = useState(false)
  const [answerId, setAnswerId] = useState(0)
  const navigate = useNavigate()
  const  newData =  data.filter((datas)=>{
      return datas.id < 4
     })
 
    
  return (
    <div className='mainPage'>
      <NavBar />

      {/* promotion  */}
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
      {/* body */}
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
                  <button className="answer_btn" onClick={()=> {}}>
                    get answer
                  </button>
                </div>
                {/* {
                answer.map((d)=>{
                  return(
                    <div className="answer">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus modi optio delectus sint numquam corporis rerum quam consequatur nulla natus!
                                  </div> 
                  )
                })  
                }
                 */}
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
      <div className="footer">
        FOOTER
      </div>
    </div>
  )
}

export default Mainpage
