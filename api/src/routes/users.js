const {Router} = require('express')
const getUsers = require('../controllers/users/get-users')
const getUserById = require('../controllers/users/get-usersId')
const createUser = require('../controllers/users/create-users')
const loginUser = require('../controllers/users/login')
const myProfile = require('../controllers/users/me')
const updateUser = require('../controllers/users/update-users')
const deleteUser = require('../controllers/users/delete-users')
const app = Router()

app.get('/', getUsers)

app.get('/:id', getUserById)

app.get('/:id/me', myProfile)

app.post('/create', createUser)

app.post('/login', loginUser)

app.put('/update/:id', updateUser)

app.delete('/delete/:id', deleteUser)

module.exports = app