const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    passwordHash: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

module.exports = User
