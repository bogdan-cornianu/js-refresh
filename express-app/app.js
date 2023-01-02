const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/lol', (req, res, next) => {
    console.log('in a middleware!');
    res.send('<h1>HELLO!</h1>');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});