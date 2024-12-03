import React, { useContext } from 'react'
import userAvatar from '../../assets/user.png';
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import { useSocketContext } from '../../context/SocketContext.jsx';
export default function Conversation({conversation,lastIndex}) {
  const {state,dispatch}=useContext(ConversationContext);
  // console.log(state);
  // console.log(conversation);
  const isSelected = state.selectedConversation?._id===conversation._id;
  const {onlineUsers}=useSocketContext();
  console.log(onlineUsers)
  const isOnline=onlineUsers.includes(conversation._id);
  console.log(isOnline);
  return (
    <div className={`flex gap-2 border-b-2 border-black cursor-pointer ${isSelected ? 'bg-sky-500': ''}`} onClick={()=>dispatch({type:'setSelectedConversation',payload:conversation})}>
      <div className={`avatar ${isOnline} ? 'online' : ''`}><div className='w-12 rounded-full'><img src={conversation.profilePic} alt="" /></div></div>
      <div>{conversation.username}</div>
    </div>
  )
}
