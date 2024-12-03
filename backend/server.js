import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.routes.js'
import messageRoute from './routes/message.routes.js'
import userRoute from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import { server,app } from './socket/socket.js'
import path from 'path'  
dotenv.config();
// const app=express();
//middleware for parsing json bodies
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to mongodb database")
}).catch((err)=>{
    console.log(err);
})
const PORT=process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('hello world');
})
//Routes
app.use('/api/auth',authRoute);
app.use('/api/messages',messageRoute);
app.use('/api/users',userRoute);
// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`)
// });

//now instead of normal express web server ,will be using socket.io for real time communication

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});


//always keep the error handler at last.
//error handler
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})