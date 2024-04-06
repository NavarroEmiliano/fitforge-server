const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
const WorkoutTemplate = require('./WorkoutTemplate')
const Exercise = require('./Exercise')

const WorkoutTemplate_Exercise = sequelize.define('WorkoutTemplate_Exercise', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

module.exports = WorkoutTemplate_Exercise
