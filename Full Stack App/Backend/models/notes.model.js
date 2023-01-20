import mongoose from "mongoose";

const NotesSchema = mongoose.Schema(
    {
     title : String,
     note : String,
     category : String,
     userId : String,
    },
    {
        versionKey : false,
        timestamps : true
    }
)

export const NoteModel = mongoose.model("note",NotesSchema)


/*
user_id who is making the request 

user_id which is present in the note


*/