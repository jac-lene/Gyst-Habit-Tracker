const mongoose = require('../connection')

const habitsSchema = new mongoose.Schema({
    date: String,
    activity: [ {
        name: String} ]
        // social: Boolean,
        // meditation: Boolean,
        // exercise: Boolean,
        // rest: Boolean,
        // yoga: Boolean,
        // dance: Boolean
    ,
    mood: {
        name: String
        // energized: Boolean,
        // happy: Boolean,
        // meh: Boolean,
        // sad: Boolean,
        // anxious: Boolean,
        // stressed: Boolean
    },
    thoughts: {
        content: String,
    }
})
    
    


const Habits = mongoose.model('Habits', habitsSchema)

module.exports = Habits


    