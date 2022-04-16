const express = require('express')
const methodOverride = require('method-override')
const gystController = require('./controllers/gystcontroller')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use(gystController)

const port = 5432
app.listen(port, () => {
    console.log('listening to', port)
})