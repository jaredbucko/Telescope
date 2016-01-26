// models/star.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var starSchema = new Schema({
	id: Number,
	hip: Number,
	hd: Number,
	hr: Number,
	gl: String,
	bf: String,
	proper: String,
	ra: Number,
	dec: Number,
	dist: Number,
	pmra: Number,
	pmdec: Number,
	rv: Number,
	mag: Number,
	absmag: Number,
	spect: String,
	ci: Number,
	x: Number,
	y: Number,
	z: Number,
	vx: Number,
	vy: Number,
	vz: Number,
	rarad: Number,
	decrad: Number,
	pmrarad: Number,
	pmdecrad: Number,
	bayer: String,
	flam: Number,
	con: String,
	comp: Number,
	comp_primary: Number,
	base: String,
	lum: Number,
	var: String,
	incon: { type: Boolean, default: false},
	var_min: Number,
	var_max: Number
})
starSchema.index({bf: 'text', proper: 'text', con: 'text'})
var Star = mongoose.model('Star', starSchema);

module.exports = Star;