const mongoose = require('../connection')

// const moodSchema = new mongoose.Schema({
//     name: String,
//     image: {
//             type: String,
//             default: 'https://i.imgur.com/MWiGByN.png'
//         }
// })

const habitsSchema = new mongoose.Schema({
    activity: {
                name: {type: [String],
                },
                image: {
                    type: String,
                    default: 'https://i.imgur.com/lwqy3Ee.png'
                }},
    mood: {
            name: {
                type:String},
            image: {
                    type: String,
                    default: 'https://i.imgur.com/MWiGByN.png'
                }},
    thoughts: {
        content: { type: String},
        image: {
            type: String,
            default: 'https://i.imgur.com/l8WUbhB.png'
        }
}},
{
    timestamps: true
})


const Habits = mongoose.model('Habits', habitsSchema)

module.exports = Habits


    