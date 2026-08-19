import { CiLogout } from "react-icons/ci";
import { useLogout } from '../../hooks/useLogout.js';
export default function LogoutButton() {
  const {loading,logout}=useLogout();
  return (
    <div className='logout-wrap'>
      {!loading ?<button className='logout-button' onClick={logout}><CiLogout /> Log out</button>:<span className='logout-loading'>Signing out...</span>} 
    </div>
  )
}
