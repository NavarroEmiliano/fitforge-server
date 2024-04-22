const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../models')

const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: {
      email
    }
  })


  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    throw {
      status: 401,
      message: 'Invalid email or password'
    }
  }

  const userForToken = {
    email: user.email,
    id: user.id
  }

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60
  })

  return { token, email: user.email, userName: user.userName }
}

module.exports = {
  loginUser
}
