// Create web server
// Create a web server that listens on port 3000 and returns the comments from the comments.json file

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  fs.createReadStream('./comments.json').pipe(res);
});

server.listen(3000);
console.log('Server listening on port 3000');