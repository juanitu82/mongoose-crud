
const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    await user.findByIdAndRemove(req.user.id)
    res.send('The user has been deleted')
})