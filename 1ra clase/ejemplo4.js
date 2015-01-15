/**
 + Ejemplo 4
 */

var fs = require('fs');
var stream = fs.createReadStream('../assets/events.json');

stream.setEncoding('utf8');

stream.on('data', function (chunk) {
	console.log(chunk);
});

stream.on('end', function () {
	console.log('finished');
});