import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useLogout } from '../../hooks/useLogout.js';
export default function LogoutButton() {
  const {loading,logout}=useLogout();
  return (
    <div>
      {!loading ?<CiLogout onClick={logout}/>:<span className='loading loading-spinner'></span>} 
    </div>
  )
}
