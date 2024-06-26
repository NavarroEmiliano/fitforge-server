const loginService = require('../services/loginService')

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await loginService.loginUser(email, password)
    return res.status(200).send({ status: 'OK', data: user })
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ status: 'FAILED', data: error.message })
  }
}

module.exports = { loginUserController }
