require('dotenv').config()
require('./models/User')
const app = require('./app')
const sequelize = require('./database/database')
const { loadExercisesFromAPI } = require('./services/loadExercisesFromAPI')

const PORT = process.env.PORT || 3001

const connection = async () => {
  try {
    await sequelize.sync({ force: true })
    console.log(
      'The connection to the database has been established successfully.'
    )
/*     const response = await loadExercisesFromAPI()
    console.log(response) */
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

connection()
