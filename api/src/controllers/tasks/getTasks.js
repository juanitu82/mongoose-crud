const task = require('../../models/tasks')
const tc = require('../../middlewares/tryCatch')

module.exports = tc( async (req, res) => {
    const query = await task.find()
    
    query.length ? res.json(query) : res.json({ msge: 'No tasks created'})
})