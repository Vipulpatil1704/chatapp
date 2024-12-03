import React,{useState} from 'react'
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
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className='w-full relative'>
                    <input className='input input-bordered w-full' type="text" placeholder='Enter your text...' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    <button type='submit'>
                        {loading ? <div>Loading...</div>:<span className='absolute top-1/2 right-0 -translate-y-1/2'><IoMdSend/></span>}
                        
                    </button>                 
                </div>
            </form>
        </div>
    )
}
