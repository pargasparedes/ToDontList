const express = require('express');
const router = express.Router();
const Note = require('../../models/Note');

const loggedIn = true;

router.get('/', (req, res) => {
    res.render('home', {layout: 'index', showDash: loggedIn});
});

router.post('/', (req, res) => {
    let { info } = req.body;
    res.status(200);

    //insert into table
    Note.create({
        info
    })
    .catch(err => console.log(err));
});

module.exports = router;