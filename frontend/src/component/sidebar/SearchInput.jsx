import React, { useContext, useState } from 'react'
import { FaSistrix } from "react-icons/fa6";
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import useGetConversation from '../../hooks/useGetConversation.js';
export default function SearchInput() {
  const [search, setSearch] = useState('');
  const { state, dispatch } = useContext(ConversationContext);
  const { conversations } = useGetConversation();
  // console.log(conversations);
  function submitHandler(e){
    e.preventDefault();
    if(!search){
      return;
    }
    const conversation=conversations.find((conversation)=>conversation.username.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      dispatch({type:'setSelectedConversation',payload:conversation});
      setSearch("");
    }
    else{
      toast.error("no user found with this username");
    }
  }
  return (
    <div className='flex gap-2'>
      <form onSubmit={submitHandler}>
        <input className='input input-bordered w-full rounded-2xl' type="text" placeholder='search...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className='btn btn-circle bg-sky-500 text-white' type='submit'><FaSistrix /></button>
      </form>

    </div>
  )
}
