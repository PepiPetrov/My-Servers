const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!<br>');
    res.write('<html><body><em>I am <mark><strong>Peter</strong></mark></em></body></html>')
    res.end();
}).listen(8080);