import { Router } from "express";
import { handleDelete, handleGet, handlePatch, handlePost } from "../Controllers/books.controller.js";
import { validatorpost } from "../Middleware/Validator.js";

export const BookRouter = Router();

BookRouter.post("/",validatorpost,handlePost);

BookRouter.get("/", handleGet);

BookRouter.patch("/:id",handlePatch)
BookRouter.delete("/:id",handleDelete)