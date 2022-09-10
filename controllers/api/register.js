const express = require('express');
const router = express.Router();

const itsUser = false;

router.get('/', (req, res) => {
    res.render('main', {layout: 'index', haveUser: itsUser});
});


module.exports = router;