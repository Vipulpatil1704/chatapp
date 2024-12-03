import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
export default function Sidebar() {
  return (
    <div className='flex flex-col gap-2 p-4 bg-slate-200 rounded-s-lg'>
        <SearchInput/>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}
