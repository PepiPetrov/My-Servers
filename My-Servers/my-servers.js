const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('{"name":"Peter","age":12}');
    res.end();
}).listen(8080);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': "text/html" })
    res.write('<html><em><mark>A</mark></em></html>')
    res.end()
}).listen(3000)
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': "text/plain" })
    res.write(req.url)
    res.end()
}).listen(8000)
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/plain"})
    res.write(`${req.statusCode}`)
    res.end()
}).listen(3030)