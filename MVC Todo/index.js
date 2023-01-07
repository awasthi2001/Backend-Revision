import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
mongoose.set("strictQuery", true);
import { Connection } from "./config/db.connect.js";
import { TodoRouter } from "./Routes/todo.routes.js";
dotenv.config();
const app = express();
app.use(express.json());
const Port = process.env.PORT;

app.use("/todo", TodoRouter);

app.listen(Port, async () => {
  try {
    let res = await Connection();
    console.log(res);
    console.log("listening on port", Port);
  } catch (error) {
    console.log("something went wrong");
  }
});
