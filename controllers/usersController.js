const User = require('../models/User')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
  const users = await User.findAll()
  res.json(users)
}

const getOneUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)
    if (!user) return res.status(400).json({ error: 'User not found' })

    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

const createUser = async (req, res) => {
  const { userName, firstName, lastName, password } = req.body

  try {
    const foundUser = await User.findAll({
      where: {
        userName
      }
    })

    if (foundUser.length) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = await User.create({
      userName,
      firstName,
      lastName,
      passwordHash
    })

    res.json({
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName
    })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = { getAllUsers, createUser, getOneUser }
