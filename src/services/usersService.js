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
  return user
}

const createNewUser = async newUser => {
  const user = await User.findOrCreate({
    where: { userName: newUser.userName },
    defaults: newUser
  })

  return user
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser
}
