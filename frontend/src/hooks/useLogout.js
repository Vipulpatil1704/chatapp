import { useState } from "react";
import { useAuthContext} from "../context/AuthContext"
import toast from "react-hot-toast";
import API_BASE_URL from "../apiConfig";

export const useLogout = () => {
    const { setAuthUser } = useAuthContext();
    const [loading,setLoading]=useState(false);  
    const logout = async () => {
        setLoading(true);
        try {
            const res=await fetch(`${API_BASE_URL}/api/auth/logout`,{
                 credentials:'include'
            });
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