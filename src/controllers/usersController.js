const bcrypt = require('bcrypt')
const usersService = require('../services/usersService.js')

const getAllUsers = async (req, res) => {
  const allUsers = await usersService.getAllUsers()
  res.send({ status: 'OK', data: allUsers })
}

const getOneUser = async (req, res) => {
  const { id } = req.params
  const user = await usersService.getOneUser(id)
  res.send({ status: 'OK', data: user })
}

const createNewUser = async (req, res) => {
  const { userName, firstName, lastName, password } = req.body
  if (!userName || !firstName || !lastName || !password) {
    return
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const newUser = {
    userName,
    firstName,
    lastName,
    passwordHash
  }
  const [user, created] = await usersService.createNewUser(newUser)

  /*La linea de abajo sirve para extraer la contraseña y no mostrarla en la response  */
  const { passwordHash: existingPasswordHash, ...userWithoutPasswordHash } =
    user.toJSON()

  res.status(201).send({ status: 'OK', data: userWithoutPasswordHash })
}

module.exports = { getAllUsers, getOneUser, createNewUser }
