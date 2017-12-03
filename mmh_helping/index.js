let Hapi = require('hapi');
let Vision = require('vision');
let Path = require('path');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, (err) => {
    if (err) throw err;
});

server.views({
    path: Path.join(__dirname, 'templates'), engines: {html: require('handlebars')}, helpersPath:  Path.join(__dirname, 'helpers')
});

server.route({
    method: 'GET', path: '/', handler: {view: 'index.html'}
});

server.start();