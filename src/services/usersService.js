const { User } = require('../models/index')

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['passwordHash'] }
  })
  return allUsers
}

const getOneUser = async id => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['passwordHash'] }
  })

  if (!user)
    throw {
      status: 404,
      message: 'User not found.'
    }
  return user
}

const createNewUser = async newUser => {

  const [user, created] = await User.findOrCreate({
    where: { email: newUser.email },
    defaults: newUser
  })

  if (!created) {
    throw {
      status: 409,
      message: 'The user already exists in the database.'
    }
  }

  /*La linea de abajo sirve para extraer la contraseña y no mostrarla en la response  */
  const { passwordHash: existingPasswordHash, ...userWithoutPasswordHash } =
    user.toJSON()

  return userWithoutPasswordHash
}

const deleteUser = async id => {
  const user = await User.destroy({ where: { id } })
  if (!user) {
    throw {
      status: 404,
      message: 'User not found.'
    }
  }

  return user
}

const updateUser = async (id, newData) => {
  const user = await User.findByPk(id)

  if (!user) {
    throw {
      status: 404,
      message: 'User not found.'
    }
  }

  const updatedUser = await user.update(newData)

  return updatedUser
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteUser,
  updateUser
}
