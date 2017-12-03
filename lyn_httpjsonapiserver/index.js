let http = require('http');
let url = require('url');
let portNum = process.argv[2];
function myParsedTime(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
};

function myUnixTime(time){
  return {unixtime: time.getTime()};
};

let server = http.createServer(function(req, res){
  let myParsedUrl = url.parse(req.url, true);
  let myTime = new Date(myParsedUrl.query.iso);
  let myResult;

  if (/^\/api\/parsetime/.test(req.url)){
    myResult = myParsedTime(myTime);
  } else if (/^\/api\/unixtime/.test(req.url)){
    myResult = myUnixTime(myTime);
  }

  if (myResult) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(myResult));
  } else {
    res.writeHead(404);
    res.end();
  }
})
server.listen(portNum);