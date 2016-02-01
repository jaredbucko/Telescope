// routes/main.js

var express = require('express');
var router = express.Router();
var stars = require('./stars.js');
var constellations = require('./constellations.js');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/telescope');

router.get('/', function(req, res){
	res.end('Welcome to Telescope');
})
router.options('*', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.end();
})

router.use(stars);
router.use(constellations);

module.exports = router;

