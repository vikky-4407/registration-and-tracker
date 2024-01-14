import React,{useContext, useEffect, useState} from 'react' 
import {useForm} from 'react-hook-form' 
import axios from 'axios'  
import './Home.css'
function Details() {


    let {register,handleSubmit,formState:{errors}}=useForm()
    let [err,seterror]=useState("")
    let [users,setUsers]=useState([])  


    let getcollege=()=>{
        axios.get("http://localhost:3500/seat-api/get-seat")
        .then((response)=>{
          setUsers(response.data.payload)
          
        })
        .catch((err)=>{
          console.log("err is at getdata dashboard",err)
          if(err.response){
            seterror(err.message)
          }
          else if(err.request){
            seterror(err.message)
          }
        })
      }
      
      useEffect(()=>{
        getcollege()
      },[])

  return (
    <div className='background' > 
    <h3 className='text-center text-white'>Read Posts</h3>

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {
        users?.map((dataObj)=> <div className='col mx-auto text-center m-5 ' key={dataObj.id} >
          <div className="card "> 
          <h4><strong>Title: </strong>{dataObj.title}</h4>
            <div className="card-body bg-transparent ">  
                <p><strong>Description: </strong>{dataObj.post}</p>
            </div>
          </div>
  
        </div> )
  
  
    }
   
    </div>
    </div>
  )
}

export default Details