const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    // console.log(req.params, typeof req.params.id)
    const query = await user.findById(req.params.id)
    res.json(query)
})