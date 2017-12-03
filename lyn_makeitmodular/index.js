let myMod = require('./modular.js');
let direc = process.argv[2];
let modString = process.argv[3];
myMod(direc, modString, function(err, data) {
	if (err) {
		return console.log.error('Error', err);
	}
	data.forEach(function(myFile){
		console.log(myFile);
	})
})