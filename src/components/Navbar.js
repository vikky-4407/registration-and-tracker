import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FcIdea } from 'react-icons/fc';
import { loginContext } from '../contexts/loginContext';
import { useContext } from 'react';

function Navbar() {
  let [currentUser, loginErr, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);

  return (
    <div className="navbar navbar-expand-sm bg-dark" id="nav">
      <div className="container-fluid">
        <h5 className='text-white'><FcIdea/>Bharat Internship</h5>
        <button data-bs-target="#menu" data-bs-toggle="collapse" className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu">
          <ul className='navbar-nav ml-auto d-flex flex-row '>
            {userLoginStatus ? (
              <>
                <li className="nav-item">
                  <Link className='nav-link text-white' to="/">
                    <button className='bg-dark text-white '><AiFillHome /> Home</button>
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className='nav-link text-white' to="/AddCollege">
                    Expense Tracker
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-white' to="/Details">
                    Read Post
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className='nav-link text-white' to="/UserProfile">
                    UserProfile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-white' to="/Login" onClick={logoutUser}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className='nav-link text-white' to="/Register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-white' to="/Login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
