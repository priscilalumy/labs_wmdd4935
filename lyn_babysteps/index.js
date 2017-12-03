let numbers = 0;
process.argv.forEach(function(e,num){
	if (1<num){
		numbers += +e;
	}
});
console.log(numbers);