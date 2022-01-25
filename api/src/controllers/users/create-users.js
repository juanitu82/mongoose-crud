
const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    const instance = await user.create(req.body)
    const token = await instance.token()
    res.json({
        msge: 'User created',
        user: instance,
        token: token
    })
})