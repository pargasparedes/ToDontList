const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('dash', {layout: 'index'});
});

module.exports = router;