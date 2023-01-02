const express = require('express');
const { handlePost, readallTodos } = require('./handlers.js');

const app = express();
app.use(express.json())
app.post('/', async function(req, res){
    let data = req.body;
    if(data){
        let post = await handlePost(data);
        res.status(201).send({
         message : 'successfully created', 
         todo : post
        })
    }
})

app.get('/',async(req,res)=>{
    let data = await readallTodos()
    res.status(200).send(data)
})
app.listen(8001,(err)=>{
    if(err){
        console.log("hello ",err);
    }else{
        console.log("listening on 8001")
    }
})