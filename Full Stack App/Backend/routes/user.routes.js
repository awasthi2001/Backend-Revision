import { Router } from "express";
import { UserModel } from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const userRouter = Router();

userRouter.post('/register',async(req,res)=>{
    const {email,pass,name,age} = req.body
try {
    const IsAlready = await UserModel.findOne({ email: email})
    if(IsAlready!==null){
        res.status(400).send({
            message : 'Email already exists'
        })
    }else{
         bcrypt.hash(pass,8,async(err,hash)=>{
            await UserModel.create({email,age,name,hash})
            res.send('registered')
        })
    }
} catch (error) {
    console.log(error)
    res.status(500).send({
        message : 'Something went wrong'
    })
}
})


userRouter.post('/login',async(req,res)=>{
    const {email,pass} = req.body;
try {
    const user = await UserModel.findOne({email: email});
    if(user){
        bcrypt.compare(pass,user.pass,(err,result)=>{
        if(result){
       let token = jwt.sign({user_id: user._id},process.env.SECRET_KEY)
        res.status(200).send({
            message : 'successfull login',
            token : token
        })
        }
        else{
            res.send('wrong credentials')
        }
       })
    }else{
        res.send('wrong credentials');
    }
} catch (error) {
    res.status(500).send({
        message : 'Something went wrong'
    })
}
})