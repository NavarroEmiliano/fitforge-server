const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const Set = sequelize.define(
  'Set',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    weight: {
      type: DataTypes.FLOAT
    },
    repetitions: {
      type: DataTypes.INTEGER
    },
    typeSet: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: true
  }
)

module.exports = Set
