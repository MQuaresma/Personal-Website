const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Hello World"));

app.get('/api', (req, res) => res.send("API in construction..."));

app.listen(8080, () => console.log('Listening on port 8080!'));