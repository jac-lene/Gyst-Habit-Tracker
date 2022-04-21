const mongoose = require('../connection')

const activitySchema = new mongoose.Schema({ name: String })

const habitsSchema = new mongoose.Schema({
    date: {type: String,
        default: null},
    activity: {
        type: [activitySchema],
        default: undefined
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
        default: null,
        // energized: Boolean,
        // happy: Boolean,
        // meh: Boolean,
        // sad: Boolean,
        // anxious: Boolean,
        // stressed: Boolean
    },
    thoughts: {
        type: String,
        default: null,
    }
})


const Habits = mongoose.model('Habits', habitsSchema)

module.exports = Habits


    