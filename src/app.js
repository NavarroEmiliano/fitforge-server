const express = require('express')
const v1UsersRouter = require('./v1/routes/usersRoutes')
const v1LoginRouter = require('./v1/routes/loginRoutes')
const v1ExercisesRouter = require('./v1/routes/exercisesRoutes')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', v1UsersRouter)
app.use('/api/v1/login', v1LoginRouter)
app.use('/api/v1/exercises', v1ExercisesRouter)

module.exports = app
