const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')

const loginUser = async (req, res) => {
  const { userName, password } = req.body

  const user = await User.findOne({
    where: {
      userName
    }
  })

   const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(password, user.passwordHash)


  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'Invalid username or password'
    })
  }

  const userForToken = {
    username: user.userName,
    id: user.id
  }


  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60
  })

  res.status(200).send({ token, username: user.userName, firsName: user.firstName }) 
}

module.exports = { loginUser }
