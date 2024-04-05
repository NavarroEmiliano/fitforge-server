const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const Exercise = sequelize.define(
  'Exercise',
  {
    exercise_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    body_part: {
      type: DataTypes.STRING
    },
    equipment: {
      type: DataTypes.STRING
    },
    gif_url: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    target: {
      type: DataTypes.STRING
    },
    secondary_muscles: {
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
