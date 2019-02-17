const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();

server.set('view engine', 'pug');

server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static('public'));

server.get('/', (req, res) => {
    const username = req.cookies.username;
    console.log(req.body.username);
    res.render('index', {
        username
    });
});

server.post('/', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

    server.get('/suggestions', (res, req) => {
        //Show sugestion list
        throw new Error('Not implemented');
    });

    server.post('/suggestions', (res, req) => {
        //Create suggestion
        //Redirect list
        throw new Error('Not implemented');
    });

    server.get('/suggestions/1', (res, req) => {
        //Show suggestion
        throw new Error('Not implemented');
    });

    server.post('/suggestions/1', (res, req) => {
        //Create suggestion
        throw new Error('Not implemented');
    });

server.listen(3000, 'localhost', () => console.log("Server is up///"));