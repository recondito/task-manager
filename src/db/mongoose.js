const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const learnMongo = new Task({
//     description: 'Learn MongoDB',
//     completed: true
// })

// learnMongo.save().then(() => {
//     console.log(learnMongo)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const me = new User({
//     name: 'Li-leh',
//     age: 22
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })