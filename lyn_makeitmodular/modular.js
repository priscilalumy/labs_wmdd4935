let fs = require('fs');
let path = require('path');

module.exports = function (direcName, extension, callback){
	fs.readdir(direcName, function(err, data){
		if(err) {
			return callback(err);
		}

		data = data.filter(function(myFile){
			return path.extname(myFile) === '.' + extension;
		})

		callback(null, data);
	})
};