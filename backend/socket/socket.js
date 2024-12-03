import {Server} from 'socket.io'
import http from 'http'
import express from 'express'
const app=express();
const server =http.createServer(app);
const io=new Server(server,{
    cors:{
        // origin:["http://localhost:5173"],
        origin:['https://chatapp-1-9mt9.onrender.com/'],
        methods:["GET","POST"],
        credentials:true
    }
})
const userSocketMap={};
// const undeliveredMsg={};
// export const getUndeliveredMsg=(msg,receiverId)=>{
//     if(!undeliveredMsg[receiverId]){
//         undeliveredMsg[receiverId]=[msg];
//     }
//     else{
//         undeliveredMsg[receiverId]=[...undeliveredMsg[receiverId],msg];
//     }
// }
export const getReceiverSocketId = (receiverId)=>{
    return userSocketMap[receiverId];
}
io.on('connection',(socket)=>{
    console.log('A user connected',socket.id);
    const userId=socket.handshake.query.userId;
    if(userId!=='undefined'){
        userSocketMap[userId]=socket.id;
        //also handles undelivered msg
        // if(undeliveredMsg[userId]){
        //     io.emit('undeliveredMsg',undeliveredMsg[userId]);
        // }
    }
    io.emit('getOnlineUsers',Object.keys(userSocketMap))
    socket.on('disconnect',()=>{
        console.log('User disconnected',socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers',Object.keys(userSocketMap));
        // delete undeliveredMsg[userId];
    })
})
export {app,server,io}
