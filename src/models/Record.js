const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const Record = sequelize.define(
  'Record',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId:{
      type:DataTypes.INTEGER,
    }
    ,
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