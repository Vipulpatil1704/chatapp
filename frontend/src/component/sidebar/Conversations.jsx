import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversation from '../../hooks/useGetConversation.js'
export default function Conversations() {
  const {loading,conversations}=useGetConversation();
  // console.log(loading);
  // console.log(conversations);
  return (
    <div className='flex flex-col gap-4 h-72 overflow-y-scroll'>
      {loading && <div>Loading</div>}
      {(!loading) && conversations.map((conversation,index)=>{
        return <Conversation key={conversation._id} conversation={conversation} lastIndex={index===conversation.length -1}/>
      })}
      {/* <Conversation/> */}
    </div>
  )
}
