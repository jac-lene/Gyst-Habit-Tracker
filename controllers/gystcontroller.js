const express = require("express")
const router = express.Router()
const Habits = require('../db/models/masterschema')
const ejs = require('ejs')


router.get('/', (req, res) => {
    console.log('here')
    const results = Habits.find({})
    results.then((habits) => {
        res.render('home', { habits: habits})
    })
})

// router.get('/', async (req, res, next) => {
//     try {
//         console.log('here')
//         const results = await Habits.find({})
//         const context = { results }
//         return res.render('home', context);
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

router.get('/add', (req, res) => {
    res.render('new')
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id
    Habits.findById(id)
        .then(habit => {
            res.render('edit', {habit: habit})
        })
        .catch(console.error)
})

router.post('/', (req, res) => {
    // res.send('received!')
    console.log(req.body)
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
    Habits.findOne(
        { _id: req.params.id } )
        .then( (habit) =>
            res.render('show', { habit: habit })
        )
})

module.exports = router