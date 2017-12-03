let Hapi = require('hapi');
let Inert = require('inert');
let Path = require('path');

let server = new Hapi.Server({
    connections: {routes: {files: {relativeTo: __dirname}}}});

server.register(Inert);

server.connection({
    host: 'localhost', port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET', path: '/', handler: {file: Path.join(__dirname, 'index.html')}
});

server.start();