
const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    const instance = await user.create(req.body)
    console.log({...instance, id: instance.id})
    res.json('User created')
})