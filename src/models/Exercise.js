const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const Exercise = sequelize.define(
  'Exercise',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    bodyPart: {
      type: DataTypes.STRING
    },
    equipment: {
      type: DataTypes.STRING
    },
    gifUrl: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    target: {
      type: DataTypes.STRING
    },
    secondaryMuscles: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    instructions: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  },
  {
    timestamps: true
  }
)

module.exports = Exercise
