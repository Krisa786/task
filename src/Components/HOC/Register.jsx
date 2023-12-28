import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let [obj, setobj] = useState({})
    let [arr, setarr] = useState(JSON.parse(localStorage.getItem('arr'))||[])
    let [blankObj, setblankObj] = useState({})
    let nevigate = useNavigate()

    let btnRegister=()=>{
      let edata = arr.find((x)=>x.email ==  obj.email)
      if(edata){
        alert('Email is already register')
      }
      else{
        
        arr.push(obj)
        setarr([...arr])  
        localStorage.setItem("arr",JSON.stringify(arr))
        nevigate('/login')  
      }
      setobj({...blankObj})
    }
    let FormData =(e)=>{
        obj[e.target.name]=(e.target.value)
        blankObj[e.target.name] = ''
       setobj({...obj})
       setblankObj({...blankObj})
    }
   
    
  return (
    <>
    <div className='MainLogin py-5' >
        <div>
          <form>
            <h2 style={{paddingBottom:'20px'}}>Register Form</h2>
            <label htmlFor="">Name : </label>
            <input type='text' placeholder='Enter Name...' value={obj.name} onChange={FormData}  name='name' required/><br/><br/>
            <label htmlFor="">Email : </label>
            <input type='email' placeholder='Enter Email...' value={obj.email} onChange={FormData}  name='email' required/><br/><br/>
            <label htmlFor="">Password : </label>
            <input type='password' placeholder='Enter Password...' value={obj.password} onChange={FormData}  name='password' required/><br/><br/>
            <button className='btn btn-success' type='button' onClick={btnRegister}>Register</button>
            </form>
        </div>
    </div>
    </>
  )
}


export default Register