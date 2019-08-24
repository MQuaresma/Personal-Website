var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema({
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
    tags: [ String ]
})

module.exports = mongoose.model('Post', postSchema);
