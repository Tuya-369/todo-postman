import { nanoid } from "nanoid";
import fs from "fs-extra";
import { Todo } from "../type/types";
import { Request, Response } from "express";
let todos: Todo[] = [];

export const getTodos = (req: Request, res: Response) => {
  const todos = fs.readFileSyns("./user.json", { encoding: "utf8", flag: "r" });
  res.json(JSON.parse(todos));
};

export const addTodo = (req: Request, res: Response) => {
  const { desc } = req.body;
  const unqId = nanoid();

  const todo = {
    id: unqId,
    desc,
    isComplete: false,
  };

  todos.push(todo);

  res.json({ success: true, todos });
};

export const getTodoById = (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({ success: false, message: "Todo not found" });
  }

  res.json({ todo });
};
