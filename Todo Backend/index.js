const express = require('express');
const { handlePost, readallTodos, handleDelete } = require('./handlers.js');

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
app.delete('/:id',async(req,res)=>{
    let {id} = req.params;
    let deletedTodo = await handleDelete(id);
    res.status(200).send(
        {
            message :'successfully deleted',
            todo : deletedTodo
        }
    )
})
app.listen(8001,(err)=>{
    if(err){
        console.log("hello ",err);
    }else{
        console.log("listening on 8001")
    }
})