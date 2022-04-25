const mongoose = require('../connection')

// const actSchema = new mongoose.Schema({
//     catName: {
//         type: String,
//         default: 'Activity'
//     },
//     catImg: {
//         type: String,
//         default: 'https://i.imgur.com/lwqy3Ee.png'
//     },
//     name: [String],
//     img: String
// })

const habitsSchema = new mongoose.Schema({
    activity: {
        type: [String],
        default: []},
    mood: String,
        // energized: Boolean,
        // happy: Boolean,
        // meh: Boolean,
        // sad: Boolean,
        // anxious: Boolean,
        // stressed: Boolean
    thoughts: String,
},
{
    timestamps: true
})


const Habits = mongoose.model('Habits', habitsSchema)

module.exports = Habits


    