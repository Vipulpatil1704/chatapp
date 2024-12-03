import React, { useContext, useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { ConversationContext } from '../context/conversatonContext';
import notificationSound from '../assets/notification.mp3'
const useListenMessage = ()=>{
    const {socket}=useSocketContext();
    const {state,dispatch}=useContext(ConversationContext);
    const {messages}=state;
    useEffect(()=>{
        socket?.on('newMessage',(newMessage)=>{
            const sound=new Audio(notificationSound);
            sound.play();
            // console.log(notificationSound);
            dispatch({type:'setMessages',payload:[...messages,newMessage]})
        })
        // socket?.on('undeliveredMsg',(undeliveredMsgArr)=>{
        //     dispatch({type:'setMessages',payload:[...messages,...undeliveredMsgArr]});
        // })
        // return ()=>socket?.off('newMessage');
        return ()=>{  
            socket?.off('newMessage');
            // socket?.off('undeliveredMsg');
        
        }
    },[socket,messages,dispatch])
}

export default useListenMessage