const express = require('express');
const cookieParser = require('cookie-parser');

let nextId = 1;

const suggestions = [{
    id : 1,
    title : 'Suggestion #1'
}];

const server = express();

server.set('view engine', 'pug');

server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static('public'));

server.get('/', (req, res) => {
    const username = req.cookies.username;
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
        const title = req.body.title;
        suggestions.push({
            id: ++nextId,
            title
        });
        res.redirect('/suggestions');
    });

    server.get('/suggestions/:id', (req, res) => {
        //Show suggestion
       const suggestion = suggestions.find(suggestion => suggestion.id == req.params.id);
       res.render('suggestion', { suggestion });
    });

    server.post('/suggestions/1', (req, res) => {
        //Create suggestion
        throw new Error('Not implemented');
    });

server.listen(3000, 'localhost', () => console.log("Server is up///"));