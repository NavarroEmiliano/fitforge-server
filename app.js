const express = require('express')
const usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app
