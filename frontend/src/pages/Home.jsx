import React, { useEffect } from 'react'
import Sidebar from '../component/sidebar/Sidebar'
import MessageContainer from '../component/messages/MessageContainer'
export default function Home() {

  return (
    <div className='flex home'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}
