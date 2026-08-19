import { useContext } from 'react'
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import { useSocketContext } from '../../context/SocketContext.jsx';
export default function Conversation({conversation}) {
  const {state,dispatch}=useContext(ConversationContext);
  // console.log(state);
  // console.log(conversation);
  const isSelected = state.selectedConversation?._id===conversation._id;
  const {onlineUsers}=useSocketContext();
  // console.log(onlineUsers)
  const isOnline=onlineUsers.includes(conversation._id);
  // console.log(isOnline);
  return (
    <button className={`conversation-row ${isSelected ? 'conversation-row-selected': ''}`} onClick={()=>dispatch({type:'setSelectedConversation',payload:conversation})}>
      <div className='conversation-avatar'><img src={conversation.profilePic} alt='' />{isOnline && <span className='online-dot' />}</div>
      <span className='conversation-name'>{conversation.username}</span>
      <span className='conversation-arrow'>›</span>
    </button>
  )
}
