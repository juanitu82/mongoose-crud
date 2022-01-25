const task = require('../../models/tasks')
const tc = require('../../middlewares/tryCatch')

module.exports = tc( async (req, res) => {
    const query = await task.findById(req.params.id)

    query ? res.json(query) : res.status(404).json('No task found')
})