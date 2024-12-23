import { useEffect,useState } from "react";
import toast from "react-hot-toast";
import API_BASE_URL from "../apiConfig";
console.log(API_BASE_URL);

const useGetConversation = () => {
  const [loading,setLoading]=useState(true);
  const [conversations,setConversations]=useState([]);
  useEffect(()=>{
    const getConversations=async ()=>{
        setLoading(true);
        try {
            const res=await fetch(`${API_BASE_URL}/api/users`,{
                 credentials:'include'
            });
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