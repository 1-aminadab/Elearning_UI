import React from 'react';
import "./App.css"
import Mainpage from './pages/main-page/Mainpage';
import SignUp from './pages/sign-up page/SignUp';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login-page/Login';
function App() {
  return (
     <div className="App">
      <Routes>
       <Route path='/' element={<Mainpage/>} /> 
       <Route path='/signup' element={<SignUp/>} /> 
       <Route path='/login' element={<Login/>} /> 
      </Routes>
    </div>
    
   
  );
}

export default App;
