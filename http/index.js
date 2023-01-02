const http = require('http');


const options = {
    hostname : 'jsonplaceholder.typicode.com',
    path : '/posts',
    method : 'GET'
}

const request = http.request(options, (res) => {
    let data = '';
    res.on('data',(chunk)=>{
        data += chunk;
    })
    res.on('end',() =>{
        data = JSON.parse(data);
        console.log(data)
    })
}).on('error',(err)=>{
    console.log(err)
}).end();