import express, { json } from 'express';
import {Connection} from './config/db.js';
import { set } from 'mongoose';
import { userRouter } from './routes/user.routes.js';
import { authenticate } from './middleware/Authenticate.js';
set('strictQuery', true);
const app = express();
app.use(express.json())

app.use('/user',userRouter)




app.get('/',authenticate,(req,res)=>{
    res.send('welcome to full stack application')
})





app.listen(8000,()=>{
  Connection().then((res)=>{
    console.log(res)
    console.log('listening on',8080)
  }).catch((err)=>{
   console.log(err)
  }) 
})