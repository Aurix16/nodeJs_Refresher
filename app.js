// Importing global http module
const http = require('http');
const routes = require('./routes');

// Creating a server
const server = http.createServer(routes.handler);

server.listen(3000);