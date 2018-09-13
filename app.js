const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/computersci', (req, res)=>{
    res.render('full/computersci/index');
});

app.get('/computersci/sokoban', (req, res)=>{
    res.render('full/computersci/sokoban/index');
});

app.get('/eletronics', (req, res)=>{
    res.render('full/eletronics/index');
});

app.get('/sports', (req, res)=>{
    res.render('full/sports/index');
});

app.get('/contact', (req, res)=>{
    res.render('full/contact/index');
});

app.get('/api', (req, res) => res.send("API in development..."));

app.listen(8080, () => console.log('Listening on port 8080!'));