import mongoose from "mongoose";
export function Connection() {
  return new Promise(function (resolve, reject) {
    mongoose.connect("mongodb://127.0.0.1:27017/crud-auth", (err) => {
      if (err) {
        reject("Unable to connect to DB");
      } else {
        resolve("Connected to DB");
      }
    });
  });
}
