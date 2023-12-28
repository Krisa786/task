import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [email, setemail] = useState('')
    const [pw, setpw] = useState('')
    const nevigate = useNavigate();

    const btnlogin =()=>{
    let RegisterData = JSON.parse(localStorage.getItem('arr'));
    let data =RegisterData.find((x)=>x.email==email && x.password==pw)
      if(data){
        localStorage.setItem('isLogin' , true)  
        props.setisLogin(true)
        nevigate('/') 
      }
      else{
        alert('Invalid...');
      }
     
    }

    const EmailData = (e)=>{
      setemail(e.target.value)
    }
   
    const PwData = (e)=>{
      setpw(e.target.value)
    }
   
    const GoRegister =()=>{
        nevigate('/register')
    }
    return (
      <>
    <div className='MainLogin py-5' >
        <div>
            <h2 style={{paddingBottom:'20px'}}>Login Form</h2>
            <label htmlFor="">Email : </label>
            <input type='email' placeholder='Enter Email...' onChange={EmailData} name='email' required/><br/><br/>
            <label htmlFor="">Password : </label>
            <input type='password' placeholder='Enter Password...' onChange={PwData} name='password' required/><br/><br/>
            <button className='btn btn-success' onClick={btnlogin}>Login</button><br/><br/>
            <button className='btn btn-success' onClick={GoRegister}>go to Register</button>
        </div>
    </div>
    </>
  )
}

export default Login