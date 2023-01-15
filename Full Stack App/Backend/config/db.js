const mongoose = require('mongoose');


export async function Connection(){
    return new Promise(function(resolve, reject){
        mongoose.connect('mongodb+srv://akshansh:<password>@cluster0.8meu9xh.mongodb.net/Notes_FullStack?retryWrites=true&w=majority',(err)=>{
            if(err){
            reject('Not connected to DB server')
            }else{
            resolve('Connected to DB')
            }
        })
    })
}