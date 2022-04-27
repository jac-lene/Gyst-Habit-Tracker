const Habits = require('./models/masterschema')

const seedData = require('./seeds.json')

Habits.deleteMany({})
// .then( () => {
//     return Habits.insertMany(seedData)
// })
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()})