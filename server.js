var http = require('http');
var hostname = '127.0.0.1';
var port = 3000;


var server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('hellooo');

	// url = require('url');
	// var url_parts = url.parse(request.url, true);
	// var query = url_parts.query;



});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('uncaughtException', function (err) {
	console.log('Caught exception: ' + err);
});
