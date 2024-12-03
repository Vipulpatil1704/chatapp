import React, { useContext } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import NoChatSelected from './NoChatSelected.jsx';
export default function MessageContainer() {
  const {state}=useContext(ConversationContext);
  const {selectedConversation} =state; 
  const username=selectedConversation ? selectedConversation.username : '';
  return (
    <div>
      {selectedConversation ? <div className='w-full bg-slate-200 gap-2 p-4 rounded-e-lg border-s-2 border-black'>
        <div className='title bg-slate-500'>To: <span>{username}</span></div>
        <Messages/>
        <MessageInput/>
    </div>:<NoChatSelected/>}
    </div>  
  )
}
