import express, { json } from 'express';
import {Connection} from './config/db.js';
import { set } from 'mongoose';
import cors from 'cors'
import { userRouter } from './routes/user.routes.js';
import { authenticate } from './middleware/Authenticate.js';
import { notesRouter } from './routes/notes.routes.js';
set('strictQuery', true);
const app = express();
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('welcome to full stack application')
})

app.get('*',(req,res)=>{
res.send("Invalid endpoint")
})

app.use('/user',userRouter)
app.use(authenticate)
app.use('/notes',notesRouter);






app.listen(8000,()=>{
  Connection().then((res)=>{
    console.log(res)
    console.log('listening on',8000)
  }).catch((err)=>{
   console.log(err)
  }) 
})