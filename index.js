var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Dawn is trying hard6" }');
});

app.get('/hello', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Are you ready?" }');
});

app.listen(process.env.PORT || 3000);
module.exports = app;//test
