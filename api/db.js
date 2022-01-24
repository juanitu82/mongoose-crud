const mongoose = require('mongoose')

const dbUri = 'mongodb://localhost:27017/test-crud'

const db = async () => {
    try {
        await mongoose.connect(dbUri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        })
        console.log('db connected')   
    } catch (error) {
        console.log(error)
    }
}
module.exports = db