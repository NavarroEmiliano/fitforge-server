const exercisesService = require('../services/exercisesService')

const getAllExercisesController = async (req, res) => {
  const allExercises = await exercisesService.getAllExercises()
  return res.send({ status: 'OK', data: allExercises })
}

const getOneExerciseController = async (req, res) => {
  try {
    const { id } = req.params
    const exercise = await exercisesService.getOneExercise(id)
    return res.send({ status: 'OK', data: exercise })
  } catch (error) {
    return res
      .status(error.status || 500)
      .send({ status: 'FAILED', data: error.message })
  }
}

const createNewExerciseController = async (req, res) => {
  try {
    const {
      id,
      bodyPart,
      equipment,
      gifUrl,
      name,
      target,
      secondaryMuscles,
      instructions
    } = req.body

    if (
      !id ||
      !bodyPart ||
      !equipment ||
      !gifUrl ||
      !name ||
      !target ||
      !secondaryMuscles.length ||
      !instructions.length
    ) {
      return res.status(400).send({
        status: 'FAILED',
        data: {
          error: 'Missing fields'
        }
      })
    }

    const newExercise = {
      id,
      bodyPart,
      equipment,
      gifUrl,
      name,
      target,
      secondaryMuscles,
      instructions
    }

    const exercise = await exercisesService.createNewExercise(newExercise)

    return res.status(201).send({ status: 'OK', data: exercise })
  } catch (error) {
    return res.status(error.status || 500).send({
      status: 'FAILED',
      data: {
        error: error.message
      }
    })
  }
}

const deleteExerciseController = async (req, res) => {
  try {
    const { id } = req.params
    await exercisesService.deleteExercise(id)

    return res
      .status(200)
      .send({ status: 'OK', data: 'Exercise deleted successfully.' })
  } catch (error) {
    return res.status(error.status || 500).send({
      status: 'FAILED',
      data: {
        error: error.message
      }
    })
  }
}

const updateExerciseController = async (req, res) => {
  try {
    const {
      body: {
        bodyPart,
        equipment,
        gifUrl,
        name,
        target,
        secondaryMuscles,
        instructions
      },
      params: { id }
    } = req

    if (
      !bodyPart ||
      !equipment ||
      !gifUrl ||
      !name ||
      !target ||
      !secondaryMuscles.length ||
      !instructions.length
    ) {
      return res.status(400).send({
        status: 'FAILED',
        data: {
          error: 'Missing fields'
        }
      })
    }

    const newData = {
      bodyPart,
      equipment,
      gifUrl,
      name,
      target,
      secondaryMuscles,
      instructions
    }

    const updatedExercise = await exercisesService.updateExercise(id, newData)

    return res.status(200).send({ status: 'OK', data: updatedExercise })
  } catch (error) {
    return res.status(error.status || 500).send({
      status: 'FAILED',
      data: {
        error: error.message
      }
    })
  }
}

module.exports = {
  getAllExercisesController,
  getOneExerciseController,
  createNewExerciseController,
  deleteExerciseController,
  updateExerciseController
}
