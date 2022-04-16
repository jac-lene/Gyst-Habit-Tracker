const mongoose = require('../connection')

const habitsSchema = new mongoose.Schema(
{   
entry: {
    date: Date,
    activity: {
        social: Boolean,
        meditation: Boolean,
        exercise: Boolean,
        rest: Boolean,
        yoga: Boolean,
        dance: Boolean
    },
    sleep: {
        great: Boolean,
        okay: Boolean,
        poor: Boolean
    },
    hydration: {
        great: Boolean,
        okay: Boolean,
        poor: Boolean
    },
    supplements: Boolean,
    mood: {
        energized: Boolean,
        happy: Boolean,
        meh: Boolean,
        sad: Boolean,
        anxious: Boolean,
        stressed: Boolean
    },
    thoughts: String
}})
    
    


const Habits = mongoose.model('Habits', habitsSchema)

module.exports = Habits


    