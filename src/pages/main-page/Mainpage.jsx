// Modules
import React from 'react'
import {useState} from "react"
import { Navigate, useNavigate,Link } from 'react-router-dom';

import "./mainPage.css"
import { options } from './options';
import {data} from './courses'
// Icons
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// Componens
import NavBar from './nav-bar/NavBar';
import Promotion from './promotion/Promotion';
import Body from './body/Body';
import Footer from './footer/Footer';
import { useEffect } from 'react';
function Mainpage() {
  const [answer, setAnswer] = useState(false)
  const  newData =  data.filter((datas)=>{
      return datas.id < 4
     })   
  const getAnswer = (id)=>{
    return id
  }   
 
 
  return (
    <div className='mainPage'>
      
      <NavBar options = {options} />
      <Promotion />
      <Body />
      <Footer />
    </div>
  )
}

export default Mainpage
