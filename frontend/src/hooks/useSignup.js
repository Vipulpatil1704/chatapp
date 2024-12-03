import { useReducer } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import API_BASE_URL from "../apiConfig";
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_REQUEST':
            return {...state,loading:true};
        case 'FETCH_SUCCESS':
            return {...state,loading:false,user:action.payload};
        case 'FETCH_FAILED':
            return {...state,loading:false,error:action.payload};
        default:
            return state;
    }
}
export const useSignup=()=>{
    const {authUser,setAuthUser}=useAuthContext();
    const [state,dispatch]=useReducer(reducer,{loading:false,user:'',error:''});
    function handleInputErrors(username,email,password,confirmPassword,gender){
        if(!username || !email || !password || !confirmPassword || !gender){
            toast.error("Please fill all the fields");
            return true;
        }
        if(confirmPassword!==password){
            toast.error("Passwords do not match");
            return true;
        }
        else{
            return false;
        }
    }
    const signup= async (username,email,password,confirmPassword,gender)=>{
        const checkError=handleInputErrors(username,email,password,confirmPassword,gender);
        if(checkError){
            return ;
        }
        else{
            //validation done. Now we can make api call.
            dispatch({type:'FETCH_REQUEST'});
            try {
                //api call
                const res=await fetch(`${API_BASE_URL}/api/auth/signup`,{
                    method:'POST',
                    headers:{
                        "content-type":'application/json'
                    },
                    body:JSON.stringify({username,email,password,confirmPassword,gender})
                })
                if(!res.ok){
                    dispatch({type:'FETCH_FAILED',payload:'Signup Failed'});
                    return;
                }
                const user= await res.json();
                dispatch({type:'FETCH_SUCCESS',payload:user});
                localStorage.setItem('user',JSON.stringify(user));
                setAuthUser(user);
                toast.success("Signup successful");

            } catch (error) {
                toast.error(error.message);
                dispatch({type:'FETCH_FAILED',payload:error.message});
            }
        }
    }
    return {loading:state.loading,signup};
}