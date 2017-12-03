let userArray = process.argv.slice(2);
let myResult = {};
[, myResult.username, myResult.email] = userArray;
console.log(myResult);