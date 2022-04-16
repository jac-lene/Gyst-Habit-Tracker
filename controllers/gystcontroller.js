const express = require("express")
const router = express.Router()
const Habits = require('../db/models/schema')


router.get('/', (req, res) => {
    console.log('here')
    const results = Habits.find({})
    results.then((habits) => {
        res.send(habits)
    })
})

// router.get('/new', (req, res) => {
//     res.render('todos/new')
// })

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Habits.findById(id)
        .then(habit => {
            res.redirect('/')
        })
        .catch(console.error)
})

router.post('/', (req, res) => {
    // res.send('received!')
    // console.log('in post')
    Habits.create(req.body)
        .then(() => {
            res.redirect('/')
        })
        .catch(console.error)
})

router.delete('/:id', (req, res) => {
    Habits.findOneAndRemove(
        {_id: req.params.id},
        )
        .then( () => res.redirect('/'))
        .catch(console.error)
})

router.put("/:id", (req, res) => {
    Habits.findOneAndUpdate({ _id: req.params.id }, req.body).then((habits) =>
        res.send(habits)
    );
});

router.get('/:id', (req, res) => {
    Habits.findById(req.params.id)
        .then( (habit) =>
            res.send(habit)
        )
})

module.exports = router