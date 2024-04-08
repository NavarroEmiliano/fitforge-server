const { Router } = require('express')
const exercisesController = require('../../controllers/exercisesController')
const router = Router()

router
  .get('/', exercisesController.getAllExercisesController)
  .get('/:id', exercisesController.getOneExerciseController)
  .post('/', exercisesController.createNewExerciseController)
  .delete('/:id', exercisesController.deleteExerciseController)
  .put('/:id', exercisesController.updateExerciseController)

module.exports = router
