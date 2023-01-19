import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
     email : String,
     pass : String,
     name : String,
     age : Number,
    },
    {
        versionKey : false,
        timestamps : true
    }
)

export const UserModel = mongoose.model("user",UserSchema)