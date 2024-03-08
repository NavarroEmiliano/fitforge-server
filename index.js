require('dotenv').config()
require('./models/User')
const app = require('./app')
const sequelize = require('./database/database')

const PORT = process.env.PORT

const connection = async () => {
  try {
    await sequelize.sync({ force: false })
    console.log(
      'The connection to the database has been established successfully.'
    )
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

connection()
