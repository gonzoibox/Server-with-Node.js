const express = require('express');
const cookieParser = require('cookie-parser');

const suggestions = ['Express template'];

const server = express();

server.set('view engine', 'pug');

server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static('public'));

server.get('/', (req, res) => {
    const username = req.cookies.username;
    console.log(username);
    res.render('index', {
        username
    });
});

server.post('/', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

    server.get('/suggestions', (req, res) => {
        //Show sugestion list
        res.render('suggestions', {suggestions});
    });

    server.post('/suggestions', (req, res) => {
        //Create suggestion
        //Redirect list
        throw new Error('Not implemented');
    });

    server.get('/suggestions/1', (req, res) => {
        //Show suggestion
        throw new Error('Not implemented');
    });

    server.post('/suggestions/1', (res, req) => {
        //Create suggestion
        throw new Error('Not implemented');
    });

server.listen(3000, 'localhost', () => console.log("Server is up///"));