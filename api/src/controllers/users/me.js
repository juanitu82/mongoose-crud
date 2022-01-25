const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    const query = await user.findById(req.params.id)
    return {
        nombre: query.nombre,
        email: query.email
    }
})