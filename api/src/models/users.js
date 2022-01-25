const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

userSchema.methods.token = async function() {
    const user = this
    const token = jwt.sign( {id: user._id.toString()}, 'mimegaclave', {expiresIn: '1d' } ) // payload, pass, options
    console.log(jwt.verify(token, 'mimegaclave'))
    return token
}

userSchema.statics.authenticate = async (email, pass) => {
    const query = await userModel.find({ email })

    if(query){
        console.log('argumento', pass)
        console.log('password DB', query[0].password)
        const hashQuery = await bcrypt.compare(pass, query[0].password)
        if(hashQuery) return query
        else throw new Error('Wrong password')
    }
    else throw new Error('The mail doesnt exist in the DB')
}

const userModel = mongoose.model('user', userSchema)

module.exports = userModel