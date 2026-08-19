import Conversation from './Conversation.jsx'
import useGetConversation from '../../hooks/useGetConversation.js'
export default function Conversations() {
  const {loading,conversations}=useGetConversation();
  // console.log(loading);
  // console.log(conversations);
  return (
    <div className='conversation-list'>
      {loading && <div className='empty-list'>Loading conversations...</div>}
      {(!loading) && conversations.map((conversation)=>{
        return <Conversation key={conversation._id} conversation={conversation}/>
      })}
      {!loading && conversations.length === 0 && <div className='empty-list'>No conversations yet</div>}
    </div>
  )
}
