const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// setting handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// fake api
const fakeApi = () => {
    return [
        {
            name: 'uno',
            category: 'impar'
        },
        {
            name: 'due',
            category: 'par'
        },
        {
            name: 'tre',
            category: 'impar'
        },
        {
            name: 'quattro',
            category: 'par'
        },
        {
            name: 'cinque',
            category: 'impar'
        }
    ]
};

const italian = false;

// main page/renders main page
app.get('/', (req, res) => {
    res.render('main', {layout: 'index', italian: fakeApi(), italianExist: italian});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});