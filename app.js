var mymodule = require('./mymodule');
var config = require('./config');
var app= require('express')();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/profile', function (req, res) {
  res.send('Lucas Leonardi');
});


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});

