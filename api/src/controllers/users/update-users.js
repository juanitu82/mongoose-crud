
const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async(req, res) => {
    const query = await user.findByIdAndUpdate( req.user.id, req.body)
    res.send('The user has been updated')
})