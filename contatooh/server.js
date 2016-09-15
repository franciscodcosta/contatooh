var http = require ('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('servidor node de teste.\n');
}).listen(3000, '127.0.0.1');
