const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const Record = sequelize.define(
  'Record',
  {
    record_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sets: {
      type: DataTypes.JSON
    },
    duration: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: true
  }
)

module.exports = Record