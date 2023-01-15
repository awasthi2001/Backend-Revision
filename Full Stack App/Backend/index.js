const express = require('express');

const app = express();





app.get('/',(req,res)=>{
    res.send('welcome to full stack application')
})





app.listen(8000,()=>{
  console.log('listening on',8080)
})