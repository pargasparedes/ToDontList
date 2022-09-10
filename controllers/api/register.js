const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const User = require('../../models/User');

const itsUser = false;

router.get('/', (req, res) => {
    res.render('main', {layout: 'index', haveUser: itsUser});
});

router.post('/', (req, res) => {
    let { name, email, password } = req.body;
    console.log("hello");

    //insert into table
    User.create({
        name,
        email,
        password
    })
    .then(newUser => res.redirect('/routes/api/login'))
    .catch(err => console.log(err));
})

module.exports = router;