import { Router } from "express";


export const BookRouter = Router();


BookRouter.post('/',function(req,res){
    const book = req.body;
    console.log(book)
})