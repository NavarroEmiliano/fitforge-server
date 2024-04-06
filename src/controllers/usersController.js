const bcrypt = require('bcrypt')
const usersService = require('../services/usersService.js')

const getAllUsersController = async (req, res) => {
  const allUsers = await usersService.getAllUsers()
  return res.send({ status: 'OK', data: allUsers })
}

const getOneUserController = async (req, res) => {
  try {
    const { id } = req.params
    const user = await usersService.getOneUser(id)
    return res.send({ status: 'OK', data: user })
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ status: 'FAILED', data: error.message })
  }
}

const createNewUserController = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body
    if (!email || !firstName || !lastName || !password) {
      return res.status(400).send({
        status: 'FAILED',
        data: {
          error: 'Missing fields'
        }
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const newUser = {
      email,
      firstName,
      lastName,
      passwordHash
    }
    const user = await usersService.createNewUser(newUser)

    return res.status(201).send({ status: 'OK', data: user })
  } catch (error) {
    return res.status(error.status || 500).send({
      status: 'FAILED',
      data: {
        error: error.message
      }
    })
  }
}

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params
    await usersService.deleteUser(id)

    return res
      .status(200)
      .send({ status: 'OK', data: 'User deleted successfully.' })
  } catch (error) {
    return res.status(error.status || 500).send({
      status: 'FAILED',
      data: {
        error: error.message
      }
    })
  }
}

const updateUserController = async (req, res) => {
  try {
    const {
      body: { email, firstName, lastName, password },
      params: { id }
    } = req

    if (!email || !firstName || !lastName || !password) {
      return res.status(400).send({
        status: 'FAILED',
        data: {
          error: 'Missing fields'
        }
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const newData = {
      email,
      firstName,
      lastName,
      passwordHash
    }

    const updatedUser = await usersService.updateUser(id, newData)

    return res.status(200).send({ status: 'OK', data: updatedUser })
  } catch (error) {
    return res.status(error.status || 500).send({
      status: 'FAILED',
      data: {
        error: error.message
      }
    })
  }
}

module.exports = {
  getAllUsersController,
  getOneUserController,
  createNewUserController,
  deleteUserController,
  updateUserController
}
