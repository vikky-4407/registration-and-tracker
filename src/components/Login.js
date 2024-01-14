import React from 'react' 
import { useState,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
 import {loginContext} from '../contexts/loginContext'
import { useForm } from 'react-hook-form';
import './Home.css'

function Login() {

let [currentUser,loginErr,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)
   
let [error,setError]=useState('')

//navigate
const navigate=useNavigate();
let {register,handleSubmit,formState:{errors}}=useForm()
  //adding new user
  let handleSubmitUser=(usercreObj)=>{
    console.log(usercreObj)

    loginUser(usercreObj);
  }
useEffect(()=>{ 
  if(userLoginStatus==true){
    navigate("/")
  }
},[userLoginStatus])
 

  return (
    <div className='background '> 
      <h3 className='text-center text-white '>Login</h3>
      {loginErr.length !==0 && (<p className='text-danger text-center justify-content-center'>{loginErr}</p>) }
      <div className="row">
        <div className="col-sm-8 col-11 col-md-6 mx-auto border mt-5 mb-5 px-3 py-3">
          <form onSubmit={handleSubmit(handleSubmitUser)} >
            <label htmlFor="email" className='text-white'>email</label>
            <input
             type="email"
             id='email' 
             placeholder='abc@gmail.com'
             className='form-control mt-3 mb-3'
             {...register("email",{required:"True"})}
            />
            {errors.email?.type==='required' && <p className="text-danger ">*this field is required</p> }
            <label htmlFor="password" className='text-white' >Password</label>
            <input type="password" 
            id='password'
             placeholder='password'
             className='form-control mt-3 mb-3'
             {...register("password",{required:"True"})}
            />
            {errors.password?.type==='required' &&<p className="text-danger">*this field is required</p> }
            <button type='submit' className='btn btn-danger   text-white'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login