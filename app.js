// Importing global http module
const http = require('http');

// Creating a server
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    // process.exit(); // exit server listening


    res.setHeader('Content-Type', 'text/html');
   
    // Writing the response
    res.write('<html>');
    res.write('<head><title>My First Webpage</title></head>')
    res.write('<body><h1>I"m back baby!</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(3000);