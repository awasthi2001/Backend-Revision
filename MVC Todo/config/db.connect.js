import mongoose from 'mongoose';

export function Connection(){
    return new Promise(function(resolve,reject){
       mongoose.connect('mongodb+srv://akshansh:awasthi@cluster0.8meu9xh.mongodb.net/Todos?retryWrites=true&w=majority',(err)=>{
          if(err){
            reject('Something went wrong')
          }else{
            resolve('Connected To MongoDB')
          }
       })
    })
}