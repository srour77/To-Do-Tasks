let express = require('express');
let app = express();
let tasksRouter = require('./routes/tasks.js');
let dbConnect = require('./db/connect')
require('dotenv').config()
const errorHandler = require('./middlewares/errorhandler');
const notFound = require('./middlewares/notfound');
//middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasksRouter)

//errors
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5500;
const start = (async function() {
    try{
        await dbConnect(process.env.DBURI);
        app.listen(port, console.log(`server is now listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
})()