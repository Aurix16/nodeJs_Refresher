const fs = require('fs');

const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        // Writing the response
        res.write('<html>');
        res.write('<head><title>Enter Users First Name</title></head>');
        res.write('<body><h1>Enter Users First Name</h1><form action="/create-user" method="POST"><input type="text" name="userName"><button type="submit">Submit Name</button></form></body>');
        res.write('</html>');
        return res.end(); // quit function execution
    }

    if (url === '/users'){
        // Writing the response
        res.write('<html>');
        res.write('<head><title>Users First Name</title></head>');
        res.write('<body><ul><li>John</li><li>Jane</li></ul></body>');
        res.write('</html>');
        return res.end(); // quit function execution
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{ // listen for events
            console.log(chunk);
            body.push(chunk);
        }); 
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('userName.txt', message, err =>{
                res.statusCode = 302; // redirect code
                res.setHeader('Location','/');
                return res.end();
            });  
        });
        
    }
}

module.exports = {
    handler: requestHandler,
    someText: 'random text'
};