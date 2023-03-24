let model = require('../model/task')
let {createCustomError} = require('../customerror/customerror')
let wrapper = require('../middlewares/asyncwrapper')

let getAllTasks = wrapper(async function(req, res) {
        let tasks= await model.find({})
        console.log(tasks)
        return res.status(201).json({tasks})
    }
)

let getTask = wrapper (async function (req, res, next) {
        let id = req.params.id.trim()
        let task= await model.findOne({_id:id})
        if(!task){
            return next(createCustomError(`no such task with this id: ${id}`, 404))
        }
        return res.status(201).json({task})
})

let updateTask = wrapper (async function(req, res, next) {
        let id = req.params.id.trim()
        let task= await model.findOneAndUpdate({_id:id},
                req.body, {new: true, runValidators: true})
        if(!task){
            return next(createCustomError(`no such task with this id: ${id}`, 404))
        }
        return res.status(201).json({"msg": "task updated", task: task})
})

let deleteTask = wrapper (async function (req, res, next) {
        let id = req.params.id.trim()
        let task= await model.findOneAndDelete({_id:id})
        if(!task){
            return next(createCustomError(`no such task with this id: ${id}`, 404))
        }
        return res.status(201).json({"msg": "task deleted"})
})

let createTask =  wrapper(async function(req, res) {
        let doc= await model.create(req.body)
        console.log(doc)
        return res.status(201).json({"responce": 'task created successfully'})
})


module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}
