const express = require('express');
const cookieParser = require('cookie-parser');

let nextId = 1;

const suggestions = [{
    id : '1',
    title : 'Suggestion #1',
    voters: new Set()
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
            title,
            voters: new Set()
        });
        res.redirect('/suggestions');
    });

    server.get('/suggestions/:id', (req, res) => {
        //Show suggestion
       const username = req.cookies.username;
       const suggestion = suggestions.find(suggestion => suggestion.id == req.params.id);

       res.render('suggestion', { username, suggestion });
    });

    server.post('/suggestions/:id', (req, res) => {
        //Create suggestion
        const username = req.cookies.username;
        const suggestion = suggestions.find(suggestion => suggestion.id == req.params.id);

        if (suggestion.voters.has(username)) {
            suggestion.voters.delete(username);
        } else {
            suggestion.voters.add(username);
        }
      
        console.log(suggestion);
        res.redirect(`/suggestions/${suggestion.id}`);
    });

server.listen(3000, 'localhost', () => console.log("Server is up///"));