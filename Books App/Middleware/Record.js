import fs from 'fs'

export function Record(id,Request){
let data = `The document with id: ${id} has been ${Request} `+"\n";
console.log(data)
 fs.appendFile('./record.txt',data,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("done")
    }
 })
}