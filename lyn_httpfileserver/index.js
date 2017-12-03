let fs = require('fs');
let http = require('http');
let portNum = process.argv[2];
let myFile = process.argv[3];
let server = http.createServer(function (req, res){
	fs.createReadStream(myFile).pipe(res);
});
server.listen(portNum);
