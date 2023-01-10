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