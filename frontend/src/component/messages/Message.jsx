import { useContext } from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx';
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import { formatTime } from '../../utils/formatTime.js';
export default function Message({message}) {
  const {authUser}=useAuthContext();
  const {state}=useContext(ConversationContext);
  const {selectedConversation}=state;
  const messageFromMe=message.senderId === authUser._id; 
  const chatClassName=messageFromMe ? 'message-row message-row-mine':'message-row';
  const profilePic=messageFromMe ? authUser.profilePic : selectedConversation ?. profilePic ;
  const formattedTime=formatTime(message.createdAt);
  return ( 
    <div className={chatClassName}>
            <div className='message-avatar'><img src={profilePic} alt="" /></div>
            <div><div className='message-bubble'>{message.message}</div><div className='message-time'>{formattedTime}</div></div>
        </div>
  )
}
