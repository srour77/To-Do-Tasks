let express = require('express')
let router = express.Router()

let {getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask} = require('../controller/tasks.js')

router.route('/').get(getAllTasks)

router.route('/:id').get(getTask)

router.route('/').post(createTask)

router.route('/:id').patch(updateTask)

router.route('/:id').delete(deleteTask)

module.exports = router
