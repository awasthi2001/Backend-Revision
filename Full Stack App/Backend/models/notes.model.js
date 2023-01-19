import mongoose from "mongoose";

const NotesSchema = mongoose.Schema(
    {
     title : String,
     note : String,
     category : String,
     author : String,
    },
    {
        versionKey : false,
        timestamps : true
    }
)

export const NoteModel = mongoose.model("note",NotesSchema)