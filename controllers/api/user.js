const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const User = require('../../models/User');
const Note = require('../../models/Note')

// get users json
router.get('/', async (req, res) => {
    try {
        const userInfo = await User.findAll();
        const noteInfo = await Note.findAll();
        // res.status(200).json(userInfo);
        res.status(200).json(noteInfo);
      } catch (err) {
        res.status(500).json(err);
      }
});

// add a user
router.get('/add', (req, res) => {
    const data = {
        name: 'David',
        email: 'david@msu.com',
        password: '123'
    }

    let { name, email, password } = data;

    // insert into table
    User.create({
        name,
        email,
        password
    })
    .then(users => res.redirect('/users'))
    .catch(err => console.log(err));
});

module.exports = router;