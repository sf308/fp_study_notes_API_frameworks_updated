const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

const quotes = [
    'Hasta la vista, baby!',
    'I\'m no Frank Sinatra. The only time I sing in real life is at the end of a party when I want the guests to leave' ,
    'I\'ll be back!',
    'Is cereal soup?',
    'I eat Green Berets for breakfast. And right now, I’m very hungry'
];
//const catRoutes = require('./controllers/cats');
//app.use('/cats', catRoutes);
const bookRoutes = require('./controllers/books');
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send(quotes[Math.floor(Math.random()*5)]);
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

module.exports = app;
