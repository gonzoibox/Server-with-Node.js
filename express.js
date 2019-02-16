const express = require('express');
const server = express();

//res.sendFile('./index.html', { root: __dirname});
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html>
        <head>
            <title>Page Title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <h1>Enter</h1>
            <form method="POST">
                <input type="text" name="username">
                <button type="submit">Enter</button>
            </form>
        </body>
    </html>
    `);
})

server.post('/', (req, res) => {
    // console.log(req.body.username);
    // res.send(`Hello ${req.body.username}!`);
    res.send(`
        <!DOCTYPE html>
            <html>
            <head>
                <title>Page Title</title>
            </head>
            <body>
                <h1>Enter</h1>
                <p>Hello, ${req.body.username}</p>
            </body>
        </html>
        `);
});

server.listen(3000, 'localhost', () => console.log("Server is up///"));