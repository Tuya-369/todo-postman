const todos = []

const getTodos = (req, res) => {
    res.json({ todos })
}

const addTodo = (req, res) => {
    const { desc } = req.body

    const todo = {
        id: 1,
        desc,
        isComplete: false
    }

    todos.push(todo)

    res.json({ success: true, todos })
}

const getTodoById = (req, res) => {
    const { id } = req.params

    const todo = todos.find((todo) => todo.id === Number(id))

    if (!todo) {

        res.json({ success: false, message: 'not found todo' })
    }

    res.json({ todo })
}

module.exports = {
    getTodoById, getTodos, addTodo
}