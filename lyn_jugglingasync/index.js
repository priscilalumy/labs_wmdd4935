let http = require('http');
let myArray = [];

for (let i=2; i < process.argv.length; i++){
  myArray.push(process.argv[i]);
}

myUrl(myArray[0], function(){
  myUrl(myArray[1], function(){
    myUrl(myArray[2], function(){

    });
  });
});

function myUrl(url, callback) {
  let finalInfo = '';
  http.get(url, function(response){
    response.setEncoding('utf8');
    response.on('data', function(add){
      finalInfo += add;
    });
    response.on('end', function(){
      console.log(finalInfo);
      callback();
    });
  })
}