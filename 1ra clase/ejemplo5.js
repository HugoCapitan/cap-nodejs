/**
 + Ejemplo 5
 */
 var http = require('http');
 var fs = require('fs');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'image/png'});
	fs.createReadStream('../assets/image.png').pipe(res);
}).listen(3000);