import { useEffect,useState } from "react";
import toast from "react-hot-toast";


const useGetConversation = () => {
  const [loading,setLoading]=useState(true);
  const [conversations,setConversations]=useState([]);
  useEffect(()=>{
    const getConversations=async ()=>{
        setLoading(true);
        try {
            const res=await fetch('/api/users');
            if(!res.ok){
                const error=await res.json();
                throw new Error(error);
            }
            const data=await res.json();
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    getConversations();
  },[])
  return {loading,conversations};
}

export default useGetConversation