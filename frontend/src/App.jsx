import {Routes,Route,Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './context/AuthContext';
const App = () => {
  const {authUser}=useAuthContext();
  // console.log(authUser);
  return (
    <div className='app-shell'>
      <Routes>
        <Route path='/' element={authUser ? <Home/>:<Navigate to={"/login"}/>} />
        <Route path='/login' element={authUser ? <Home/>: <Login/>} />
        <Route path='/signup' element={authUser ? <Navigate to={"/"}/> :<Signup/>} />
      </Routes>
      <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
    </div>
  )
}

export default App
