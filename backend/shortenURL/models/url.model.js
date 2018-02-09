var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

/**
 * Schema of URL
 */

var UrlSchema = new Schema({
    longURL: {type: String, required: true},
    shortID: {type: String, required: true},
    shortendURL: {type: String, required: true}
})

module.exports = mongoose.model('URL', UrlSchema);