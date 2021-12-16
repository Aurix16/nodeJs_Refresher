const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;    
    if (url === '/'){
        // Writing the response
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); // quit function execution
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{ // listen for events
            console.log(chunk);
            body.push(chunk);
        }); 
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302; // redirect code
                res.setHeader('Location','/');
                return res.end();
            });  
        });
        
    }
    
    res.setHeader('Content-Type', 'text/html');
    
    // Writing the response
    res.write('<html>');
    res.write('<head><title>My First Webpage</title></head>');
    res.write('<body><h1>I"m back baby!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandler,
    someText: 'random text'
};