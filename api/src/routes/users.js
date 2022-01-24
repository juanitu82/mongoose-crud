const {Router} = require('express')
const tc = require('../middlewares/tryCatch')
const user = require('../models/users')
const getUsers = require('../controllers/users/get-users')
const getUserById = require('../controllers/users/get-usersId')
const createUser = require('../controllers/users/create-users')
const updateUser = require('../controllers/users/update-users')
const deleteUser = require('../controllers/users/delete-users')
const app = Router()

app.get('/users', getUsers)

app.get('/users/:id', getUserById)

app.post('/users/create', createUser)

app.put('/users/update/:id', updateUser)

app.delete('/users/delete/:id', deleteUser)

module.exports = app