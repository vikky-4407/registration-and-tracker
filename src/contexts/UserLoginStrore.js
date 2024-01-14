import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { loginContext } from './loginContext';

function UserLoginStore({children}) {
    
    const [currentUser,setCurrentUser]=useState({});
    const [loginErr,setLoginErr]=useState("")
    const [userLoginStatus,setUserLoginStatus]=useState(false)
    const [scheme,setScheme]=useState([]) 
    //function to make user login request
    const loginUser=(userCredObj)=>{
        
       axios.post("http://localhost:3500/user-api/login",userCredObj)
       .then((response)=>{
            if(response.data.message==='Success'){
                //save token to local storage
                console.log(response)
                localStorage.setItem("token",response.data.token)


                setCurrentUser({...response.data.user});
                setLoginErr("");
                setUserLoginStatus(true)   
            }
            else{
                 setLoginErr(response.data.message)
            }
       })
       .catch(err=>{
        console.log("err in user login",err)
        setLoginErr(err.message)
       }) 
    }
    
    const logoutUser=()=>{
        localStorage.clear()
        setUserLoginStatus(false)
        currentUser.userType=""
    }

    return (
    <div> 
        <loginContext.Provider value={[currentUser,loginErr,userLoginStatus,loginUser,logoutUser ,setScheme,scheme]}>
            {children}
        </loginContext.Provider>
    </div>
  )
}

export default UserLoginStore