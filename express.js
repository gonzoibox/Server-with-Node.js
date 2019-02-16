const express = require('express');
const cookieParser = require('cookie-parser');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.get('/', (req, res) => {
    const username = req.cookies.username;
    res.send(`
    <!DOCTYPE html>
        <html>
        <head>
            <title>Page Title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            ${username ?
            `
            <p>Hello ${username}!</p>
            `
            :
            `
            <h1>Enter</h1>
            <form method="POST">
                <input type="text" name="username">
                <button type="submit">Enter</button>
            </form>
`
        }
        </body>
    </html>
`);
})

server.post('/', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

server.listen(3000, 'localhost', () => console.log("Server is up///"));