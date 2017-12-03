let Hapi = require('hapi');
let Path = require('path');
let Vision = require('vision');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, function (err) {
    if (err) throw err;
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.route({
    method: 'GET', path: '/', handler: {view: 'index.html'}
});

server.start();