const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// testing connection to database
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

// setting handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// connecting static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// connection routes folder
app.use('/routes', require('./controllers/index'));

// main page/renders main page
app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });