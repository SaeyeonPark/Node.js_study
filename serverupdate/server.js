const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('<h1>This is home page</h1>')
});

app.get('/profile', function(req, res) {
    res.send('<h1>holly shit</h1>');
});

app.listen(3000, function() {
    console.log('fuck 3000');
});