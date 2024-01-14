import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer' 
import { Outlet } from 'react-router'
function Rootlayout() {
  return (
    <div>
        <Navbar/>
        {/*dynamic content*/}
        <div  >
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Rootlayout;