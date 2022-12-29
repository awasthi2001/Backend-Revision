const express = require('express');
const validation = require('./Middleware/validation.js');

const app = express();
app.use(express.json())
app.use(validation)


app.post('/movies',function(req,res){
 res.send({
    message : "Successfully added",
    body : req.body
 })
})


app.listen(8080,()=>{
    console.log("listening on ",8080)
})