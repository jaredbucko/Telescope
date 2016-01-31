// server.js

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./routes/main.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Telescope now listening on https://localhost:3000/');