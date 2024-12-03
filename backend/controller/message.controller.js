import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import {getReceiverSocketId, io} from "../socket/socket.js";

export const sendMessage =async (req,res,next)=>{
     try {
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user.id;
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            })
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            message
        })
        await newMessage.save();
        // console.log(conversation);
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await conversation.save();
        //socket io functionality
        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage',newMessage);
        }
        else{
            //it means receiver is offline.
            // getUndeliveredMsg(newMessage);
        }
        res.status(201).json(newMessage);

     } catch (error) {
        console.log(error);
        next(error);
     }
}
export const getMessage =async (req,res,next)=>{
    try {
       const {id:userToMessage}= req.params;
       //this above is the receiver id
       const senderId=req.user.id;
       let   conversation=await Conversation.findOne({
        participants:{$all:[senderId,userToMessage]}
       }).populate('messages');
       if(!conversation){
           return res.status(200).json([])
       }
       const messages=conversation.messages;
       res.status(200).json(messages);
    } catch (error) {
        next(error);
    }
}