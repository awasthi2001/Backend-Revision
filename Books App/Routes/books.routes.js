import { Router } from "express";
import { handlePost } from "../Controllers/books.controller.js";


export const BookRouter = Router();


BookRouter.post('/',handlePost)