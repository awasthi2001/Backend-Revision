const fs = require("fs");

const readallTodos = ()=>{
 return new Promise(function(resolve,reject){
    fs.readFile('./todos.json',(err,data)=>{
        if(err){
             reject(err)
        }else{
          resolve(JSON.parse(data)) 
        }
    })
 })
}

const updateAllTodos = (data)=>{
   return new Promise(function(resolve,reject){
    fs.writeFile('./todos.json', JSON.stringify(data,null,2),(err)=>{
        if(err){
            reject(err)
        }else{
            resolve('done')
        }
    })
   }) 
}

 let handlePost = async({todo})=>{
    const data =await readallTodos()
    let idx =0;
    for(let i=0; i<data.length; i++){
    idx = Math.max(idx,data[i].id);
    }
    let updated = {
      todo,
      status : false,
      id : idx+1
    }
    data.push(updated);
    await updateAllTodos(data)
    return updated
}

let handleDelete = async(id)=>{
    const data =await readallTodos()
    let idx =0;
    for(let i=0; i<data.length; i++){
    if(id==data[i].id){
        idx = i;
        break;
    }
    }
  let deletedTodo = data.splice(idx,1);
  await updateAllTodos(data);
  return deletedTodo;
}
let handleUpdate = async (id,todo)=>{
 const data = await readallTodos();
 let updatedTodo = data.map((ele,idx)=>{
   return id==ele.id ? {...ele,...todo} : ele;
 })
 for(let i=0; i<updatedTodo.length; i++){
  data[i] = updatedTodo[i];
 }
 await updateAllTodos(data);
 return true;
}

 module.exports  = {handlePost,readallTodos,handleDelete,handleUpdate}