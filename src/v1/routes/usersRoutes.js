const { Router } = require('express')
const usersController = require('../../controllers/usersController')
const router = Router()

router
  .get('/', usersController.getAllUsers)
  .get('/:id', usersController.getOneUser)
  .post('/', usersController.createNewUser)

module.exports = router
