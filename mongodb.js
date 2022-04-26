const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    db.collection('tasks').findOne({ _id: new ObjectID('62659873ce08492491ae33a0') }, (error, task) => {
        if (error) {
            return console.log('Unable to find task.')
        }
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to find tasks.')
        }
        console.log(tasks)
    })

    // db.collection('users').findOne({ _id: new ObjectID('62659525b423314f39db124b') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user.')
    //     }
    //     console.log(user)
    // })
})