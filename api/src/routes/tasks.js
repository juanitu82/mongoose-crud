const { Router } = require('express')
const getTasks = require('../controllers/tasks/getTasks')
const getTaskById = require('../controllers/tasks/getTaskById')
const createTask = require('../controllers/tasks/createTask')
const updateTask = require('../controllers/tasks/updateTask')
const deleteTask = require('../controllers/tasks/deleteTask')

const router = Router()

router.get('/', getTasks)

router.get('/:id', getTaskById)

router.post('/create', createTask )

router.put('/update/:id', updateTask)

router.delete('/delete/:id', deleteTask)

module.exports = router