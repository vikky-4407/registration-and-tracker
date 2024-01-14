import React,{useContext,useEffect,useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {loginContext}  from '../contexts/loginContext' 
import axios from 'axios'
import './Home.css'

function Userprofile() {
 
   let [currentUser]=useContext(loginContext)
 

  return (
    <div className='background'>       
      <div className="row justify-content-center  ">
        <h2 className='text-center mb-5 text-white mt-3'>{currentUser.userType} profile</h2>
            <div className="col-4 border border-black px-2 py-2 bg-secondary text-white justify-content-center text-center shadow border-shadow ">
                  <img src={currentUser.image} className='border-square mt-3 mb-3 shadow-sm' width='250px' alt="" />
                  <h4 className='mt-3 text-black'>username : {currentUser.username}</h4>
                  <p className='mt-3'>email :{currentUser.email}</p>
                  <p className='mt-3'>dateofbirth :{currentUser.dateofbirth}</p>
 
            </div>
      </div>
      
      
   
   
    

 
     
    </div>
  )
}

export default Userprofile