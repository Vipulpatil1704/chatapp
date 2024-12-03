import React, { useContext } from 'react'
import userAvatar from '../../assets/user.png';
import { useAuthContext } from '../../context/AuthContext.jsx';
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import { formatTime } from '../../utils/formatTime.js';
export default function Message({message}) {
  const {authUser}=useAuthContext();
  const {state}=useContext(ConversationContext);
  const {selectedConversation}=state;
  const messageFromMe=message.senderId === authUser._id; 
  const chatClassName=messageFromMe ? 'chat-end':'chart-start';
  const profilePic=messageFromMe ? authUser.profilePic : selectedConversation ?. profilePic ;
  const msgBgColor=messageFromMe ? 'bg-green-500':'';
  const formattedTime=formatTime(message.createdAt);
  return ( 
    <div>
        <div className={`receiver-message flex justify-end chat ${chatClassName}`}>
            <div className={`chat-bubble text-white ${msgBgColor}`}>{message.message}</div>
            <div className='w-12 rounded-full'><img src={profilePic} alt="" /></div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950'>
              {formattedTime}
            </div>
        </div>
    </div>
  )
}
