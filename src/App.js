import React from 'react';
import "./App.css"
import Mainpage from './pages/main-page/Mainpage';
import SignUp from './pages/sign-up page/SignUp';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login-page/Login';
import Courses from './pages/courses-page/Courses';
import Cart from './pages/cart/Cart';
import Intro from './intro/Intro';
function App() {
 
  return (
     <div className="App">
     <Intro />
      <Routes>
       <Route path='/' element={<Mainpage/>} /> 
       <Route path='/signup' element={<SignUp/>} /> 
       <Route path='/login' element={<Login/>} /> 
       <Route path='/courses' element={<Courses/>} />
       <Route path='/cart' element={<Cart/>} /> 
      </Routes>
    </div>
    
   
  );
}

export default App;
