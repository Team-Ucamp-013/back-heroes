const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { heroesController } = require('../controllers')
const {
  getHeroes,
  getHeroById,
  createHero,
  updateHero,
  removeHero
} = heroesController

router.get('/', async (req, res) => {
  console.log('get')
  const heroes = await getHeroes()
  res.send(heroes)
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const hero = await getHeroById(id)

  if (!hero) {
    res.status(404)
    return res.send({
      message: `Hero: ${id} not found`
    })
  }

  return res.send(hero)
})


router.post('/', async (req, res) => {
  //validationError
  try {
    const newHero = await createHero()
    res.status(201)
    res.send(newHero)
  } catch (error) {
    console.log(error)
    // 1xx info
    // 2xx ok
    // 3xx delegates action to client
    // 4xx error client
    // 5xx error server
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.send({
        message: 'Error de validación',
        reason: err.message
      })
    }
    res.status(500)
    return res.send({
      error: err.message
    })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body

  const hero = await updateHero(id, body)

  if (!hero) {
    res.status(404)
    return res.send({
      message: `Hero ${id} not found`
    })
  }
  res.send(hero)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const result = await removeHero(id)

  res.send(result)
})


module.exports = router