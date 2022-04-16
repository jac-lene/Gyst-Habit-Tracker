const mongoose = require("mongoose")

const mongoURI = 
    process.env.NODE_ENV === 'production'
        ? process.env.DEV_DB_URL
        : `mongodb://localhost:27017/gyst-app`

mongoose
    .connect(mongoURI)
    .then( (instance) => 
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch( (err) => console.log(`Connection to db failed due to: ${err}`))

module.exports = mongoose