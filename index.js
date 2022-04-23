const express = require('express')
const path = require('path');
const methodOverride = require('method-override')
const gystController = require('./controllers/gystcontroller')

const app = express()

app.set('view engine', 'ejs')

// app.use(express.static('public'))
// app.use(express.static(__dirname + '/' + 'public'));


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));

app.use(gystController)

const port = 5432
app.listen(port, () => {
    console.log('listening to', port)
})