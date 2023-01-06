import { Router } from "express";

import { getAllTodos, handleDelete, handlePost, handleUpdate } from "../Controllers/todo.controller.js";

export const TodoRouter = Router();

TodoRouter.get('/',getAllTodos)
TodoRouter.post('/create',handlePost)
TodoRouter.delete('/:id',handleDelete)
TodoRouter.patch('/:id',handleUpdate)