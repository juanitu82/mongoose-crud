const Tasks = require('../../models/tasks')
const tc = require('../../middlewares/tryCatch')

module.exports = tc( async (req, res) => {
    const query = await Tasks.find().select('description -_id').populate('userId', 'nombre -_id')
    
    query.length ? res.json(query) : res.json({ msge: 'No tasks created'})
})