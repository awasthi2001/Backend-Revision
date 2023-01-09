import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
    {
     "title" : {required : true , type : String},
     "genre" : {required : true , type : String},
     "price" : {required : true , type : Number},
     "author": {required : true , type : String}
    },
    {
        versionKey : false,
        timestamps : true
    }
)


export const Books = mongoose.model('Books',BookSchema)