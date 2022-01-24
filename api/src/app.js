const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const corsMid = require('../src/middlewares/cors')
const routes = require('../src/routes/index')
const errors = require('./middlewares/errors')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(corsMid)
app.use(express.static('public'))
app.use('/api', routes)
app.use(errors)

module.exports = app