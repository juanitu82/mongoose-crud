const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    const query = await user.find().populate('tasks')
    console.log(query)
    res.json(query)
})