import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogin=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();
    function handleInputErrors(email,password){
        if(!email || !password){
            return true;
        }
        return false;   
    }
    const login =async (email,password)=>{
        const checkErrors=handleInputErrors(email,password);
        if(checkErrors){
            return ;
        }
        try {
            setLoading(true);
            const res=await fetch('/api/auth/login',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({email,password})
            })
            if(!res.ok){
                const error=await res.json();
                toast.error(error.message || 'something went wrong');
                throw new Error(error);
            }
            const data=await res.json();
            localStorage.setItem('user',JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }
    return {loading,login};
}