import React,{createContext, useContext, useEffect, useState} from 'react'
import { useAuthContext } from './AuthContext.jsx';
import {io} from 'socket.io-client'
import API_BASE_URL from '../apiConfig.js';
export const SocketContext =createContext();
export const useSocketContext=()=>{
    return useContext(SocketContext);
}
export const SocketContextProvider=({children})=>{
    const [socket,setSocket]=useState(null); 
    const [onlineUsers,setOnlineUsers]=useState([]);
    const [typingUserId,setTypingUserId]=useState(null);
    const {authUser} = useAuthContext();
    useEffect(()=>{
        if(authUser){
            const socket=io(API_BASE_URL,{
                query: {
                    userId:authUser._id,
                },
                transports:['websocket']
            })
            setSocket(socket);
            socket.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users);
            })
            socket.on('typing',({senderId,isTyping})=>{
                setTypingUserId(isTyping ? senderId : null);
            })
            return ()=>socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
            setTypingUserId(null);
        }
    },[authUser])
    return <SocketContext.Provider value={{socket,onlineUsers,typingUserId}}>
        {children}
    </SocketContext.Provider>
}
export default SocketContext