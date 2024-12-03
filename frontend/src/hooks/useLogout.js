import { useState } from "react";
import { useAuthContext} from "../context/AuthContext"
import toast from "react-hot-toast";

export const useLogout = () => {
    const { setAuthUser } = useAuthContext();
    const [loading,setLoading]=useState(false);  
    const logout = async () => {
        setLoading(true);
        try {
            const res=await fetch('/api/auth/logout');
            if(!res.ok){
                const error=await res.json();
                throw new Error(error.message || "something went wrong");
            }
            localStorage.removeItem('user');
            setAuthUser(null);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading,logout};
}