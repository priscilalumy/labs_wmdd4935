let http = require('http');
http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	multiData = '';
	response.on('data', function(data){
		multiData += data;
	});
	response.on('error', console.error);
	response.on('end', function(){
		console.log(multiData.length + '\n' + multiData);
	});
});