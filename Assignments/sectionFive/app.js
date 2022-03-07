// Importing global http module
const express = require("express");

const app = express();

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   next();
// });

app.use('/users', (req, res, next) => {
  console.log('In second middleware');
  res.send('<h1>The Users Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In second middleware');
    res.send('<h1>Hello from Express!</h1>');
  });

// Creating a server
app.listen(3000);