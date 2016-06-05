var http = require('http');
var url = require('url');
var util = require('util');

var hostname = '127.0.0.1';
var port = 3000;
var distance = 0;


var server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	
	var url_parts = url.parse(req.url, true);
	
	distance = 	Math.pow((url_parts.query.r1 - url_parts.query.r2), 2) +
				Math.pow((url_parts.query.r1 - url_parts.query.r2), 2) +
				Math.pow((url_parts.query.r1 - url_parts.query.r2), 2);
	
	// res.end(util.inspect(distance, {showHidden: false, depth: null}));
	
	console.log(distance);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('uncaughtException', function (err) {
	console.log('Caught exception: ' + err);
});
