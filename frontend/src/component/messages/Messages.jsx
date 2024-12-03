import React, { useContext ,useEffect,useState} from 'react'
import Message from './Message'
// import { ConversationContext } from '../../context/ConversatonContext.jsx'
import useGetMessages from '../../hooks/useGetMessages.js';
import useListenMessage from '../../hooks/useListenMessage.js';
export default function Messages() {
  const {messages,loading}=useGetMessages();
  // console.log(messages);
  useListenMessage();
  return (
    <div className='flex flex-col my-2 gap-2 messages'>
        {loading ? <div>Loading...</div> : messages.map((message)=>{
          return <Message message={message}/>
        })}
        {/* <Message/> */}
    </div>
  )
}
