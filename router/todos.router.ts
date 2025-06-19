import express from "express";
import { addTodo, getTodoById, getTodos } from "../controller/todo.controller";

const todoRouter = express.Router();

todoRouter.get("/", getTodos);

todoRouter.post("/", addTodo);

// todoRouter.get("/:id", getTodoById);

// todoRouter.put("/update/:id", putUpdate);

export default todoRouter;
