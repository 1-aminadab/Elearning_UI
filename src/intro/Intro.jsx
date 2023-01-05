import React,{useState,useEffect} from 'react'
import "./Intro.css"
import logo2 from "../assets/edu harmony logo2.png"
function Intro() {
    const [remove,setRemove] = useState({})
    useEffect(()=>{
       setTimeout(() => {
      setRemove({display:"none"})
       }, 4000 );
    },[])
    
  return (
    <div style={remove} className="intro">
        <div className="image">
          <img src={logo2} alt="" />
        </div>
        <div>         
            <div>E</div> 
            <div>d</div>
            <div>u</div>
            <div> H</div>
            <divy>a</divy>
            <div>r</div>
            <div>m</div>
            <div>o</div>
            <div>n</div>
            <div>y</div>           
        </div>
      </div>
  )
}

export default Intro