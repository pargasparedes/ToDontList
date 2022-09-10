const router = require('express').Router();
const login = require('./login');
const register = require('./register');
const user = require('./user');
const dash = require('./dash')

router.use('/login', login);
router.use('/register', register);
router.use('/user', user);
router.use('/dash', dash);

module.exports = router;