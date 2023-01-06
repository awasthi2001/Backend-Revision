import { Router } from "express";

import { getAllTodos, handlePost } from "../Controllers/todo.controller.js";

export const TodoRouter = Router();

TodoRouter.get('/',getAllTodos)
TodoRouter.post('/create',handlePost)