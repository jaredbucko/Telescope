// routes/constellations.js

var express = require('express');
var router = express.Router();
var util = require('./util.js')
var Constellations = require('../models/constellation.js');

router.route('/constellations')
	.get(function(req, res){
		if(req.query.con) get_constellation(req, res, req.query.con);
		else get_all_constellations(req, res);
	})
	.post(function(req, res){
		var constellation = new Constellations(req.body);
		console.log('Saving constellation...');
		constellation.save(function(err, data){
			if(err) console.log('Error saving constellation...');
			else res.end();
		})
	})
	.put(function(req, res){
		var bod = req.body;
		console.log('Updataing constellation...')
		if(bod.stars) toggle_stars(req, res, bod.stars, bod.add_stars);
		else if(bod.connection) toggle_connection(req, res, bod.con, bod.connection, bod.add_connection);
		else console.log('Error: PUT request with no useful content...');
	})

function get_constellation(req, res, con){
	console.log("Getting constellation "+con+"...");
	Constellations.find({abbr: con}, function(err_c, data){
		Stars.find({con: con, incon: true}, function(err_s, star_data){
			if(err_c||err_s) console.log('Error getting constellations: ', err_c||err_s);
			var stars = util.arrToMap(star_data, 'id');
			data.stars = stars;
			res.json(data);
		})
	})
}
function get_all_constellation(req, res){
	console.log("Getting constellations...");
	Constellations.find({}, function(err_c, data){
		Stars.find({incon: true}, function(err_s, star_data){
			if(err_c||err_s) console.log('Error getting constellations: ', err_c||err_s);
			var stars = util.arrToMapMap(star_data, 'con', 'id');
			data = data.map(function(val){
				val.stars = stars[val.abbr];
				return val;
			})
			var constellations = util.arrToMap(data, 'abbr');
			res.json(constellations);
		})
	})
}

function toggle_stars(req, res, stars, add){
	console.log('Updating constellation\'s stars...');
	Stars.update({id: {$in: stars}}, {incon: add}, {multi: true}, function(err, data){
		if(err) console.log('Error updating constellation\'s stars...');
	});
},
function toggle_connection(req, res, con, connection, add){
	console.log('Updating constellation\'s connections[add]...');
	var update = {connections: {$pull: connection}};
	if(!add) update = {connections: {$pull: connection}};
	Constellations.update({con: con}, update, function(err, data){
		if(err) console.log('Error updating constellation\'s connections...');
	})
}

module.exports = router;

