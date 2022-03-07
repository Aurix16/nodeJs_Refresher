// Importing global modules
const http = require('http');
const routes = require('./routes');

// Creating the server
const server = http.createServer(routes.handler);

server.listen(3000);