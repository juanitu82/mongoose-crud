const tc = require('../../middlewares/tryCatch')
const user = require('../../models/users')





module.exports = tc( async (req, res) => {
    console.log(req.headers)
    const {email, password} = req.body
    const query = await user.authenticate(email, password)
    const token = await query[0].token()
    res.json({user: query, token})
    
})