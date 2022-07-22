const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();

app.get('/', (request, response) => {
    response.send('<h1>살려주세요</h1>');
});

app.get('main', (request, response) => {
    response.send('<h1>Hello World</h1><p>This is main page</p>');
});

app.use((request, response) => {
    response.send('<h1>Sorry, page not found :(</h1>');
});

app.listen(3000, () => {
    console.log('localhost:3000 from start server');
});