import { Router } from "express";
import { handleGet, handlePost } from "../Controllers/books.controller.js";

export const BookRouter = Router();

BookRouter.post("/", handlePost);

BookRouter.get("/", handleGet);
