/* const axios = require('axios')
const { Exercise } = require('../models/index')

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: { limit: '300' },
  headers: {
    'X-RapidAPI-Key': 'd2211adac8msh10b35b17ccb3806p13cdcdjsnd587b98ef700',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

const loadExercisesFromAPI = async () => {
  try {
    const { data } = await axios.request(options)

    const exercises = await Exercise.bulkCreate(data)
    if (exercises.length)
      return 'All exercises were uploaded to the database successfully'
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  loadExercisesFromAPI
}
 */