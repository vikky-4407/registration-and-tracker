import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { useContext } from 'react';
import { loginContext } from '../contexts/loginContext';
import './Home.css'  

function Register() {
  let  [currentUser,loginErr,userLoginStatus,loginUser,logoutUser ,setScheme,scheme]=useContext(loginContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [err, setError] = useState("");  

  const addNewStudent = (newStudent) => {   
    axios.post("http://localhost:3500/seat-api/add-seat", newStudent)
      .then(response => {
        console.log("response is ", response);
        if (response.status === 201) {
          navigate('/Details');
        } else {
          setError(response.data.message);
        }
      })
      .catch(err => {
        console.log("err is", err);
        if (err.response) {
          setError(err.message);
        } else if (err.request) {
          setError(err.message);
        }
      });
  }

 



   
 

  return (
    <div className='background'>
      {err.length !== 0 && <p className='text-danger mx-auto text-center'>{err}</p>}
      
      <div className="row">
        <div className="col-sm-8 col-11 col-md-6 mx-auto border text-white px-4 py-4">
          <h4 className='text-center text-success'>Enter post details</h4>
          <form onSubmit={handleSubmit(addNewStudent)}>
          <input 
          placeholder='enter title'
          className='form-control mb-4'
          {...register("title", { required: true })}
          
          />
          <textarea className="form-control  " required rows="6" name="comments" id="feedback_comments" placeholder='add post content'  
           {...register("post", { required: true })}
          ></textarea>

            <button className='btn btn-danger mt-3' type='submit'>Add Post</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
