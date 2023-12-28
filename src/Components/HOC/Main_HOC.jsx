import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HOC_comp } from './HOC_comp'
import Login from './Login'
import Register from './Register'
import About from './About'
import Home from './Home'
import Drop_down from './Drop_down'

const Main_HOC = () => {
  const [isLogin, setisLogin] = useState(JSON.parse(localStorage.getItem('isLogin')))
  return (
    <>
    <BrowserRouter>
    <Routes>
      {
        isLogin ?
        <>
        <Route path='/' element={<Navigate to= "/home" />}/>
        <Route path='/home' element={<Home setisLogin={setisLogin}  />}/>
        <Route path='/about' element={<About number='123'/>}/>
        <Route path='/dropdown' element={<Drop_down />}/>
        </>:
        <>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login setisLogin={setisLogin}/>}/>
        </>
      }
        
      <Route path='/register' element={<Register/>}/>
        
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default Main_HOC