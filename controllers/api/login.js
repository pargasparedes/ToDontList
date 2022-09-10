const express = require('express');
const router = express.Router();
const User = require('../../models/User');

const itsUser = true;

router.get('/', (req, res) => {
    res.render('main', {layout: 'index', haveUser: itsUser});
});

router.post('/', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
        res.redirect('../dash');
  
    }catch (err) {
      res.status(400).json(err);
    }
  });


//     console.log(req.body);
// });

module.exports = router;