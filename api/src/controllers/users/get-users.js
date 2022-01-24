const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    const query = await user.find()
    console.log(query[0]._id.toString())
    res.json(query)
})