const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')

module.exports = tc( async (req, res) => {
    const query = await user.findById(req.user).populate()
    // res.json({
    //     id: req.user._id,
    //     nombre: req.user.nombre,
    //     email: req.user.email,
    //     myTasks: req.user.myTasks
    // })
    res.json(query)
})