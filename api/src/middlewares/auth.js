// const tc = require('./tryCatch')
require("dotenv").config();

const jwt = require('jsonwebtoken')
const user = require('../models/users')

const auth =  async (req, res, next) => {
    try {
     const token = req.header('Authorization').replace('Bearer ', '')
     const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
     const query = await user.findById(decoded.id)

     if (!query) throw new Error('Auth not granted')
     req.token = token
     req.user = query
     console.log(req.user.nombre)
     next()   
    } catch (error) {
        next(error)
    }
    }
 

module.exports = auth