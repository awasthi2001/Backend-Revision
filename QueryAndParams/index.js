const express = require('express');

const app = express();

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


app.listen(3000,()=>{
    console.log('listening on ',3000);
})