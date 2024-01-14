import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Rootlayout from './components/Rootlayout'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register' 
import UserLoginStore from './contexts/UserLoginStrore'
import UserProfile from './components/UserProfile'
import AddCollege from './components/AddCollege'
import Details from './components/Details'
function App() {
  const router=createBrowserRouter([
    {
     path:"/",
     element:<Rootlayout/>,
     children:[
       {
         path:"/",
         element:<Home/>
       },
       {
         path:"/Register",
         element:<Register/>
       },
       {
         path:"/Login",
         element:<Login/>
       },
       {
        path:'/UserProfile',
        element:<UserProfile/>
       },
       {
        path:'/AddCollege',
        element:<AddCollege/>

       },
       {
        path:'/Details',
        element:<Details/>

       }
       
     ]
    }


  ])
  return(
    <div>
      <UserLoginStore>
     <RouterProvider router={router} />
     </UserLoginStore>
      
     
    </div>
  );
}

export default App;