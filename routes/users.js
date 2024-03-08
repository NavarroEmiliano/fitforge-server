const { Router } = require('express')
const { getAllUsers, createUser, getOneUser } = require('../controllers/usersController')
const usersRouter = Router()

usersRouter.get('/', getAllUsers)
 usersRouter.get('/:id',getOneUser)
usersRouter.post('/', createUser)

module.exports = usersRouter
