const express = require('express')
const router = express.Router()

const heroesRouter = require('./heroes')

router.use('/heroes', heroesRouter)

module.exports = router