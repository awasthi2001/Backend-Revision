import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    Name: { required: true, type: String },
    Email: { required: true, type: String },
    Password: { required: true, type: String },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

export const UserModel = mongoose.model("users", UserSchema);
