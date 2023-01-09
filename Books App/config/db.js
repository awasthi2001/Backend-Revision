import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()
export function Connection(){
    return new Promise(function(resolve,reject){
        mongoose.connect(process.env.MONGODB_URL,(err)=>{
             if(err){
                reject('Disconnected from MongoDB')
             }else{
                resolve('Connected to MongoDB')
             }
        })
    })
}