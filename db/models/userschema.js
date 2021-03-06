const mongoose = require('../connection')

const entrySchema = new mongoose.Schema({
    activity: {
        type: [String]
    },
    mood: {
        type: String
    },
    thoughts: {
        type: String,
        default: null
    }
},
{
    timestamps: true
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    entries: [entrySchema]
},
{
    timestamps: true
})


const Users = mongoose.model('Users', userSchema)

module.exports = Users