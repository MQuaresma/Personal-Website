const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/projects', (req, res)=>{
    res.render('full/projects/index');
});

app.get('/sports', (req, res)=>{
    res.render('full/sports/index');
});

app.get('/contact', (req, res)=>{
    res.render('full/contact/index');
});

app.get('/api', (req, res) => res.send("API in construction..."));

app.listen(8080, () => console.log('Listening on port 8080!'));