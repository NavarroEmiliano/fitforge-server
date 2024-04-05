const User = require('./User')
const WorkoutTemplate = require('./WorkoutTemplate')
const Exercise = require('./Exercise')
const Set = require('./Set')
const Record = require('./Record')

User.hasMany(WorkoutTemplate, { foreignKey: 'user_id' })
WorkoutTemplate.belongsTo(User, { foreignKey: 'user_id' })

User.hasMany(Record, { foreignKey: 'user_id' })
Record.belongsTo(User, { foreignKey: 'user_id' })

WorkoutTemplate.hasMany(Set, { foreignKey: 'template_id' })
Set.belongsTo(WorkoutTemplate, { foreignKey: 'template_id' })

Set.hasOne(Exercise, { foreignKey: 'exercise_id' })
Exercise.belongsToMany(Set, { foreignKey: 'exercise_id' })

module.exports = {
  User,
  WorkoutTemplate,
  Exercise,
  Set,
  Record
}
