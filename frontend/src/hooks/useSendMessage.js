import { useContext,useState } from "react";
import { ConversationContext } from "../context/ConversatonContext";
import toast from "react-hot-toast";
import API_BASE_URL from "../apiConfig";

const useSendMessage = () => {
  const [loading,setLoading]=useState(false);
  const {state,dispatch} = useContext(ConversationContext);
//   console.log(state);
  const sendMessage = async (message)=>{
    try {
        setLoading(true);
        //api call
        const res=await fetch(`${API_BASE_URL}/api/messages/send/${state.selectedConversation._id}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({message}),
            credentials:'include'
        })
        if(!res.ok){
            const error=await res.json();
            throw new Error(error);
        }
        const data=await res.json();
        // console.log(data);
        //After sending message , messages are changing and to reflect those changes , we need to update messages state bz then only changes will gets reflected on screen
        dispatch({type:'setMessages',payload:[...state.messages,data]});
    } catch (error) {
        toast.error(error.message);
    }
    finally{
        setLoading(false);
    }
  }
  return {loading,sendMessage}
}

export default useSendMessage