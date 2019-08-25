const express = require('express');
const mongoose = require('mongoose');
const app = express();
const posts = require('./routers/posts');
const projects = require('./routers/projects');
const Project = require('./models/projects');



mongoose.connect('mongodb://localhost/personal_website', {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:', ));

db.on('open', function(){
    app.use(express.json());
    
    app.use('/posts', posts);
    app.use('/projects', projects);

    app.listen(8080, () => console.log('Listening on port 8080!'));
});
