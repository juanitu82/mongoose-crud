const express = require('express')
const router = express.Router()
const usersRoutes = require('./users')
const taskRoutes = require('./tasks')

const auth = require('../middlewares/auth')

router.use('/users', usersRoutes)

router.use('/tasks', taskRoutes)

router.get('/secure1', auth, (req, res) => res.send('Data mega segura'))

router.get('/secure2', auth, (req, res) => res.send('Data mega segura numero 2'))

module.exports = router