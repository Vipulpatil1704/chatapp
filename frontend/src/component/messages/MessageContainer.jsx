import { useContext } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import NoChatSelected from './NoChatSelected.jsx';
export default function MessageContainer() {
  const {state, dispatch}=useContext(ConversationContext);
  const {selectedConversation} =state; 
  const username=selectedConversation ? selectedConversation.username : '';
  return (
    <main className='message-panel'>
      {selectedConversation ? <div className='chat-view'>
        <header className='chat-header'><button className='mobile-back' onClick={()=>dispatch({type:'setSelectedConversation',payload:null})} aria-label='Back to conversations'>‹</button><div className='chat-header-avatar'><img src={selectedConversation.profilePic} alt='' /></div><div><p className='chat-header-label'>Conversation</p><h2>{username}</h2></div><span className='chat-status'>Active now</span></header>
        <Messages/>
        <MessageInput/>
    </div>:<NoChatSelected/>}
    </main>  
  )
}
