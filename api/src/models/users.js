const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'You must enter you name']
    },
    email: {
        type: String,
        required: [true, 'You must enter your email account'],
        lowercase: true,
        validate: [isEmail, 'Enter a validar Email']
    },
    password: {
        type: String,
        minLength: 6,
        required: [true, 'Your password must have a minimum length of 6 chars']
    }
});

userSchema.pre('save', async function(next){
    const hashedPass = await bcrypt.hash(this.password, 8)
    this.password = hashedPass
    next()
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel