const { Exercise } = require('../models/index')

const getAllExercises = async () => {
  const allExercises = await Exercise.findAll()
  return allExercises
}

const getOneExercise = async id => {
  const exercise = await Exercise.findByPk(id)

  if (!exercise)
    throw {
      status: 404,
      message: 'Exercise not found.'
    }
  return exercise
}

const createNewExercise = async newExercise => {
  const [exercise, created] = await Exercise.findOrCreate({
    where: { name: newExercise.name, id: newExercise.id },
    defaults: newExercise
  })

  if (!created) {
    throw {
      status: 409,
      message: 'The exercise already exists in the database.'
    }
  }

  return exercise
}

const deleteExercise = async id => {
  const exercise = await Exercise.destroy({ where: { id } })
  if (!exercise) {
    throw {
      status: 404,
      message: 'Exercise not found.'
    }
  }

  return exercise
}

const updateExercise = async (id, newData) => {
  const exercise = await Exercise.findByPk(id)

  if (!exercise) {
    throw {
      status: 404,
      message: 'Exercise not found.'
    }
  }

  const updatedExercise = await exercise.update(newData)

  return updatedExercise
}

module.exports = {
  getAllExercises,
  getOneExercise,
  createNewExercise,
  deleteExercise,
  updateExercise
}
