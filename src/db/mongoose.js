const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        set: value => value.replace(/\s+/g, ' ')
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        set: value => value.replace(/\s+/g, ' '),
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: [6, 'Password needs to be longer than 6 characters.'],
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain the word "password".')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        set: value => value.replace(/\s+/g, ' ')
    },
    completed: {
        type: Boolean
    }
})

const learnMongo = new Task({
    description: ' Take  pills ',
    completed: false
})

learnMongo.save().then(() => {
    console.log(learnMongo)
}).catch((error) => {
    console.log('Error!', error)
})

// const me = new User({
//     name: 'Satan',
//     email: 'satan@hell.com',
//     password: 'hailsatan666',
//     age: 666
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })