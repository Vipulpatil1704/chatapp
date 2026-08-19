import {useState} from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage.js';
export default function MessageInput() {
    const [message,setMessage]=useState('');
    const {loading,sendMessage}=useSendMessage();
    async function onSubmitHandler(e){
        e.preventDefault();
        await sendMessage(message);
        setMessage("");
    }
    return (
        <div className='message-input-wrap'>
            <form onSubmit={onSubmitHandler} className='message-form'>
                    <input type="text" placeholder='Write a message...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    <button className='send-button' type='submit' disabled={loading || !message.trim()} aria-label='Send message'>
                        {loading ? '...' : <IoMdSend/>}
                    </button>
            </form>
        </div>
    )
}
