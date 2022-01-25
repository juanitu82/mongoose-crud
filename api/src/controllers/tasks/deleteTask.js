const task = require('../../models/tasks')
const tc = require('../../middlewares/tryCatch')

module.exports = tc( async (req, res) => {
    await task.findByIdAndDelete(req.params.id)
    res.json('The task was removed')
})