let mongoose = require('mongoose')

let taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 30
        },
        completed: {
            type: Boolean,
            default: false,
        }
    }
)

module.exports= mongoose.model('taskSchema', taskSchema)
