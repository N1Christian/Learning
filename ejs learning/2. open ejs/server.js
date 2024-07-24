var express     = require('express');
var app         = require('express')();
var ejs         = require('ejs');
var server      = require('http').createServer(app);


app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('test');
});

server.listen(3000, function(){
    console.log('app running at port 3000');
});