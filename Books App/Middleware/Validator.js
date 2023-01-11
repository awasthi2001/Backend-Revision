export function validatorpost(req,res,next){
    let {title,price,genre,author} = req.body
    if(title && price && genre && author){
        next();
    }else{
        res.status(400).send({
            err: "All the fields are not there"
        })
    }
 }