const http = require('http');

http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
    <h1>Hello World!</h1>
    <p>This is my first Node.js server!</p>
    `);
}).listen(3000, '127.0.0.1', () => console.log('Listening on 3000..'));

// server.on('request', (req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//     <h1>Hello World!</h1>
//     <p>This is my first Node.js server!</p>
//     `);
// });