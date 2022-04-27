const express = require("express")
const router = express.Router()
const Users = require('../db/models/userschema')
const ejs = require('ejs')


router.get('/profile/welcome', (req, res) => {
    res.render('users/welcome')
})

router.get('/profile/sign-in', (req, res) => {
        res.render('users/login')
    })

router.get('/profile/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    Users.findOne({username: username, password: password})
    .then((user) => {
        res.render('users/profile', {user: user})
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


router.get('/profile/attributions', (req, res) => {
    res.render('users/attributions')
})


router.get('/profile/sign-up', (req, res) => {
    res.render('users/signup')
});

router.get('/profile/:id/edit', (req, res) => {
    Users.findOne(
        { _id: req.params.id } )
        .then( (user) =>
            res.render('edit', { user: user })
        )
})

router.post('/profile/sign-up', (req, res) => {
    // res.send('received!')
    console.log(req.body)
    Users.create(req.body)
        .then((user) => {
            res.render('users/profile', {user: user})
        })
        .catch(console.error)
})

router.delete('/profile/:id/del', (req, res) => {
    Users.findOneAndRemove(
        {_id: req.params.id},
        )
        .then( () => res.redirect('/profile/login'))
        .catch(console.error)
})

router.put("/profile/:id/edit", (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((users) => {
        const id = req.params.id;
        res.redirect(`/profile/${id}`)}
    );
});

router.get('/profile/:id', (req, res) => {
    Users.findOne(
        { _id: req.params.id } )
        .then( (user) =>
            res.render('users/profile', { user: user })
        )
})



module.exports = router