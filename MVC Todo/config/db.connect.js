import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config();
export function Connection(){
    return new Promise(function(resolve,reject){
       mongoose.connect(process.env.mongoUrl,(err)=>{
          if(err){
            reject('Something went wrong')
          }else{
            resolve('Connected To MongoDB')
          }
       })
    })
}