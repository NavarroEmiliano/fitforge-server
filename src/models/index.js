const User = require('./User')
const WorkoutTemplate = require('./WorkoutTemplate')
const Exercise = require('./Exercise')
const Set = require('./Set')
const Record = require('./Record')
const WorkoutTemplate_Exercise = require('./WorkoutTemplateExercise')

User.hasMany(WorkoutTemplate)
WorkoutTemplate.belongsTo(User)

User.hasMany(Record)
Record.belongsTo(User)

WorkoutTemplate.belongsToMany(Exercise, { through: WorkoutTemplate_Exercise })
Exercise.belongsToMany(WorkoutTemplate, { through: WorkoutTemplate_Exercise })


WorkoutTemplate_Exercise.hasMany(Set)
Set.belongsTo(WorkoutTemplate_Exercise) 

module.exports = {
  User,
  WorkoutTemplate,
  Exercise,
  Set,
  Record,
  WorkoutTemplate_Exercise
}
