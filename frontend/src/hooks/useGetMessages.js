import { useContext, useEffect,useState } from "react"
import { ConversationContext } from "../context/ConversatonContext"
import toast from "react-hot-toast";
const useGetMessages = () => {
  const [loading,setLoading]=useState(false);
  const {state,dispatch}=useContext(ConversationContext);
  const {messages,selectedConversation}=state;
  useEffect(()=>{
    const getMessages= async () =>{
        try {
            setLoading(true);
            //api call
            const res=await fetch(`/api/messages/${selectedConversation._id}`);
            if(!res.ok){
                const error=await res.json();
                throw new Error(error);
            }
            const data=await res.json();
            // console.log(data);
            // console.log("earlier messages:",messages);
            dispatch({type:'setMessages',payload:data});
            // console.log("after messages:",messages);
            // console.log(state.messages);

        } catch (error) {
            toast.error(error);
        }
        finally{
            setLoading(false);
        }
    }
    getMessages()
  },[selectedConversation])
  return {messages,loading};
}

export default useGetMessages