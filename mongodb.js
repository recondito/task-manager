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
    
    // db.collection('users').insertOne({
    //     name: 'Astaroth',
    //     age: 66
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user.')
    //     }
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Lanaerys',
    //         age: 19
    //     }, {
    //         name: 'Alby',
    //         age: 32
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Learn MongoDB.',
    //         completed: true
    //     }, {
    //         description: 'Get Byleth into Elite Smash.',
    //         completed: false
    //     }, {
    //         description: 'Have Lunch.',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents.')
    //     }
    //     console.log(result.insertedIds)
    // })
})