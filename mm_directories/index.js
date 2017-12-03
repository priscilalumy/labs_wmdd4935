let Hapi = require('hapi');
let Inert = require('inert');
let Path = require('path');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Inert);

server.route({
    method: 'GET', path: '/foo/bar/baz/{filename}', handler: {directory: {path: Path.join(__dirname, 'public')}}
});

server.start();
