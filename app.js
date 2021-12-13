// Importing global http module
const http = require('http');


// Creating a server
const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.headers);
    // process.exit(); // exit server listening
    
});

server.listen(3000);