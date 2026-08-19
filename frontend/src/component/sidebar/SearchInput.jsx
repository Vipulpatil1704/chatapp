import { useContext, useState } from 'react'
import { FaSistrix } from "react-icons/fa6";
import { ConversationContext } from '../../context/ConversatonContext.jsx';
import useGetConversation from '../../hooks/useGetConversation.js';
import toast from 'react-hot-toast';
export default function SearchInput() {
  const [search, setSearch] = useState('');
  const { dispatch } = useContext(ConversationContext);
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
    <div className='search-wrap'>
      <form className='search-form' onSubmit={submitHandler}>
        <FaSistrix className='search-icon' />
        <input type="text" placeholder='Search people' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className='search-button' type='submit' aria-label='Search'><FaSistrix /></button>
      </form>

    </div>
  )
}
