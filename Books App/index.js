import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import { Connection } from './config/db.js';
import { BookRouter } from './Routes/books.routes.js';
mongoose.set('strictQuery', true)
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;


app.use('/books',BookRouter)



app.listen(PORT,()=>{
 Connection().then((res)=>{
    console.log(res)
    console.log('Listening on port',PORT)
 }).catch((err)=>{
    console.log(err)
 })
});