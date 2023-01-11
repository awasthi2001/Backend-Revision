import { Books } from "../Models/books.model.js";



export async function handlePost(req,res){
    try {
        const book = req.body;
        if(book.title && book.genre && book.price && book.author){
           let postbook = await Books.create(book,)
           return res.status(201).send({
            message : 'success',
            book : postbook
           })
        }else{
           return res.status(400).send({
                message: "Required fields are missing"
            });
        }
    } catch (error) {
        return res.status(500).send({
            message : 'Something went wrong'
        })
    }
}

export async function handleGet(req,res){     
    try {
        let {low_price,high_price,genre} = req.query;
        if(low_price && high_price){
            let books = await Books.find({$and:[{price:{$lte:Number(high_price)}},{price:{$gte:Number(low_price)}}]}).sort({createdAt:-1})
            return res.status(200).send(books)
        }else if(genre){
            let books = await Books.find({genre:genre}).sort({createdAt:-1})
            return res.status(200).send(books)
        }else{
            let books = await Books.find().sort({createdAt:-1})
            return res.status(200).send(books)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message : 'Something went wrong'
        })
    }
}

export async function handlePatch(req,res){     
    try {
        let {id} = req.params
        let data = req.body;
        if(id && data){
          let updated = await Books.findByIdAndUpdate(id,data,{new : true})

         res.status(200).send({
            messgae : 'success',
            updated : updated
         })
        }else{
          res.status(404).send({
            message : 'Bad Request'
          })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message : 'Something went wrong'
        })
    }
}

export async function handleDelete(req,res){     
    try {
        let {id} = req.params
        if(id){
          await Books.findByIdAndDelete(id)
         res.status(200).send({
            messgae : 'successfully deleted'
         })
        }else{
          res.status(404).send({
            message : 'Bad Request'
          })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message : 'Something went wrong'
        })
    }
}