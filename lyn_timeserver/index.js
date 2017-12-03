let net = require('net');
function zeroNumb(num) {
	return num < 10 ? '0' + num:num;
};
let server = net.createServer(function(socket){
	let myDateTime = new Date();
	let dateTime = myDateTime.getFullYear() + '-'
	+ zeroNumb(myDateTime.getMonth() + 1) + '-'
	+ zeroNumb(myDateTime.getDate()) + ' '
	+ zeroNumb(myDateTime.getHours()) + ':'
	+ zeroNumb(myDateTime.getMinutes()) + '\n';
	socket.end(dateTime);
});
server.listen(process.argv[2]);