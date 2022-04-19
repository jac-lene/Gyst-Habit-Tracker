const mongoose = require('../connection')

const habitsSchema = new mongoose.Schema({
    date: String,
    activity: [ {
        category: String,
        name: String,
        img: String} ]
        // social: Boolean,
        // meditation: Boolean,
        // exercise: Boolean,
        // rest: Boolean,
        // yoga: Boolean,
        // dance: Boolean
    ,
    mood: {
        category: String,
        name: String,
        img: String
        // energized: Boolean,
        // happy: Boolean,
        // meh: Boolean,
        // sad: Boolean,
        // anxious: Boolean,
        // stressed: Boolean
    },
    thoughts: {
        category: String,
        content: String,
        img: String,
    }
})
    
    


const Habits = mongoose.model('Habits', habitsSchema)

module.exports = Habits


    