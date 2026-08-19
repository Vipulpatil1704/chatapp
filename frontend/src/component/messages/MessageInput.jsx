import {useContext, useRef, useState} from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage.js';
import { useSocketContext } from '../../context/SocketContext.jsx';
import { ConversationContext } from '../../context/ConversatonContext.jsx';
export default function MessageInput() {
    const [message,setMessage]=useState('');
    const typingTimeout=useRef(null);
    const {loading,sendMessage}=useSendMessage();
    const {socket}=useSocketContext();
    const {state}=useContext(ConversationContext);

    function setTyping(isTyping){
        if(socket && state.selectedConversation){
            socket.emit('typing',{
                receiverId:state.selectedConversation._id,
                isTyping,
            });
        }
    }

    function handleMessageChange(e){
        const value=e.target.value;
        setMessage(value);
        clearTimeout(typingTimeout.current);
        setTyping(Boolean(value.trim()));
        if(value.trim()){
            typingTimeout.current=setTimeout(()=>setTyping(false),1500);
        }
    }

    async function onSubmitHandler(e){
        e.preventDefault();
        clearTimeout(typingTimeout.current);
        setTyping(false);
        await sendMessage(message);
        setMessage("");
    }

    return (
        <div className='message-input-wrap'>
            <form onSubmit={onSubmitHandler} className='message-form' onBlur={(e)=>{
                if(!e.currentTarget.contains(e.relatedTarget)){
                    clearTimeout(typingTimeout.current);
                    setTyping(false);
                }
            }}>
                    <input type="text" placeholder='Write a message...' value={message} onChange={handleMessageChange}/>
                    <button className='send-button' type='submit' disabled={loading || !message.trim()} aria-label='Send message'>
                        {loading ? '...' : <IoMdSend/>}
                    </button>
            </form>
        </div>
    )
}
