const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        set: value => value.replace(/\s+/g, ' ')
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task