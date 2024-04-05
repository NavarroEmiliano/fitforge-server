const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')

const WorkoutTemplate = sequelize.define(
  'Workout_Template',
  {
    template_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

module.exports = WorkoutTemplate
