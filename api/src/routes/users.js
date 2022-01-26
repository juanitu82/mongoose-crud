const {Router} = require('express')
const getUsers = require('../controllers/users/get-users')
const getUserById = require('../controllers/users/get-usersId')
const createUser = require('../controllers/users/create-users')
const loginUser = require('../controllers/users/login')
const myProfile = require('../controllers/users/me')
const updateUser = require('../controllers/users/update-users')
const deleteUser = require('../controllers/users/delete-users')
const auth = require('../middlewares/auth')
const app = Router()

app.get('/', getUsers) //admin

app.get('/me', auth, myProfile)

app.get('/:id', getUserById) //admin

app.post('/create', createUser)

app.post('/login', loginUser)

app.put('/update/:id', auth, updateUser)

app.delete('/delete/:id', auth, deleteUser)

module.exports = app