let Fs = require('fs');
let Hapi = require('hapi');
let Path = require('path');
let Rot13 = require('rot13-transform');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET', path: '/', config: {
        handler: (request, reply) => {
            let myFile = Fs.createReadStream(Path.join(__dirname, 'file.txt'));
            reply(myFile.pipe(Rot13()));
        }
    }
});

server.start();