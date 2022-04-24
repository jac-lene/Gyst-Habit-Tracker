const express = require("express")
const router = express.Router()
// const Habits = require('../db/models/masterschema')
const Users = require('../db/models/userschema')
const ejs = require('ejs')


router.get('/', (req, res) => {
    console.log('here')
    const results = Users.find({})
    results.then((users) => {
        res.render('home', { users: users})
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

router.get('/:id/edit', (req, res) => {
    Users.findOne(
        { _id: req.params.id } )
        .then( (user) =>
            res.render('edit', { user: user })
        )
})

router.post('/', (req, res) => {
    // res.send('received!')
    console.log(req.body)
    Users.create(req.body)
        .then(() => {
            res.redirect('/')
        })
        .catch(console.error)
})

router.delete('/:id', (req, res) => {
    Users.findOneAndRemove(
        {_id: req.params.id},
        )
        .then( () => res.redirect('/'))
        .catch(console.error)
})

router.put("/:id/edit", (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.id }, req.body).then((user) => {
        const id = req.params.id;
        res.redirect(`/${id}`)}
    );
});

router.get('/:id', (req, res) => {
    Users.findOne(
        { _id: req.params.id } )
        .then( (user) =>
            res.render('show', { user: user })
        )
})

module.exports = router