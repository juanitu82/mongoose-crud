const db = require('./db');
const app = require('./src/app')

const port = process.env.PORT || 3002;

db()
    .then(app.listen(port, console.log(`server listening in port ${port}`)))
    .catch('Something happened')
    

