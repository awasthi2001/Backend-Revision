const http  = require('http');


const server = http.createServer(function(req,res){
    res.end("hello world!");
})


server.listen(8000,()=>{
    console.log("listening on 8000")
})