const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'postgres://postgres:Password1@localhost:5432/gym_app_db',{
    logging:false
  }
)

module.exports = sequelize
