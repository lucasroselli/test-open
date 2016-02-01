var mymodule = require('./mymodule');
var config = require('./config');
var app= require('express')();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/profile', function (req, res) {
  res.send('Lucas Leonardi');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});