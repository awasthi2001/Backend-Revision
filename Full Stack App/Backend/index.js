const express = require('express');
const Connection = require('./config/db.js')
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const app = express();





app.get('/',(req,res)=>{
    res.send('welcome to full stack application')
})





app.listen(8000,()=>{
  Connection().then((res)=>{
    console.log(res)
    console.log('listening on',8080)
  }).catch((err)=>{
   console.log(err)
  })
 
})