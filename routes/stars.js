// routes/stars.js

var express = require('express');
var router = express.Router();
var Stars = require('../models/star.js');

router.route('/stars')
	.get(function(req, res){
		req.query.page = req.query.page || 1;
		req.query.limit = req.query.limit || 50;
		var query = build_query(req.query);
		Stars.count(query)
			.exec(function(err, count){
				if(err) console.log('Error counting stars...');
				Stars.find(query)
					.select('id proper mag ra dec hd dist bf con incon')
					.limit(req.query.limit)
					.skip((parseInt(req.query.page)-1)*req.query.limit)
					.sort('mag')
					.exec(function(err, stars){
						if(err) console.log('Error sending stars...');
						res.json({count: count, stars: stars});
					})
			})
	})
	.post(function(req, res){
		var star = new Stars(req.body);
		console.log('Saving star...');
		star.save(function(err, data){
			if(err) console.log('Error saving star...');
			else res.end();
		})
	})
	.put(function(req, res){
		console.log('Updataing stars...')
		var add = true;
		if(req.query.remove) add = false;
		Stars.update({id: {$in: req.body.stars }}, {incon: add}, {multi: true}, function(err, data){
			if(err) console.log('Error updating star...');
			res.json(data);
		});
	})

function build_query(opt){
	var query = {};
	if(opt.con) query.con = opt.con;
	if(opt.mag) query.mag = opt.magparam == 'gt' ? {$gt: opt.mag} : {$lt: opt.mag}
	if(opt.search) query.$text = {$search: opt.search}
	return query;
}


module.exports = router;

