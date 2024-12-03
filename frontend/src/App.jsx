import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './context/AuthContext';
const App = () => {
  const {authUser}=useAuthContext();
  // console.log(authUser);
  return (
    <div className='bg-white h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home/>:<Navigate to={"/login"}/>} />
        <Route path='/login' element={authUser ? <Home/>: <Login/>} />
        <Route path='/signup' element={authUser ? <Navigate to={"/"}/> :<Signup/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
