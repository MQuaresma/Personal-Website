var mongoose = require('mongoose')
var Schema = mongoose.Schema

var projectSchema = new Schema({
    name: String,
    language: [String],
    repo_link: String,
    description: String,
    tags: [ String ]
})

module.exports = mongoose.model('Project', projectSchema)
