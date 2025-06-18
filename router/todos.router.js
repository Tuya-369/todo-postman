const express = require('express')
const { getTodos, addTodo, getTodoById } = require('../controller/todo.controller')

const todoRouter = express.Router()

todoRouter.get('/', getTodos)

todoRouter.post('/', addTodo)

todoRouter.get('/:id', getTodoById)

module.exports = {
    todoRouter
}