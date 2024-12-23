import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const isAuthenticate=async (req,res,next)=>{
    try {
        const token=req.cookies.access_token;
        if(!token){
            return next(errorHandler(401,"unauthorised"));
        }
        jwt.verify(token,process.env.JWT_SECRET , (err,user)=>{
            if(err){
                return next(errorHandler(403,"forbidden"));
            }
            req.user=user;
            next();
        })
    } catch (error) {
        next(error);
    }
}