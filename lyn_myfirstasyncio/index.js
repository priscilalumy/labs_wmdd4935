let fs = require('fs');
fs.readFile(process.argv[2], function(err, data){
	if(err){
		return console.log.error(err);
	}
	console.log(data.toString().match(/\n/g).length);
});