const task = require('../../models/tasks')
const tc = require('../../middlewares/tryCatch')

module.exports = tc( async (req, res) => {
    const query = await task.create(req.body)

    res.json('The task was created successfully') 
})