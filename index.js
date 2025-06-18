const express = require('express')
const { todoRouter } = require('./router/todos.router')


const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => {
    res.send('ok')
})

app.use('/todos', todoRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})