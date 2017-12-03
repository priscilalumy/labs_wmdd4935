let Hapi = require('hapi');
let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
    
function myHandler (request, reply) {
        reply('Hello ' + request.params.name);
    }

server.route({path: '/{name}', method:'GET', handler: myHandler});
server.start();