import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    "title" : {type : String, required: true},
    "Status" : {type : Boolean, required: true}
},{
    versionKey : false,
    timestamps : true
}
)


export const TodoModel = mongoose.model('todos',TodoSchema)