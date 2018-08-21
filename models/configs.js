var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConfigsSchema = new Schema({
    version: String,
    developmentStatus: String,
    dataObjects: Number,
    author: String,
    created_at: Date,
    updated_at: Date
});

var Configs = mongoose.model('Configs', ConfigsSchema, 'Configs');

module.exports = Configs;