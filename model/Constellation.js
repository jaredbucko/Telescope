// models/constellation.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var constellationSchema = new Schema({
	abbr: String,
	name: String,
	meaning: String,
	content: String,
	connections: [String]
});

constellationSchema.index({abbr: 'text'});
var Constellation = mongoose.model('Constellation', constellationSchema);

module.exports = Constellation;