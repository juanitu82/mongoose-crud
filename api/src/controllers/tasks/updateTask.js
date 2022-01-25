const task = require('../../models/tasks')
const tc = require('../../middlewares/tryCatch')

module.exports = tc( async (req, res) => {
    const query = await task.findByIdAndUpdate(req.params.id, req.body)

    query ? 
    res.json('The task was updated successfully') :
    res.status(404).json("The task doesn't exist")
})