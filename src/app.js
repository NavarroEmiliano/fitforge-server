const express = require('express')
const v1UsersRouter = require('./v1/routes/usersRoutes')
const v1LoginRouter = require('./v1/routes/loginRoutes')
const app = express()


app.use(express.json())

app.use('/api/v1/users', v1UsersRouter)
app.use('/api/v1/login', v1LoginRouter)

module.exports = app
