const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', (req,res)=>{
    res.render("index");
});

app.get('/api', (req, res) => res.send("API in construction..."));

app.listen(8080, () => console.log('Listening on port 8080!'));