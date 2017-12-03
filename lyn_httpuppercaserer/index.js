let http = require('http');
let map = require('through2-map');
let portNum = process.argv[2];
let upperCase = map(function(chunk){
	return chunk.toString().toUpperCase();
});
let server = http.createServer(function(req, res){
	if (req.method === 'POST'){
		req.pipe(upperCase).pipe(res);
	};
});
server.listen(portNum);


