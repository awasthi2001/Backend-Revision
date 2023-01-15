const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

async function Connection(){
    return new Promise(function(resolve, reject){
        mongoose.connect(process.env.MongoURL,(err)=>{
            if(err){
            reject('Not connected to DB server')
            }else{
            resolve('Connected to DB')
            }
        })
    })
}

module.exports = Connection