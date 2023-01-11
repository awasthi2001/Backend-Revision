import { Router } from "express";
import { handleDelete, handleGet, handlePatch, handlePost } from "../Controllers/books.controller.js";

export const BookRouter = Router();

BookRouter.post("/", handlePost);

BookRouter.get("/", handleGet);

BookRouter.patch("/:id",handlePatch)
BookRouter.delete("/:id",handleDelete)