const express = require('express');

const app = express();
//Example of Queries 
app.get('/weather',(req,res)=>{
    let data = {
        delhi : 'Winter',
        Mumbai : 'Summer',
        kolkata : 'Rainy'
    }
    let {city} = req.query;
    const weather = data[city];
    res.send(`Its ${weather} weather in ${city}`)
})
app.get('/',(req,res)=>{
    res.send("Its a home route")
})

//Example of Params
app.get('/students/:id',(req,res)=>{
    let {id} = req.params
    res.send(`this is data of student with id ${id}`)
})
//Invalid route error
app.get('*',(req,res)=>{
    res.send("<h1>Invalid route</h1>")
})
app.listen(3000,()=>{
    console.log('listening on ',3000);
})

//Example of Parameteres

