
const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async(req, res) => {
    const { id } = req.params
    const query = await user.findByIdAndUpdate( id, req.body)
    console.log(query)
    res.send('The user has been updated')
})