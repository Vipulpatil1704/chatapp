import Message from './Message'
// import { ConversationContext } from '../../context/ConversatonContext.jsx'
import useGetMessages from '../../hooks/useGetMessages.js';
import useListenMessage from '../../hooks/useListenMessage.js';
export default function Messages() {
  const {messages,loading}=useGetMessages();
  // console.log(messages);
  useListenMessage();
  return (
    <div className='messages'>
        {loading ? <div className='messages-empty'>Loading messages...</div> : messages.map((message)=>{
          return <Message key={message._id} message={message}/>
        })}
        {!loading && messages.length === 0 && <div className='messages-empty'>No messages yet. Start the conversation.</div>}
    </div>
  )
}
