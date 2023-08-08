// Create web server in javascript
// 1. Import http module
const http = require('http');
const fs = require('fs');
const url = require('url');

// 2. Create web server
const server = http.createServer((req, res) => {
    // 3. Send response
    //res.write('Hello from nodejs');
    //res.end();
    const path = url.parse(req.url, true);

    if (path.pathname === '/') {
        fs.readFile('./views/index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (path.pathname === '/about') {
        fs.readFile('./views/about.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (path.pathname === '/contact') {
        fs.readFile('./views/contact.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./views/404.html', (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

});

// 4. Listen to port
server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000');
});