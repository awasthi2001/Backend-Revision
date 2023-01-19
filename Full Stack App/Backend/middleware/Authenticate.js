import jwt  from "jsonwebtoken";
import * as env from 'dotenv'
env.config()

const authenticate = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
      jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(decoded){
           next();
        }else{
           res.status(400).send({
            message : 'please Login first'
           })
        }
      })
    }else{
        res.status(500).send({
            message : 'Something went wrong'
        })
    }
}