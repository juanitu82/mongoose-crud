const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')

const app = express()

//middleware

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(express.json())
app.use(express.static('public'));

//conexion de BD y servidor
const dbUri = 'mongodb://127.0.0.1:27017/auth'

mongoose.connect(dbUri, 
    {useNewUrlParser: true, useUnifiedTopology: true})
.then( () =>  app.listen(3000, () => {
    console.log('BD conectada')
    console.log('servidor corriendo')
})).catch( (er) => console.log(er) )

//router

app.use(userRoutes)

