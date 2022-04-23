const mongoose = require('../connection')

const habitsSchema = new mongoose.Schema({
    activity: {
        type: [String]
    }
        // social: Boolean,
        // meditation: Boolean,
        // exercise: Boolean,
        // rest: Boolean,
        // yoga: Boolean,
        // dance: Boolean
    ,
    mood: {
        type: String,
        // energized: Boolean,
        // happy: Boolean,
        // meh: Boolean,
        // sad: Boolean,
        // anxious: Boolean,
        // stressed: Boolean
    },
    thoughts: {
        type: String,
    }
},
{
    timestamps: true
})


const Habits = mongoose.model('Habits', habitsSchema)

module.exports = Habits


    