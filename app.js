const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req,res)=>{
    res.render('full/home/index');
});

app.get('/blog', (req, res)=>{
    res.render('full/blog/index');
});

app.get('/projects', (req, res)=>{
    res.render('full/projects/index');
});

app.get('/about', (req, res)=>{
    res.render('full/about/index');    
});

app.listen(8080, () => console.log('Listening on port 8080!'));