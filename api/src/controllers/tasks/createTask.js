const Tasks = require('../../models/tasks')
const Users = require('../../models/users')
const tc = require('../../middlewares/tryCatch')

module.exports = tc( async (req, res) => {
    const query = await Tasks.create({
        description: req.body.description,
        completed: req.body.completed,
        userId: req.user.id
    })

    await Users.findByIdAndUpdate(req.user.id, {tasks: [...req.user.tasks, query._id] })
    console.log(query)

    res.json('The task was created successfully') 
})