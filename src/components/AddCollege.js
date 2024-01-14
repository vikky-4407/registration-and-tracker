import React,{useContext, useEffect, useState} from 'react' 
import {useForm} from 'react-hook-form'
import {  useNavigate} from 'react-router-dom'
import axios from 'axios' 
import { loginContext } from '../contexts/loginContext' 
import './Home.css'
function AddCollege() {

  let  [currentUser,loginErr,userLoginStatus,loginUser,logoutUser ,setScheme,scheme]=useContext(loginContext)
   
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  let [err,seterror]=useState("")
  let [users,setUsers]=useState([]) 
  let [selectedFile,setSelectedFile]=useState(null) 
let addcollege=(newCollege)=>{ 
    newCollege['Hno']=scheme
  axios.post("http://localhost:3500/college-api/add-college",newCollege)
  .then(response=>{
    console.log("response is ",response)
    if(response.status===201){ 
        navigate('/AddCollege')
    }
    else{
      seterror(response.data.message)
    }
     
  })
  .catch((err)=>{
    console.log("err is", err);
    if(err.response){
     seterror(err.message)
    }
    else if(err.request){
      seterror(err.message)
    }
  })

}



let getcollege=()=>{
    axios.get("http://localhost:3500/college-api/get-college")
    .then((response)=>{ 
      if(response.status==200){
        response=(response.data.payload)
         
        setUsers(response) 
      }
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

    //on file selelct
    const onFileSelect=(e)=>{
      setSelectedFile(e.target.files[0])
    }

    useEffect(()=>{
        getcollege()
    },[])

  return (
    <div className='background'> 
       
    {err.length!==0 && <p className='text-danger'>{err}</p>}

    <h3 className='text-center  text-white mb-3'>Money tracker App</h3>
    
    <div className="row">
     
          <div className=" col-sm-8 col-11 col-md-6 mx-auto border bg-secondary px-4 py-4 ">
              <form onSubmit={handleSubmit(addcollege)}>
                <input 
                 placeholder='enter expense'
                 type='number'
                 className='form-control mt-3 mb-5'
                 {...register("expense", { required: true })}
                
                />

                <input 
                 placeholder='enter income'
                 type='number'
                 className='form-control mb-4'
                 {...register("income", { required: true })}
                
                />

                <input 
                type='date'
                className='form-control'
                {...register("date", { required: true })}
                />
                

                <button className='btn btn-danger mt-3' type='submit'>Submit</button>
              </form>
            </div>

    </div>




    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {
        users?.map((dataObj)=> <div className='col mx-auto text-center m-5 p-3' key={dataObj.id} >
          <div className="card "> 
            <div className="card-body bg-transparent ">  
                  
                  <p><strong>expense :</strong>{dataObj.expense}</p>
                  <p><strong>Income :</strong>{dataObj.income}</p>  
                  <p><strong>date</strong>{dataObj.date}</p> 
            </div>
          </div>
  
        </div> )
  
  
    }
   
    </div>
  </div>
  )
}

export default AddCollege