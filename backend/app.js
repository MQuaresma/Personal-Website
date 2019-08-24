const express = require('express');
const mongoose = require('mongoose');
const app = express();
const posts_model = require('./models/post')


mongoose.connect('mongodb://localhost/personal_website', {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:', ));

db.on('open', function(){
    app.set('view engine', 'ejs');
    app.use(express.static('static'));

    app.get('/', (req,res)=>{
        res.render('full/home/index');
    });

    app.get('/blog', (req, res)=>{
        const first_post = posts_model.find().exec();
        first_post.then(result => {
            console.log(result);
            res.render('full/blog/index', {result: result});
        });
    });

    app.get('/projects', (req, res)=>{
        res.render('full/projects/index');
    });

    app.get('/about', (req, res)=>{
        res.render('full/about/index');    
    });

    app.listen(8080, () => console.log('Listening on port 8080!'));
});
