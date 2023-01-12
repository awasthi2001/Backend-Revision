import { secretKey } from "../index.js";
import jwt from 'jsonwebtoken'
export default function Auth(req,res,next) {
    let token  = req.headers.authorization
 try {
    jwt.verify(token,secretKey,(err,decode)=>{
        if(decode){
            next();
        }else{
            res.status(400).send({
                message : 'login first'
            })
        }
    })
 } catch (error) {
    console.log(error)
 }
}
