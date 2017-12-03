let fs = require('fs');
let path = require('path');
let listFiles = fs.readdir(process.argv[2], function(err, data){
	if(!err){
		data.forEach(function(listFiles, i){
			if (path.extname(listFiles) === '.' + process.argv[3]){
				console.log(listFiles);
			}
		});
	}
});